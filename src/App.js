import React from "react";
import './App.css';
import { Button } from "@material-ui/core";
import { useCallback } from "react";
import axios from "axios";

function App() {
const handleClick = useCallback( async ()=> {
    const poster = document.querySelector('.poster')
    const input = document.querySelector('#search')
    let url = 'https://api.themoviedb.org/3/search/movie?api_key=6d6c6a20e28a850dde6ce3c5120db654&query=' + input.value
    let response = await axios(
        url)

    console.log(response.data)
    response.data.results.forEach(el => {
        let src = "https://image.tmdb.org/t/p/w500"+ el.poster_path
        let img = document.createElement('img')
        let ttt = document.createElement('h4')
        let div = document.createElement('div')
        ttt.innerHTML = el.title
        console.log(src)
        img.src = src
        div.appendChild(img)
        div.appendChild(ttt)
        poster.appendChild(div)
    })
},[])


  return (
    <div className="App">
        <div className="form">
            <div className="form-body">
                <input type="text" id= 'search' />
                <Button  type='submit' onClick={handleClick} variant="contained" color="secondary">get Api</Button>
            </div>
        </div>
         <div className="poster ">

         </div>

    </div>
  )
}

export default App;
