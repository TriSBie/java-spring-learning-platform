package com.nova.loyalty.points;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PointsWalletRepository extends JpaRepository<PointsWallet, Long> {

    Optional<PointsWallet> findByMemberId(Long memberId);
}
