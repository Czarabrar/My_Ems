package com.TalentSearch.project.Repo;

import com.TalentSearch.project.Entities.Info;
import com.TalentSearch.project.Entities.Work;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WorkRepo extends JpaRepository<Work,Long> {
    Optional<Work> findByTalentId(int talentId);
}
