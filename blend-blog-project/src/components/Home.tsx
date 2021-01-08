import * as React from "react";
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

// Need to make and test logout button that clears token

const initialState: Array<any> = [];

function Home(IState: any) {
    const [blogs, setBlogs] = React.useState(initialState)
    React.useEffect(() => {
        // Axios get request for blogs, for now users
        axios
            .get("http://localhost:8000/api/blogposts")
            .then(res => setBlogs([...blogs, res.data]))
            .catch(err => console.log(err))

    }, []);

    // handleClick for logout button

    const handleClick = (() => {
      console.log("clicked")
      window.localStorage.clear();
      console.log(window.localStorage.getItem("token"))
    })
    return (
      <div className="Home">
        <header className="Home-header">
        This will be the home page with lots of blogs present.
    { blogs.length > 0 && 
        <p>{blogs[0].blogpost_title}</p>
     }
        {console.log(blogs)}
          <p>
              <button
              onClick={handleClick}
            >
              Logout
            </button>

          </p>


        </header>
      </div>
    );
  }
  
  export default Home;
  