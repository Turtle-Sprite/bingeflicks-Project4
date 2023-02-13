import { useState } from "react";
import axios from "axios";
import Homepage from './Homepage'

function MovieDetails({currentUser}) {
    return ( 
        <>
            <h1>MovieDetails</h1>
            <Homepage currentUser={currentUser}/>
        </>
     );
}

export default MovieDetails;