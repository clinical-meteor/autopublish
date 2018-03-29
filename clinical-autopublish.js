import { get } from 'lodash';

if (Meteor.isClient){
  console.log('Autosubscribing to publications.')
  Meteor.startup(function() {

    if(Package['clinical:hl7-resource-allergy-intolerance']){
      Meteor.subscribe("AllergyIntolerances");
    }
    if(Package['clinical:hl7-resource-audit-event']){
      Meteor.subscribe("AuditEvents");
    }
    if(Package['clinical:hl7-resource-condition']){
      Meteor.subscribe("Conditions");
    }
    if(Package['clinical:hl7-resource-consent']){
      Meteor.subscribe("Consents");
    }
    if(Package['clinical:hl7-resource-contract']){
      Meteor.subscribe("Contracts");
    }     
    if(Package['clinical:hl7-resource-communication']){
      Meteor.subscribe("Communications");
    }            
    if(Package['clinical:hl7-resource-device']){
      Meteor.subscribe("Devices");
    }
    if(Package['clinical:hl7-resource-diagnostic-report']){
      Meteor.subscribe("DiagnosticReports");
    }
    if (Package['clinical:hl7-resource-endpoint']){
      Meteor.subscribe("Endpoints");
    }
    if(Package['clinical:hl7-resource-encounter']){
      Meteor.subscribe("Encounters");
    }
    if(Package['clinical:hl7-resource-family-member-history']){
      Meteor.subscribe("FamilyMemberHistories");
    }
    if(Package['clinical:hl7-resource-healthcare-service']){
      Meteor.subscribe("HealthcareServices");
    }
    if(Package['clinical:hl7-resource-imaging-study']){
      Meteor.subscribe("ImagingStudies");
    }
    if(Package['clinical:hl7-resource-immunization']){
      Meteor.subscribe("Immunizations");
    }
    if(Package['clinical:hl7-resource-location']){
      Meteor.subscribe("Locations");
    }
    if(Package['clinical:hl7-resource-observation']){
      Meteor.subscribe("Observations");
    }
    if(Package['clinical:hl7-resource-organization']){
      Meteor.subscribe("Organizations");
    }
    if(Package['clinical:hl7-resource-patient']){
      Meteor.subscribe("Patients");
    }
    if(Package['clinical:hl7-resource-practitioner']){
      Meteor.subscribe("Practitioners");
    }      
    if(Package['clinical:hl7-resource-questionnaire']){
      Meteor.subscribe("Questionnaires");
    }
    if(Package['clinical:hl7-resource-questionnaire-response']){
      Meteor.subscribe("QuestionnaireResponses");
    }
    if(Package['clinical:hl7-resource-risk-assessment']){
      Meteor.subscribe("RiskAssessments");
    }
    if(Package['clinical:hl7-resource-practitioner-role']){
      Meteor.subscribe("PractitionerRoles");
    }
    if(Package['clinical:hl7-resource-procedure']){
      Meteor.subscribe("Procedures");
    }      
  });
}






if (Meteor.isServer){
  console.log('Autopublishing loaded FHIR resources.')

  Meteor.startup(function() {
    if(Package['clinical:hl7-resource-allergy-intolerance']){
      Meteor.publish("AllergyIntolerances", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return AllergyIntolerances.find();
          } else {
            return [];
          }  
        } else {
          return AllergyIntolerances.find();
        }
      });
    }   
    if(Package['clinical:hl7-resource-audit-event']){
      Meteor.publish("AuditEvents", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return AuditEvents.find();
          } else {
            return [];
          }  
        } else {
          return AuditEvents.find();
        }
      });
    }
    if(Package['clinical:hl7-resource-communication']){
      Meteor.publish("Communications", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return Communications.find();
          } else {
            return [];
          }  
        } else {
          return Communications.find();
        }
      });
    }    
    if(Package['clinical:hl7-resource-condition']){
      Meteor.publish("Conditions", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return Conditions.find();
          } else {
            return [];
          }  
        } else {
          return Conditions.find();
        }
      });
    }         
    if(Package['clinical:hl7-resource-consent']){
      Meteor.publish("Consents", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return Consents.find();
          } else {
            return [];
          }  
        } else {
          return Consents.find();
        }
      });
    }     
    if(Package['clinical:hl7-resource-contract']){
      Meteor.publish("Contracts", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return Contracts.find();
          } else {
            return [];
          }  
        } else {
          return Contracts.find();
        }
      });
    }     
    if(Package['clinical:hl7-resource-device']){
      Meteor.publish("Devices", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return Devices.find();
          } else {
            return [];
          }  
        } else {
          return Devices.find();
        }
      });
    }     

    if(Package['clinical:hl7-resource-diagnostic-report']){
      Meteor.publish("DiagnosticReports", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return DiagnosticReports.find();
          } else {
            return [];
          }  
        } else {
          return DiagnosticReports.find();
        }
      });
    }

    if(Package['clinical:hl7-resource-encounter']){
      Meteor.publish("Encounters", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return Encounters.find();
          } else {
            return [];
          }  
        } else {
          return Encounters.find();
        }
      });
    }   
    if(Package['clinical:hl7-resource-endpoint']){
      Meteor.publish("Endpoints", function (argument){
        return Endpoints.find();

        // if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
        //   if (this.userId) {
        //     return Endpoints.find();
        //   } else {
        //     return [];
        //   }  
        // } else {
        //   return Endpoints.find();
        // }
      });
    }   
    if(Package['clinical:hl7-resource-family-member-history']){
      Meteor.publish("FamilyMemberHistories", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return FamilyMemberHistories.find();
          } else {
            return [];
          }  
        } else {
          return FamilyMemberHistories.find();
        }
      });
    }


    if(Package['clinical:hl7-resource-healthcare-service']){
      Meteor.publish("HealthcareServices", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return HealthcareServices.find();
          } else {
            return [];
          }  
        } else {
          return HealthcareServices.find();
        }
      });
    }


    if(Package['clinical:hl7-resource-imaging-study']){
      Meteor.publish("ImagingStudies", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return ImagingStudies.find();
          } else {
            return [];
          }  
        } else {
          return ImagingStudies.find();
        }
      });
    }
    if(Package['clinical:hl7-resource-immunization']){
      Meteor.publish("Immunizations", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return Immunizations.find();
          } else {
            return [];
          }  
        } else {
          return Immunizations.find();
        }
      });
    }

    if(Package['clinical:hl7-resource-location']){
      Meteor.publish("Locations", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return Locations.find();
          } else {
            return [];
          }  
        } else {
          return Locations.find();
        }
      });
    }
    
    if(Package['clinical:hl7-resource-organization']){
      Meteor.publish("Organizations", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return Organizations.find();
          } else {
            return [];
          }  
        } else {
          return Organizations.find();
        }
      });
    }

    if(Package['clinical:hl7-resource-observation']){
      Meteor.publish('Observations', function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return Observations.find();
          } else {
            return [];
          }  
        } else {
          return Observations.find();
        }
      });
    }

    if(Package['clinical:hl7-resource-practitioner']){
      Meteor.publish("Practitioners", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return Practitioners.find();
          } else {
            return [];
          }  
        } else {
          return Practitioners.find();
        }
      });
    }    

    if(Package['clinical:hl7-resource-practitioner-role']){
      Meteor.publish("PractitionerRoles", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return PractitionerRoles.find();
          } else {
            return [];
          }  
        } else {
          return PractitionerRoles.find();
        }
      });
    }


    
 
    if(Package['clinical:hl7-resource-patient']){
      Meteor.publish("Patients", function (query){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (!query) {
            query = {};
          }
  
          var options = {
            sort: {}
          };
  
          options.sort["meta.lastUpdated"] = -1;
  
          if (Meteor.settings && Meteor.settings.public && Meteor.settings.public.defaults && Meteor.settings.public.defaults.subscriptionLimit) {
            options.limit = Meteor.settings.public.defaults.subscriptionLimit;
          }
  
          process.env.DEBUG && console.log("Patients.publication", query, options);
  
          // user is logged in
          if (this.userId) {
            return Patients.find(query, options);
          } else {
            return [];
          }
        } else {
          return Patients.find();
        }
      });
    }

    if(Package['clinical:hl7-resource-questionnaire-response']){
      Meteor.publish("QuestionnaireResponses", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return QuestionnaireResponses.find();
          } else {
            return [];
          }  
        } else {
          return QuestionnaireResponses.find();
        }
      });
    }
    if(Package['clinical:hl7-resource-questionnaire']){
      Meteor.publish("Questionnaires", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return Questionnaires.find();
          } else {
            return [];
          }  
        } else {
          return Questionnaires.find();
        }
      });
    }

    if(Package['clinical:hl7-resource-risk-assessment']){
      Meteor.publish("RiskAssessments", function (query){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (!query) {
            query = {};
          }
  
          var options = {
            sort: {}
          };
  
          options.sort["meta.lastUpdated"] = -1;
  
          if (Meteor.settings && Meteor.settings.public && Meteor.settings.public.defaults && Meteor.settings.public.defaults.subscriptionLimit) {
            options.limit = Meteor.settings.public.defaults.subscriptionLimit;
          }
  
          process.env.DEBUG && console.log("RiskAssessments.publication", query, options);
  
          // user is logged in
          if (this.userId) {
            return RiskAssessments.find(query, options);
          } else {
            return [];
          }
        } else {
          return RiskAssessments.find();
        }        
      });
    }   


    if(Package['clinical:hl7-resource-procedure']){
      Meteor.publish("Procedures", function (argument){
        if(get(Meteor, 'settings.public.defaults.requireAuthorization')){
          if (this.userId) {
            return Procedures.find();
          } else {
            return [];
          }  
        } else {
          return Procedures.find();
        }      
      });
    }      
  });
}



