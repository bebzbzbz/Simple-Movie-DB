import { moviesData } from "./movies";

export const moviesWrapper = document.querySelector("#moviesWrapper");

export function createMovieCard(movieArray: [string, string, string, string, string[], string][]) {
    movieArray.map((movie) => {
        const movieDiv = document.createElement("div");
        movieDiv.innerHTML += `
        <div>
            <h3>${movie[0]}</h3>
            <p>(${movie[1]})</p>
        </div>
        <div>
            <p>directed by <br> 
            <b>${movie[2]}</b></p>
        </div>
        <div>
            <p>${movie[3]}</p>
        </div>
        <div>
            <p><b>Genre:</b></p>
            <p>${movie[4].join("<br>")}</p>
        </div>
        <div>
            <p><b>Rating:</b> ${movie[5]} ★</p>
        </div>
        `
    
        if(moviesWrapper) {
            moviesWrapper.appendChild(movieDiv);
        }
    })
}
createMovieCard(moviesData)