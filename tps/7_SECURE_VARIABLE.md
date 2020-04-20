# Secure Variable

Sometimes your CI/CD flow needs to have sensitive variables like password. You can’t directly put them in `azure-pipelines.yml`. 

One way to protect your sensitives variables is to use variable groups. Let’s say you want to add the variable `my-password` to your pipeline.

First of all, create a variable group named `secure-variable` in the `Library` part.

![Create Variable Group](2020-04-20_11-40.png)

Then, you can add your variable `my-password` inside the group.

![Create Variable Group](2020-04-20_11-42.png)

Don’t forget to click on the padlock icon to hide the value of this variable and to save your variable group.

Finally, inject your variable group to your pipeline and print the value of the variable `my-password`.

```yaml
variables:
  - group: 'secure-variable'
```

```yaml
- script: echo $(my-password)
```

<details>
<summary>Git branch</summary>

`secure-variable`

</details>