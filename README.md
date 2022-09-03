# Node Js Api with Youtube API
Youtube Node JS Api integrated with Youtube API


## Prerequisites
```
- Git
- Node 
- Aws Cli
- Account for Aws
- Make a table "videos" in Dynamodb Panel
- Account for Google
- Access Key for the Youtube API
```

## Data Structure
When creating the table in the Dynamodb engine, the table must have this data structure:
```
- id(uuid): String
- video_link: String
- video_id: String
- title: String
- description: String
- thumbnail: String
- created_at(timestamp): Number
```

## Clone & Configure
```
git clone https://github.com/krsrk/youtube-node-app.git
cd youtube-node-app
cp .env.example .env
```
Put your AWS and Youtube API credentials in the .env file.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```
### To browser and test the project
```
http://localhost:8000
```

### Compiles and minifies for production and Deploys to AWS Lambda
```
aws configure
npm run deploy
```
Deploys to AWS Lambda.