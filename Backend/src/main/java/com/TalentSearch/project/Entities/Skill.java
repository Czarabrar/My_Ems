package com.TalentSearch.project.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Skills")
public class Skill {
    @Id
    @Column(name="SkillsId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long skillsId;


    @Column(name="skillGroup")
    private String skillGroup;

    @Column(name="skill")
    private String skill;


    @Column(name = "talent_id")
    private int talentId;
}
