# Onramp Fullstack Take Home Project

# Onramp Blogpost App
...
![React](https://img.shields.io/badge/react-v16.12.0--alpha.2-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![code style: eslint](https://img.shields.io/badge/code_style-eslint-ff69b4.svg?style=flat-square)](https://github.com/eslint/eslint)


## Project Overview

A RESTful fullstack blogpost application with CRUD functionality.

### Key Features

- Users can create accounts.
- Users can sign in to their accounts.
- Users can add sign out of their accounts. 
- Users can view the posts they've created.
- Users can view posts from all users.
- Users can see their favorited posts.
<br>
- Users can create posts.
- Users can edit posts.
- Users can delete posts.
- Users can search for posts based on content and title.
- Users can favorite multiple posts.


#### Architecture Pattern

The architecture pattern I chose for this project was MVC (Model View Controller), with the React front end being the view, Redux and it's associated actions being the controller, and the Postgress DB being the model.

## Tech Stack

### Front end built using: React, Typescript

**Packages used for styling:** material-ui

**Packages used for state management:** redux, react-redux, redux-thunk.

**Packages used for testing:** @testing-library/jest-dom, @testing-library/react.

**Packages used for development (linters):** eslint, prettier.

**Packages for authentication:** jsonwebtoken, bcryptjs

**Packages for database setup/management:** knex, pg

**Packages for security:** cors, dotenv, fs, helmet, https

**Packages for server setup/management:** express, morgan

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables on the backend. Create a .env file, and ensure it contains the following

    *  DB_HOST - this is localhost if running locally.
    *  DB_USER - the db user name is root.
    *  DB_PASS - the db user password is postgres.
    *  DB_PORT - this could be 8000, or whichever port you decide to serve the db on.
    *  DB_URL - the DB url is postgres://localhost/blogappdb

# Testing

Testing was attempted using the @testing-library/jest-dom -- unfortunately due to starting implementation of tests extremely late in the project, they do not currently run correctly. Exisiting tests are grouped into files by component. 


## Current Issues/Bugs 
Routing for the front end is not 100% functional as of now - at some point, some of the components don't seem to recognize the blogpost id, therefore sending the user to /blog/undefined.
Favorites button does not remain coloured in once it has been added to favorites. 
Some post requests will fail on the first attempt before succeeding once the user clicks again.


# Installation Instructions

To get the app BACKEND running locally:

1. Clone this repo

2. `cd` into blend-blog-project-be

3. Define all .env variables

4. `npm i` to install all required dependencies

5. `npm run start` to start the local server and run the app in the development mode.

6. Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

   - The page will reload if you make edits.<br />

   - There are currently many warnings and a couple of errors in the console.
   
To get the app FRONTEND running locally:

1. Clone this repo

2. `cd` into blend-blog-project

3. `npm i` to install all required dependencies

4. `npm run start` to start the local server and run the app in the development mode.

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

   - The page will reload if you make edits.<br />

   - There are currently many warnings and a couple of errors in the console.


## Other Scripts

- **build** - Builds the app for production to the `build` folder.

  - It correctly bundles React in production mode and optimizes the build for the best performance.

  - The build is minified and the filenames include the hashes.

- **start** - Runs the app in the development mode.

  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  - The page will reload if you make edits.







  - You will also see any lint errors in the console.

- **test** - Launches the test runner in the interactive watch mode.

  - See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- **eject** - Copies the configuration files and dependencies into the project so you have full control over them

  - **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  - If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  - Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  - You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


