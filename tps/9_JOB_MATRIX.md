# Job Matrix

Your team wants to migrate its Backend application from Java 8 to Java 11. However, the team wants to be sure that the project still works with JDK 8 and JDK 11.

One way to do that is to duplicate the Backend building job and change the JDK version. But it does not follow the DRY (Don’t Repeat Yourself) principle and it increases the amount of code to maintain.

Another way is to use [Job Matrix feature](https://docs.microsoft.com/en-us/azure/devops/pipelines/yaml-schema?view=azure-devops&tabs=schema%2Cparameter-schema#matrix).

Create a matrix to the Backend job.

```yaml
strategy:
  matrix:
    JDK11:
      JAVA_VERSION: '1.11'
    JDK8:
      JAVA_VERSION: '1.8'

```

Then, you can use the variable `JAVA_VERSION` in the Maven task.

<details>
<summary>Git branch</summary>

`job-jdk-matrix`

</details>
