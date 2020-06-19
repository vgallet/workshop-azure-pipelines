# Vocabulary

Azure Devops has its own words to describe all the concepts you were used to in Jenkins.

## Pipeline

A pipeline defines the continuous integration and deployment process for an application. It's made up of one or more stages. It can be thought of as a workflow that defines how test, build, and deployment steps are run.

## Stage

A stage is a logical groupement in the pipeline. It can be used to mark separation of concerns (e.g., Build, Database tests, Image build...). Each stage contains one or more jobs.

## Job

A stage contains one or more jobs. Each job runs on an agent. A job represents an execution boundary of a set of steps. All of the steps run together on the same agent. For example, the database tests stage will contain a separate job for each database type tests execution.

## Step

A step is the smallest building block of a pipeline. A step can either be a script or a task.

## Script
A script runs code as a step in your pipeline using command line, PowerShell, or Bash. A script is custom code that is specific to your pipeline.

## Task
A task is the building block for defining automation in a pipeline. A task is a packaged script or procedure that has been abstracted with a set of inputs.

## Run
A run represents one execution of a pipeline. It collects the logs associated with running the steps and the results of running tests. During a run, Azure Pipelines will first process the pipeline and then hand off the run to one or more agents. Each agent will run jobs. 

## Agent
When your build or deployment runs, the system begins one or more jobs. An agent is installable software that runs one job at a time.
