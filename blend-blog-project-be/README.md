# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables on the backend. Create a .env file, and ensure it contains the following

    *  DB_HOST - this is localhost if running locally.
    *  DB_USER - the db user name is root.
    *  DB_PASS - the db user password is postgres.
    *  DB_PORT - this could be 8000, or whichever port you decide to serve the db on.
    *  DB_URL - the DB url is postgres://localhost/blogappdb
    
    
    # Installation Instructions

To get the app BACKEND running locally:

1. Clone this repo

2. `cd` into blend-blog-project-be

3. Define all .env variables

4. `npm i` to install all required dependencies

5. `npm run start` to start the local server and run the app in the development mode.

6. Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

   - There are currently many warnings and a couple of errors in the console.
   
