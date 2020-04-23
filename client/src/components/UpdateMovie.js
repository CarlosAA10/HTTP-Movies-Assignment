import React, {useState, useEffect} from 'react'; 
import { useParams , useHistory } from 'react-router-dom'; 
import axios from 'axios'; 

const movieFormat = {
    id: Date.now() + Math.random(), 
    title: '', 
    director: '', 
    metascore: '', 
    stars: []
}

const UpdateMovie = () => {

    return (
        <div>
            <h1>Update Movie Form</h1>
        </div>
    )
}

export default UpdateMovie; 