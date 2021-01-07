import * as React from "react";
//import { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';




function Home(IState) {
    const [blogs, setBlogs] = React.useState([])
    React.useEffect(() => {
        // Axios get request for blogs, for now users
        axios
            .get("http://localhost:8000/api/blogposts")
            .then(res => setBlogs(res.data))
            .catch(err => console.log(err))

    }, []);
    return (
      <div className="Home">
        <header className="Home-header">
        This will be the home page with lots of blogs present.
    { blogs.length > 0 && 
        <p>{blogs[0].blogpost_title}</p>
     }
        {console.log(blogs[0])}
          <p>

          </p>


        </header>
      </div>
    );
  }
  
  export default Home;
  