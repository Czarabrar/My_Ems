package com.TalentSearch.project.Controller;

import com.TalentSearch.project.Dto.AllFormData;
import com.TalentSearch.project.Entities.*;
import com.TalentSearch.project.Repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/talent")
public class MainController {

    @Autowired
    private InfoRepo infoRepo;

    @Autowired
    private ContactRepo contactRepo;

    @Autowired
    private EducationRepo educationRepo;

    @Autowired
    private WorkRepo workRepo;

    @Autowired
    private SkillsRepo skillsRepo;

    @PostMapping("/submit")
    public ResponseEntity<String> submitAllData(@RequestBody AllFormData formData) {
        try {
            Info info = formData.getInfo();
            Contact contact = formData.getContact();
            Education education = formData.getEducation();
            Work work = formData.getWork();
            Skill skills = formData.getSkill();

            // Save each entity to their respective tables
            infoRepo.save(info);
            contactRepo.save(contact);
            educationRepo.save(education);
            workRepo.save(work);
            skillsRepo.save(skills);

            return new ResponseEntity<>("Data saved successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error saving data", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/info")
    public List<Info> getAllinfo(){
        return infoRepo.findAll();
    }

    @GetMapping("/info/get/{id}")
    public Optional<Info> getinfo(@PathVariable long id)
    {
        return  infoRepo.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable Long id)
    {
         infoRepo.deleteById(id);
    }

    @GetMapping("/get/{talentId}")
    public AllFormData getAllData(@PathVariable int talentId)
    {
        Optional<Info> info =  infoRepo.findByTalentId(talentId);
        Optional<Contact> contact = contactRepo.findByTalentId(talentId);
        Optional<Education> education = educationRepo.findByTalentId(talentId);
        Optional<Work> work = workRepo.findByTalentId(talentId);
        Optional<Skill> skill = skillsRepo.findByTalentId(talentId);

        AllFormData allvalue = new AllFormData();
        allvalue.setInfo(info.get());
        allvalue.setContact(contact.get());
        allvalue.setEducation(education.get());
        allvalue.setWork(work.get());
        allvalue.setSkill(skill.get());
        return allvalue;
    }
    @PutMapping("/update/{talentId}")
    public ResponseEntity<String> updateAllData(@PathVariable int talentId, @RequestBody AllFormData formData) {
        try {
            Optional<Info> existingInfoOptional = infoRepo.findByTalentId(talentId);
            if (existingInfoOptional.isPresent()) {
                Info existingInfo = existingInfoOptional.get();
                Info newInfo = formData.getInfo();
                existingInfo.setName(newInfo.getName());
                existingInfo.setDepartment(newInfo.getDepartment());
                existingInfo.setDesignation(newInfo.getDesignation());
                existingInfo.setJoiningDate(newInfo.getJoiningDate());
                infoRepo.save(existingInfo);
            } else {
                return new ResponseEntity<>("Info data with talentId " + talentId + " not found", HttpStatus.NOT_FOUND);
            }

            Optional<Contact> existingContactOptional = contactRepo.findByTalentId(talentId);
            if (existingContactOptional.isPresent()) {
                Contact existingContact = existingContactOptional.get();
                Contact newContact = formData.getContact();
                existingContact.setPersonalEmail(newContact.getPersonalEmail());
                existingContact.setOfficialEmail(newContact.getOfficialEmail());
                existingContact.setMobile(newContact.getMobile());
                existingContact.setGender(newContact.getGender());
                existingContact.setAddress(newContact.getAddress());
                contactRepo.save(existingContact);
            } else {
                return new ResponseEntity<>("Contact data with talentId " + talentId + " not found", HttpStatus.NOT_FOUND);
            }
            Optional<Education> existingEducationOptional = educationRepo.findByTalentId(talentId);
            if(existingEducationOptional.isPresent()){
                Education existingEducation = existingEducationOptional.get();
                Education newEducation = formData.getEducation();
                existingEducation.setQualification(newEducation.getQualification());
                existingEducation.setSchool(newEducation.getSchool());
                existingEducation.setMarks(newEducation.getMarks());
                existingEducation.setYear(newEducation.getYear());
                educationRepo.save(existingEducation);
            }else {
                return new ResponseEntity<>("Education data with talentId "+talentId +"not found",HttpStatus.NOT_FOUND);
            }
            Optional<Work> existingWorkOptional = workRepo.findByTalentId(talentId);
            if(existingWorkOptional.isPresent()){
                Work existingWork = existingWorkOptional.get();
                Work newWork = formData.getWork();
                existingWork.setOrganization(newWork.getOrganization());
                existingWork.setDesignation(newWork.getDesignation());
                existingWork.setFromdate(newWork.getFromdate());
                existingWork.setTodate(newWork.getTodate());
                workRepo.save(existingWork);
            }else {
                return new ResponseEntity<>("work data with talentId "+talentId +"not found",HttpStatus.NOT_FOUND);
            }

            Optional<Skill> existingSkillOptional = skillsRepo.findByTalentId(talentId);
            if(existingSkillOptional.isPresent())
            {
                Skill existingSkill = existingSkillOptional.get();
                Skill newSkill = formData.getSkill();
                existingSkill.setSkillGroup(newSkill.getSkillGroup());
                existingSkill.setSkill(newSkill.getSkill());
                skillsRepo.save(existingSkill);
            }
            else {
                return new ResponseEntity<>("skill data with talentId "+talentId +"not found",HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>("Data updated successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error updating data", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}
