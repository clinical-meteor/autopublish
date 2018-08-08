import { Meteor } from 'meteor/meteor';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

Meteor.startup(function(){

  // // Don't let people write arbitrary data to their 'profile' field from the client
  if(Package['clinical:hl7-resource-patient']){
    Patients.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  if(Package['clinical:hl7-resource-allergy-intolerance']){
    AllergyIntolerances.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  if(Package['clinical:hl7-resource-careplan']){
    CarePlans.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
    Goals.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  if(Package['clinical:hl7-resource-condition']){
    Conditions.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  if(Package['clinical:hl7-resource-device']){
    Devices.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  if(Package['clinical:hl7-resource-diagnostic-report']){
    DiagnosticReports.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  
  if(Package['clinical:hl7-resource-immunization']){
    Immunizations.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  if(Package['clinical:hl7-resource-list']){
    Lists.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  if(Package['clinical:hl7-resource-location']){
    Locations.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  if(Package['clinical:hl7-resource-medication']){
    Medications.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  if(Package['clinical:hl7-resource-medication-order']){
    MedicationOrders.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  if(Package['clinical:hl7-resource-medication-statement']){
    MedicationStatements.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  if(Package['clinical:hl7-resource-observation']){
    Observations.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  if(Package['clinical:hl7-resource-organization']){
    Organizations.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  if(Package['clinical:hl7-resource-patient']){
    Patients.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  if(Package['clinical:hl7-resource-practitioner']){
    Practitioners.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  if(Package['clinical:hl7-resource-procedure']){
    Procedures.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });
  }
  
  if(Package['clinical:hl7-resource-risk-assessment']){
    RiskAssessments.allow({
      update() { return true; },
      insert() { return true; },
      remove() { return true; }
    });    
  }
})