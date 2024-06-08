package com.TalentSearch.project.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Contact_info")
public class Contact {

    @Id
    @Column(name="contactId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long contactId;

    @Column(name="PersonalEmail")
    private String personalEmail;

    @Column(name="OfficialEmail")
    private String officialEmail;

    @Column(name="Mobile")
    private String mobile;

    @Column(name="Gender")
    private String gender;

    @Column(name="Address")
    private String address;

    @Column(name = "talent_id")
    private int talentId;

}
