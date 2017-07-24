


  if (Meteor.isClient){
    Meteor.startup(function() {
      if(Package['clinical:hl7-resource-allergy-intolerance']){
        Meteor.subscribe("AllergyIntolerances");
      }
      if(Package['clinical:hl7-resource-audit-event']){
        Meteor.subscribe("AuditEvents");
      }
      if(Package['clinical:hl7-resource-device']){
        Meteor.subscribe("Devices");
      }
      if(Package['clinical:hl7-resource-diagnostic-report']){
        Meteor.subscribe("DiagnosticReports");
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


    Meteor.startup(function() {
      if(Package['clinical:hl7-allergy-intolerance']){
        Meteor.publish("AllergyIntolerances", function (argument){
          if (this.userId) {
            return AllergyIntolerances.find();
          } else {
            return [];
          }
        });
      }   
      if(Package['clinical:hl7-resource-audit-event']){
        Meteor.publish("AuditEvents", function (argument){
          if (this.userId) {
            return AuditEvents.find();
          } else {
            return [];
          }
        });
      }

      if(Package['clinical:hl7-resource-device']){
        Meteor.publish("AuditEvents", function (argument){
          if (this.userId) {
            return Devices.find();
          } else {
            return [];
          }
        });
      }     

      if(Package['clinical:hl7-resource-diagnostic-report']){
        Meteor.publish("DiagnosticReports", function (argument){
          if (this.userId) {
            return DiagnosticReports.find();
          } else {
            return [];
          }
        });
      }

      if(Package['clinical:hl7-resource-encounter']){
        Meteor.publish("Encounters", function (argument){
          if (this.userId) {
            return Encounters.find();
          } else {
            return [];
          }
        });
      }   

      if(Package['clinical:hl7-resource-family-member-history']){
        Meteor.publish("FamilyMemberHistories", function (argument){
          if (this.userId) {
            return FamilyMemberHistories.find();
          } else {
            return [];
          }
        });
      }




      if(Package['clinical:hl7-resource-healthcare-service']){
        Meteor.publish("HealthcareServices", function (argument){
          if (this.userId) {
            return HealthcareServices.find();
          } else {
            return [];
          }
        });
      }


      if(Package['clinical:hl7-resource-imaging-study']){
        Meteor.publish("ImagingStudies", function (argument){
          if (this.userId) {
            return ImagingStudies.find();
          } else {
            return [];
          }
        });
      }
      if(Package['clinical:hl7-resource-immunization']){
        Meteor.publish("Immunizations", function (argument){
          if (this.userId) {
            return Immunizations.find();
          } else {
            return [];
          }
        });
      }

      if(Package['clinical:hl7-resource-location']){
        Meteor.publish("Locations", function (argument){
          if (this.userId) {
            return Locations.find();
          } else {
            return [];
          }
        });
      }
      
      if(Package['clinical:hl7-resource-organization']){
        Meteor.publish("Organizations", function (argument){
          if (this.userId) {
            return Organizations.find();
          } else {
            return [];
          }
        });
      }

      if(Package['clinical:hl7-resource-observations']){
        Meteor.publish('Observations', function (argument){
          if (this.userId) {
            return Observations.find();
          } else {
            return [];
          }
        });
      }


      if(Package['clinical:hl7-resource-practitioner-role']){
        Meteor.publish("PractitionerRoles", function (argument){
          if (this.userId) {
            return PractitionerRoles.find();
          } else {
            return [];
          }
        });
      }


      
   
      if(Package['clinical:hl7-resource-patient']){
        Meteor.publish("Patients", function (query){

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
        });
      }

      if(Package['clinical:hl7-resource-questionnaire-response']){
        Meteor.publish("QuestionnaireResponses", function (argument){
          if (this.userId) {
            return QuestionnaireResponses.find();
          } else {
            return [];
          }
        });
      }
      if(Package['clinical:hl7-resource-questionnaire']){
        Meteor.publish("Questionnaires", function (argument){
          if (this.userId) {
            return Questionnaires.find();
          } else {
            return [];
          }
        });
      }

      if(Package['clinical:hl7-resource-risk-assessment']){
        Meteor.publish("RiskAssessments", function (query){

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
        });
      }   


      if(Package['clinical:hl7-resource-procedure']){
        Meteor.publish("Procedures", function (argument){
          if (this.userId) {
            return Procedures.find();
          } else {
            return [];
          }
        });
      }      
    });
  }



  