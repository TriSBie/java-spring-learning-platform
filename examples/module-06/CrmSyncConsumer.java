package com.nova.loyalty.crm;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.UUID;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class CrmSyncConsumer {

    private static final Logger log = LoggerFactory.getLogger(CrmSyncConsumer.class);

    private final ProcessedEventRepository processedRepository;
    private final CrmClient crmClient;
    private final ObjectMapper objectMapper;

    public CrmSyncConsumer(ProcessedEventRepository processedRepository,
                           CrmClient crmClient,
                           ObjectMapper objectMapper) {
        this.processedRepository = processedRepository;
        this.crmClient = crmClient;
        this.objectMapper = objectMapper;
    }

    @KafkaListener(topics = "nova.points.changed", groupId = "crm-sync")
    @Transactional(transactionManager = "crmTransactionManager")
    public void onPointsChanged(String messageJson) {
        CrmPointsEvent event = parse(messageJson);
        try {
            processedRepository.saveAndFlush(new ProcessedEvent(event.eventId()));
        } catch (DataIntegrityViolationException duplicate) {
            log.info("Duplicate event {} ignored", event.eventId());
            return;
        }
        crmClient.upsertPoints(event.memberId(), event.balanceAfter());
    }

    private CrmPointsEvent parse(String json) {
        try {
            return objectMapper.readValue(json, CrmPointsEvent.class);
        } catch (JsonProcessingException ex) {
            throw new IllegalArgumentException("Invalid PointsChanged payload", ex);
        }
    }

    public record CrmPointsEvent(UUID eventId, Long memberId, long delta, long balanceAfter, String reason) {
    }
}
