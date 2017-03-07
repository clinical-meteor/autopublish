##clinical:autopublish  

Autopublish FHIR resources to authenticated users.  This package is more restrictive than the default `autopublish` package and requires that a user be logged in.  However, it's less restrictive than having custom publish/subscribe functions, and assumes that all users of the application should have access to any/all records in the database.  

THIS PACKAGE DOES NOT INSURE HIPAA COMPLIANCE.  It's better than the default `autopublish` package, however.  

===============================
#### Installation  

````bash
# remove the default autopublish package which publishes all collections to all users
meteor remove autopublish

# only publish FHIR collections to logged in users
meteor add clinical:autopublish
````

===============================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
