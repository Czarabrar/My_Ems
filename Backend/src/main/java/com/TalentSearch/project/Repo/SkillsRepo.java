package com.TalentSearch.project.Repo;

import com.TalentSearch.project.Entities.Info;
import com.TalentSearch.project.Entities.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SkillsRepo extends JpaRepository<Skill,Long> {
    Optional<Skill> findByTalentId(int talentId);
}
