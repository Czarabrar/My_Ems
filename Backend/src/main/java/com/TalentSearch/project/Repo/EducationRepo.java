package com.TalentSearch.project.Repo;

import com.TalentSearch.project.Entities.Education;
import com.TalentSearch.project.Entities.Info;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EducationRepo extends JpaRepository<Education, Long> {
    Optional<Education> findByTalentId(int talentId);
}
