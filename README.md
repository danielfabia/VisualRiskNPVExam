# NPV Profile Calculator

The Net Present Value (NPV) Profile Calculator calculates NPV for a given series of Cash Flows and range of Discount Rates 

An online demo is available [here](https://vr-npv.azurewebsites.net)

The API documentation can be access via the Swagger UI [here](https://vr-npv-service.azurewebsites.net)

## Setup for Development

##### Repository
Clone repository at https://github.com/danielfabia/VisualRiskNPVExam

##### Database
The code first migration by default will create database at localhost and with database of "VRNPVDb". Open the DataContextFactory.cs of the Data project. Edit connection string if needed. Follow below to install database.

1. Open a command prompt at folder "Data".
2. Run "dotnet ef database update".

##### Angular App
The Angular app is integrated into the WebApp project.

Run "npm install" to download packages.

Run "ng build --watch" to re-build.

