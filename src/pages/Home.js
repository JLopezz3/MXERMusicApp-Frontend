import React, { useState} from 'react';
import Axios from "axios";

function Home() {

    const [songName, setSongName] = useState('')
    const [rating, setSongRating] = useState([]);

    // useEffect(() => {
    //     Axios.get("https://mxer-app.herokuapp.com/api/get").then((response) => {
    //         console.log(response.data);
    //     })
    // }, []);

    const submitRating = () => {
        Axios.post("https://mxer-app.herokuapp.com/api/insert", {
            songName: songName,
            songRating: rating
        }).then(() => {
            alert("SUCCESSFUL INERT!");
        });
    };

    return (
        <div>
            <h1>CRUD TESTING </h1>

            <div className="form">
                <label>Song Name:</label>
                <input type="text" name="songName" placeholder="input the songname"
                onChange={(e) => {
                    setSongName(e.target.value)
                }}/>
                <label>Rating</label>
                <input type="text" name="songReview" placeholder="input the songreview"
                onChange={(e) => {
                    setSongRating(e.target.value)
                }}/>

                <button>Submit</button>
            </div>
            
        </div>
    )
}

export default Home
