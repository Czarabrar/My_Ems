package com.TalentSearch.project.Repo;

import com.TalentSearch.project.Entities.Info;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InfoRepo extends JpaRepository<Info,Long> {
    Optional<Info> findByTalentId(Integer talentId);
}
