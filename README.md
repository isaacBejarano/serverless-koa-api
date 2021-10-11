# serverless-koa-api
*Koa REStful API. Built in Typescript. Continuous Integration / Continuos Delivery. SOLID Principles. To be deployed on Netlify.\
It'll serve traditional and popular Spanish idioms.*

## Jamstack
*Node.js / Koa / Typescript / CI/CD / REST*

## Commands and Scripts
### Clone and setup loclal project
1. `git clone https://github.com/isaacBejarano/serverless-koa-api.git`
2. `npm install`

### Transpile API to JavaScript
`npm run jam`

### Serve API locally
`npm run serve`

### Wrap API to Netlify Lambda Function
`npm run ntl:build`

### Serve Lambda locally
`npm run ntl:serve`

### Workflow for Netlify CI/CD *(using Bash)*
1. `npm run jam && npm run ntl:build`
2. then stage, commit and push to production's branch, as specified in Netlify Deployment

### Workflow for Netlify CI/CD *(using Bash)*
1. `npm run jam && npm run ntl:build`
2. then stage, commit and push to production's branch
3. `netlify deploy --prod`

> **NOTE**: *Don't forget to specify the "publish" directory in the **Netlify UI** or in your local **netlify.toml** file*


## Host - fallback view - "Captain America goes Fullstack Developer"
https://refranero-api.netlify.app

## Namespace
https://refranero-api.netlify.app/.netlify/functions/api

## Endpoints
* /slangs
* /months
* /populars

Example: https://refranero-api.netlify.app/.netlify/functions/api/populars

## Operations
```[.js]
method: 'GET'
```

## Headers
```
'Access-Control-Allow-Origin': '*'
```

> **NOTE**: *The Headers will eventually become private with restricted origin policy*

## Deploy Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/f5459825-8347-49fd-b191-c54ea1ea5e40/deploy-status)](https://app.netlify.com/sites/refranero-api/deploys)
