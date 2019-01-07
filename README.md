# README for [starter-postgres-rails-react]
# Starter Full-Stack Rails+JS Project: Postgres + Rails + React (PRR)

## Overview

This project was bootstrapped with [React-Rails](https://github.com/reactjs/react-rails).
The backend was generated by Ruby On Rails template [Generation](http://guides.rubyonrails.org/getting_started.html).

## Folder Structure

After creation, your project should look like this:

```
Project/
  app/
  bin/
  config/
  db/
  lib/
  public/
  test/
  vendor/
  Gemfile
  package.json
  README.md
```



## Prerequisites
Before installing, please make sure to have global installations of
* [node v8 or higher](https://nodejs.org/en/download/)
* npm v6 or higher
* [PostgreSQL](https://www.postgresql.org/download/) (if running a local DB instance)
* [Ruby On Rails](https://rubyonrails.org/) (ruby@2.5.3 & rails@5.2.2)

## Installation
1. Execute `bundle install && npm install` to configure the local environment.
2. Compile webpack dependencies via `rails webpacker:compile`
3. Update the DB configuration in `config/database.yml`
4. Perform DB initialization/migration and seeding
```
$ rails db:create
$ rails db:migrate
$ rails db:seed
```
5. Start the development server `rails s`


## Usage
This application uses npm and rails scripts for testing, development, and deployment.

* `$ rails s`: run the development version of the app
* `$ rails s -e production`: run the production version of the app
* `$ rails db:create`: perform DB initialization
* `$ rails db:migrate`: perform DB migrations
* `$ rails db:seed`: perform DB seeding
* `$ rubocop`: perform linting of the BE code
* `$ npm run lint`: perform linting of the FE code

## BE Endpoints

### `POST /posts`: Create a New Post
This endpoint creates a new record. An example of the payload (input data) is provided below:
```
body: {
    author : String,    /* required */
    content: Text,      /* required */
    title  : String     /* required */
    }
```
The output echos back the provided data with the system-generated record ID:
```
let response = {
    statusCode: 200,
    body: {
        id     : Number,    /* required */
        author : String,    /* required */
        content: Text,      /* required */
        title  : String     /* required */
    }
```

### `GET /posts`: Get all Posts
This endpoint returns the complete set of available Posts. No input data is required
The output is provided in array with each object having the structure described above:
```
let response = {
    statusCode: 200,
    body: [
            Post1,
            Post2,
            ...
            PostN
        ]
    }
```

### `GET /posts/:id`: Get a Post by ID
This endpoint returns an individual Post by ID. The ID is provided as a URI parameter.
The output is the same as from `POST /posts`

### `PUT /posts/:id`: Update a Post by ID
This endpoint updates an existing Post by ID. The input/output formats are the same as in `POST /posts`

### `DELETE /posts/:id`: Delete a Post by ID
This endpoint deletes an individual Post by ID. The ID is provided as a URI parameter.
