package com.nova.loyalty.points;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Version;

@Entity
@Table(name = "points_wallet")
public class PointsWallet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "member_id", nullable = false, unique = true)
    private Long memberId;

    @Column(nullable = false)
    private long balance;

    @Version
    private long version;

    protected PointsWallet() {
    }

    public PointsWallet(Long memberId, long balance) {
        this.memberId = memberId;
        this.balance = balance;
    }

    public void applyDelta(long delta) {
        long next = this.balance + delta;
        if (next < 0) {
            throw new IllegalStateException("Insufficient points balance");
        }
        this.balance = next;
    }

    public Long getId() {
        return id;
    }

    public Long getMemberId() {
        return memberId;
    }

    public long getBalance() {
        return balance;
    }

    public long getVersion() {
        return version;
    }
}
