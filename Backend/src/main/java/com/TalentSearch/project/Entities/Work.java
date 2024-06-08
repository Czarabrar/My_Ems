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
@Table(name="Work_Experience")
public class Work {

    @Id
    @Column(name="WorkId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long workId;

    @Column(name="Organization")
    private String organization;

    @Column(name="Designation")
    private String designation;

    @Column(name="fromDate")
    private String fromdate;

    @Column(name="toDate")
    private String todate;

    @Column(name = "talent_id")
    private int talentId;
}
