#Mall Apps

##Project Title

####Mall Apps

##Descriptions

Mall Apps is a web and bot app for helping people to find stores in mall.

##Getting Started

The app using express, nodejs, mongodb, mongoose, passport auth

##How to use

```
> npm install
> cp .env.example .env
> node query-seed-data-endy.js
> npm run dev
```
##Requirement

```
.env file for key auth facebook and secret key
```

##List of Route

####Authenticate Route

| Route                   | HTTP | DESC     |
| ----------------------- | ---- | -------- |
| /                       | GET  | nothing  |
| /login                  | POST | Login    |
| /register               | POST | Register |
| /auth/facebook/login    | GET  | FB       |
| /auth/facebook/callback | GET  | FB CB    |

####Api Store Route

| Route                               | HTTP   | Description                             |
| ----------------------------------- | ------ | --------------------------------------- |
| api/stores                          | GET    | Show all                                |
| api/store/:id                       | GET    | Show Store by id                        |
| api/store                           | POST   | Create Store                            |
| api/store                           | PUT    | Update Store                            |
| api/store                           | DELETE | Delete Store                            |
| api/store/search/name/:name         | GET    | Find  data in Store, filter by name     |
| api/store/search/category/:category | GET    | Find  data in Store, filter by category |
| api/store/search/floor/:floor       | GET    | Find  data in Store, filter by floor    |

####Authors
|Name           |Github                          |
|:--------------|:------------------------------:|
|Diky Arga      |https://github.com/dikyarga     |
|Izumi          |https://github.com/isumizumi|
|Endy           |https://github.com/pisanggoreng |
|Irwin          |https://github.com/irwinpratajaya   |
