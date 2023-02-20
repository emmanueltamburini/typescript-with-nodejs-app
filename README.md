# TypescriptRestSerer

## TypescriptRestSerer README

This application is an example on nodejs, its functionality is to simulate a rest API on user using typescript. You can see the api examples below

## Getting started

Run `npm install` to install all dependencies of the app.

Create and configure .env file (you can use .example.env to know what environment variables you must define):

    PORT: This variable is the port where you want your app runs

    DB_HOST: This variable is a mysql database host

    DB_NAME: This variable is a mysql database name

    DB_USER: This variable is a mysql database user

    DB_PASSWORD: This variable is a mysql database password

Before Create and configure .env file you can use `npm run compile` to compile the project and `npm start` to start your app in the port that you configured. If you run this locally you can find your api in <http://localhost:[PORT]>/api (You can see the api examples below)

Api documentation

## Project: Typescript Server API
Typescript Server api. You must change {{url}} for the url where your app will be running, if you run this app locally, you can change it for <http://localhost:[PORT]> where PORT is the port you define in .env file

## End-point: Post user
### Method: POST
>```
>{{url}}/api/user
>```
### Body (**raw**)

```json
{
    "name": "test1",
    "email": "test1@test.com"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Put user
### Method: PUT
>```
>{{url}}/api/user/1
>```
### Body (**raw**)

```json
{
    "name": "test1",
    "email": "test1@test.com"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get user
### Method: GET
>```
>{{url}}/api/user/1
>```
⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get users
### Method: GET
>```
>{{url}}/api/user
>```
⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete user
### Method: DELETE
>```
>{{url}}/api/user/1
>```
### Headers

|Content-Type|Value|
|---|---|
|x-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2ExMzFjMmVkMmMxZDE1YjQxZDIzOGYiLCJpYXQiOjE2NzE2NTQ3ODEsImV4cCI6MTY3MTY2OTE4MX0.SgTtf1qGdZpyiX8ZR_o0A4jBzFaFza1PWZcEbjYOeto|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
