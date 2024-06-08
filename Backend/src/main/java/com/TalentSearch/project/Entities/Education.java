package com.TalentSearch.project.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Education_info")
public class Education {

    @Id
    @Column(name="EducationId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long educationId;

    @Column(name="Qualification")
    private String qualification;

    @Column(name = "School")
    private String school;

    @Column(name="Qualifying_Marks")
    private double marks;

    @Column(name="PassedOutYear")
    private String year;

    @Column(name = "talent_id")
    private int talentId;

}
