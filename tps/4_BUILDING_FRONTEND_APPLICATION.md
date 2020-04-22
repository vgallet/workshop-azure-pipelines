# Building Frontend Application

Let’s add a new job to build frontend application. This job has to use the task `NodeTool@0` to install NodeJs and NPM tools. 

```yaml
- task: NodeTool@0 
```

Using script task, you can now run `npm install` and `npm run tests` to execute the tests. 

Once again, one test is failing. You may have also noticed that frontend are not published directly to Tests view. Using `PublishTestResults@2` task, you can publish tests reports.

You can correct failing tests and re run the pipeline.

<details>
<summary>Git branch</summary>

`building-frontend-app`

</details>

