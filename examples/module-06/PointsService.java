package com.nova.loyalty.points;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.UUID;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PointsService {

    private final PointsWalletRepository walletRepository;
    private final OutboxEventRepository outboxRepository;
    private final ObjectMapper objectMapper;

    public PointsService(PointsWalletRepository walletRepository,
                         OutboxEventRepository outboxRepository,
                         ObjectMapper objectMapper) {
        this.walletRepository = walletRepository;
        this.outboxRepository = outboxRepository;
        this.objectMapper = objectMapper;
    }

    @Transactional(transactionManager = "coreTransactionManager")
    public PointsWallet changePoints(Long memberId, long delta, String reason) {
        PointsWallet wallet = walletRepository.findByMemberId(memberId)
                .orElseThrow(() -> new IllegalArgumentException("Wallet not found for member " + memberId));
        wallet.applyDelta(delta);
        PointsWallet saved = walletRepository.save(wallet);

        UUID eventId = UUID.randomUUID();
        PointsChangedPayload payload = new PointsChangedPayload(
                eventId.toString(), memberId, delta, saved.getBalance(), reason);
        OutboxEvent event = new OutboxEvent(
                eventId,
                "POINTS_WALLET",
                String.valueOf(memberId),
                "PointsChanged",
                toJson(payload));
        outboxRepository.save(event);
        return saved;
    }

    private String toJson(PointsChangedPayload payload) {
        try {
            return objectMapper.writeValueAsString(payload);
        } catch (JsonProcessingException ex) {
            throw new IllegalStateException("Cannot serialize outbox payload", ex);
        }
    }
}
