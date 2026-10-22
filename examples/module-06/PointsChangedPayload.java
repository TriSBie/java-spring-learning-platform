package com.nova.loyalty.points;

public record PointsChangedPayload(String eventId, Long memberId, long delta, long balanceAfter, String reason) {
}
