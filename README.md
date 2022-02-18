# Nodejs Weblog

# Environment vars
This project uses the following environment variables:

| Name     | Description          | Default Value                                  |
|----------|----------------------| -----------------------------------------------|
| CORS     | Cors accepted values | "*"      |
| Mongoddb | Mongodb DataBase     | "*"      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 8.0.0


# Getting started
- Clone the repository
```
git clone  https://github.com/mammadsafar/Weblog.git
```
- Install dependencies
```
cd Weblog
npm install
npm install nodemon

install mongodb DataBase
```
- Build and run the project
```
npm start
```
Navigate to `http://localhost:3000`




# Common Issues

## npm install fails
The current solution has an example for using a private npm repository. if you want to use the public npm repository, remove the .npmrc file.


