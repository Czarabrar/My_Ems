package com.TalentSearch.project.Repo;

import com.TalentSearch.project.Entities.Contact;
import com.TalentSearch.project.Entities.Info;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContactRepo extends JpaRepository<Contact,Long> {
    Optional<Contact> findByTalentId(int talentId);
}
