package com.TalentSearch.project.Dto;


import com.TalentSearch.project.Entities.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AllFormData {

    private Info info;
    private Contact contact;
    private Education education;
    private Work work;
    private Skill skill;


}
