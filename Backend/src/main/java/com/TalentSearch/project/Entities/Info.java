package com.TalentSearch.project.Entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Talent_info")
public class Info {
    @Id
    @Column(name="infoId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long infoId;

    @Column(name = "talent_id", unique = true, nullable = false)
    private Integer talentId;

    @Column(name="Talent_name")
    private String name;

    @Column(name="Department")
    private String department;

    @Column(name="Designation")
    private String designation;

    @Column(name="JoiningDate")
    private String joiningDate;


}
