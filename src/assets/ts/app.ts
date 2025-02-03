import { moviesData } from "./movies";
import { createMovieCard, moviesWrapper } from "./createMovieCard";

const searchInput = document.querySelector<HTMLInputElement>("#searchInput")
const yearUpBtn = document.querySelector("#yearUpBtn");
const yearDownBtn = document.querySelector("#yearDownBtn");
const bestRatingBtn = document.querySelector("#bestRatingBtn");

// === FILTERS ===

function filterMovies(action: "yearUp" | "yearDown" | "bestRating" | "search") {
    if(moviesWrapper) {
        moviesWrapper.innerHTML = "";

        let filteredMovies = [...moviesData];

        if(action === "yearUp") {
            filteredMovies = [...moviesData].sort((a,b) => Number(a[1]) - Number(b[1]))
        } else if(action === "yearDown") {
            filteredMovies = [...moviesData].sort((a,b) => Number(b[1]) - Number(a[1]))
        } else if(action === "bestRating") {
            filteredMovies = [...moviesData].sort((a,b) => Number(b[5]) - Number(a[5]))
        } else if(action === "search") {
            let searchInputValue = searchInput!.value;
            filteredMovies = moviesData.filter((movie) => {
                for(const info of movie) {
                    if(typeof info === "string" && info.toLowerCase().includes(searchInputValue.toLowerCase())) {
                        return movie
                    }
                }
            })
            searchInput!.value = "";
        }
        createMovieCard(filteredMovies);
    }
}

yearUpBtn?.addEventListener("click", () => {
    filterMovies("yearUp")
})
yearDownBtn?.addEventListener("click", () => {
    filterMovies("yearDown")
})
bestRatingBtn?.addEventListener("click", () => {
    filterMovies("bestRating")
})
searchInput?.addEventListener("change", () => {
    filterMovies("search")  
})