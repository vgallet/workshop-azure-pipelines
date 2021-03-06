# Templating

To facilitate the maintainability of your pipeline, Azure Pipelines offers the possibility to create template to mutualize common tasks.

Create a file `print-variable.yml` with this content:

```yaml
parameters:
- name: VARIABLE
  type: string
  default: “Hello World”

steps:
- script: echo ${{ parameters.VARIABLE }}
```

Next, you can use it to replace the task that print the variable `my-password`.

```yaml
- template: print-variable.yml
  parameters:
    VARIABLE: $(my-password)
```

:::tip
Templates can be used to mutualize steps, jobs and stages.
:::

<details>
<summary>Git branch</summary>

`template-print-variable`

</details>