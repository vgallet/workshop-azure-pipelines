# Getting Started

Azure Pipelines is part of Azure Devops. It lets you implement continuous integration and continuous delivery (CI/CD).

During this workshop, you will learn how to create a pipeline to build a  Maven / Java application and a NodeJs application. You will also discover Azure Pipelines features like pipeline caching, variables, parameters and templating. 

## Anatomy of a pipeline

![Anatomy of a pipeline](2020-04-17-1458.png)

A pipeline is composed of stages, each stage in pipeline is run sequentially. In this diagram, Stage 2 will be executed right after Stage 1.
A stage is composed of jobs. For example, Stage 1 has 2 jobs : Job A and Job B.
A job is executed on an agent. An agent is a machine, it can be compared to a Jenkins slave. With Azure, an agent can be a Microsoft-hosted agent or a self-hosted agent. We will talk more about agent later. 
Inside a stage, each job can be executed simultaneously or sequentially. Finally, a job is composed of steps. A step can be a Microsoft task or a script and each step is run sequentially.

If you want to go deeper with those concepts, you can browse official documentation of [pipeline concepts](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/key-pipelines-concepts?view=azure-devops) and [agent](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/agents?view=azure-devops&tabs=browser).

## Pricing & Pool Agent
If you're working on a public project, Azure Pipelines is free to use. Otherwise, if you’re working on a private project, you can run up to 1,800 minutes (30 hours) of pipeline jobs for free every month.

You can take a look of all availables type of agent [here](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/hosted?view=azure-devops).
All agents come with a set of [installed softwares](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu1804-README.md). During this workshop, we’re are going to use `ubuntu-latest`.


## Setup

First of all, you have to fork this repository to your Github account

```
https://github.com/vgallet/workshop-pipeline
```

Then, in order to start with Azure Pipeline you need to create a [Microsoft account](https://azure.microsoft.com/en-us/services/devops/pipelines/) if you haven’t one.

Once you logged, you have to create a project 

![Create Azure Pipelines Project](2020-04-17_16-18.png)

Next, you have to select your repository in Github

![Select Github Repository](2020-04-17_16-24.png)

And finally select “starter pipeline”. It will automatically create a minimal pipeline file inside your repository.

![Create Azure Pipelines YAML File](2020-04-17_16-25.png)