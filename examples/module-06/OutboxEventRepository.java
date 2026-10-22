package com.nova.loyalty.points;

import java.time.Instant;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface OutboxEventRepository extends JpaRepository<OutboxEvent, UUID> {

    @Modifying
    @Query("delete from OutboxEvent e where e.createdAt < :cutoff")
    int deletePublishedBefore(@Param("cutoff") Instant cutoff);
}
