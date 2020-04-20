# Reduce Building Time

## Caching Maven dependencies

As building backend and building frontend are two distinct jobs, they can be run in parallel is a good point to minimize building time.

Nevertheless, backend and frontend jobs have to download needed dependencies at each build. It’s possible to use a cache mechanism to avoid downloading those libraries each time.

This mechanism is documented [here](https://docs.microsoft.com/en-us/azure/devops/pipelines/release/caching?view=azure-devops).

Warning, the right task to use is `CacheBeta@1` in Azure Pipelines YAML file.

<details>
<summary>Git branch</summary>

`caching-maven-dependencies`

</details>


## Caching Node dependencies

You can use the same mechanism to cache the `node_modules` directory.

<details>
<summary>Git branch</summary>

`caching-node-dependencies`

</details>