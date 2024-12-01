const searchBtn = document.getElementById("searchBtn");
const movieInput = document.getElementById("movieInput");
const movieTitle = document.getElementById("movieTitle");
const movieYear = document.getElementById("movieYear");
const moviePlot = document.getElementById("moviePlot");

const apiKey = process.env.API_KEY;

searchBtn.addEventListener("click", function() {
    const movieName = movieInput.value.trim(); //trim removes any like space in the input so code works yay
    if (movieName === "") {
        alert("enter a movie name first!"); //if they aint typing stuff n pressing enter, u get an alert
        return;
    }
    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                movieTitle.textContent = data.Title;
                movieYear.textContent = `Year: ${data.Year}`;
                moviePlot.textContent = data.Plot;                    
            } else {
                alert("aww sorry movie not found 😔.");
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("oops! something is wrong.");
        });
});
