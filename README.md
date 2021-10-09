# serverless-koa-api
*Koa REStful API. Built in Typescript. Continuous Integration / Continuos Delivery. SOLID Principles. To be deployed on Netlify.\
It'll serve traditional and popular Spanish idioms.*

## Jamstack
*Node.js / Koa / Typescript / CI/CD / REST*

## Commands and Scripts
### Clone and setup loclal project
git clone XXXX
npm install

### Transpile API to JavaScript
npm run jam

### Serve API locally
npm run serve

### Wrap API to Netlify Lambda Function
npm run ntl:build

### Serve Lambda locally
npm run ntl:serve

### Workflow for Netlify CI/CD
1. npm run jam && npm run ntl:build
2. then stage, commit and push to production's branch, as Specified in Netlify Deployment

### Workflow for Netlify CI/CD (being "master" the production branch)
1. npm run jam && npm run ntl:build
2. then stage, commit and push to production's branch
3. netlify deploy --prod

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
