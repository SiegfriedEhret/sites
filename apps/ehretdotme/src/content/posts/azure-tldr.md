---
date: "2019-02-04T00:00:00.000Z"
updatedAt: "2021-05-24T06:46:43.082Z"
title: "Azure, TL;DR"
description: Just a quick post to go over my experience with Microsoft Azure.
tags:
  - cloud
  - tldr
---

Just a quick post to go over my experience with [Microsoft Azure](https://azure.microsoft.com).

I used Azure during my last mission at SFEIR last year for about 1.5 months.

I talked in another post (in French) about how our experience was with Azure and some persons asked me more details about it. This is it.

## Azure Functions

Coding with Azure Functions was not really a pleasure, I don't like to be a prisoner of a platform and I felt like that more than with the other cloud providers.

Working with [`context`](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node#context-object) was difficult at first and I was actually hoping to have [TypeScript](https://www.typescriptlang.org/) bindings to help me, but there were inexistant. [It's there now](https://azure.microsoft.com/en-us/blog/improving-the-typescript-support-in-azure-functions/) !

We had access to a v10.x Node.js runtime, which is really cool.

I am not a fan about how the [files structure](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node#folder-structure).

And I felt into the «oh I uploaded the dev dependencies when I deploy». Classic [PEBKAC](https://en.wikipedia.org/wiki/User_error#Acronyms_and_other_names).

One weird thing also: to create functions you first need to create a [Function App](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-function-app-portal). I chose some region in Europe to create my Function App, but the related items (Storage Account...) were created in another region... I had to create everything manually to make sure everything was in the region I wanted.

Note: I used [AWS Lambda](https://aws.amazon.com/lambda/) and [Google Cloud Functions](https://cloud.google.com/functions/) previously, I think that those were easier to work with.

## Scripting the platform

We used [Azure Resource Manager](https://docs.microsoft.com/en-us/azure/azure-resource-manager/). That was hard.

### Type inconsistencies

For example to create a [Service Bus](https://docs.microsoft.com/en-us/azure/templates/microsoft.servicebus/allversions), here are the types for the authorization rules:

- On a [namespace](https://docs.microsoft.com/en-us/azure/templates/microsoft.servicebus/2017-04-01/namespaces/authorizationrules): `Microsoft.ServiceBus/namespaces/AuthorizationRules`
- On a [queue](https://docs.microsoft.com/en-us/azure/templates/microsoft.servicebus/2017-04-01/namespaces/queues/authorizationrules): `Microsoft.ServiceBus/namespaces/queues/authorizationRules`

The `AuthorizationRules` (or `authorizationRules`) should be written in only 1 way, or both should be valid).

### Children and dependsOn

Your resources may have children, and your resources may depend on other resources.

Like in [this example](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-define-dependencies#child-resources) which describes a SQL database which needs a SQL server (I'll strip out some data):

```json
"resources": [
  {
    "name": "[variables('sqlserverName')]",
    "type": "Microsoft.Sql/servers",
    "resources": [
      {
        "name": "[parameters('databaseName')]",
        "type": "databases",
        "dependsOn": [
          "[variables('sqlserverName')]"
        ]
      }
    ]
  }
]
```

Why whould the database (`[parameters('databaseName')]`) whould `dependsOn` on the server (`[variables('sqlserverName')]`) since it is already a child of it ?

### Coding in JSON

Also, the templating format is json so you have to code in json strings :(

See the example from this page about [Variables](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-templates-variables):

```json
"variables": {
  "storageName": "[concat(toLower(parameters('storageNamePrefix')), uniqueString(resourceGroup().id))]"
},
```

I don't know anyone who would like to code like this. Even if the support for this template is great in Visual Studio Code (which is not the editor I use, but that's another story).

Tools like [Terraform](https://www.terraform.io/) may have helped a little bit but we were advised against it because it was not an official product so we won't have any support, which brings me to the last part...

My experience with AWS is a little bit far from now but I remember struggling with some JSON also. I had a nicer experience with the Deployment Manager from GCP.

## Support

> **How many "Azure Architectes" do you need to help a team who doesn't know the plarform?**<br>
> Answer: 2 more every 2 weeks.

When we arrived on the project there were 2 Microsoft persons already. Nice guys. They really helped us to understand the big picture of the projet and gave us some tips when we were blocked. But we needed more help to really understand the platform and work with it.

Microsoft brought 2 new persons in the project. It turned out that they were not here to help us. So we needed more. So they brought 2 new persons. And the previous ones stayed. WHAT.

Also, unrelated to Azure, the Director for this was another Microsoft guy who imposed his way of doing software and agile, which hadn't progress in 20 years. It was hard.

## Azure DevOps

We moved from an Atlassian Stack to Azure DevOps. This is very personal but I wished we hadn't made this move. This is a mix of Github + Jenkins + Jira which is not as good as them.

I am not a big fan of Jira but compared to the same functionality on Azure DevOps, Jira is awesome.
