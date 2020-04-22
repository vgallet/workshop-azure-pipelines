# Building Backend Application

## Build, Test & Package

Let’s edit `azure-pipelines.yml` file to add a build application stage with a build backend application job.

```yaml
stages :
 - stage: Build
   displayName: Build Application
   jobs:
     - job: Backend
       displayName: Build Backend Application
```

Next, by using [Maven Task](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/build/maven?view=azure-devops) you are going to build the application using Maven goals `clean package` and a JDK 1.8. Don’t forget to set `publishJUnitResults` to true.

Now your build is failing as there is test failure. You can see the details of tests executions in Tests View.

![Azure Pipelines Test View](2020-04-18_10-48.png)

Let’s correct it.

<details>
<summary>Git branch</summary>

`building-backend-app`

</details>

## Add Code Coverage Reports

The application is already configured to use  [JaCoCo Maven Plugin](eclemma.org/jacoco/trunk/doc/maven.html) so you can use `codeCoverageToolOption` and `codeCoverageSourceDirectories` options to display code coverage reports.

<details>
<summary>Git branch</summary>

`building-backend-app`

</details>
