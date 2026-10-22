package com.nova.loyalty.crm;

public interface CrmClient {

    void upsertPoints(Long memberId, long balanceAfter);
}
