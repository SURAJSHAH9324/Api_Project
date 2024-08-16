const JokeContainer = document.getElementById("joke");
const BtnContainer = document.getElementById("btn");
const URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&type=single";

const GetJoke = () => {
  JokeContainer.classList.remove("fade");
  fetch(URL)
    .then((data) => data.json())
    .then((item) => {
      JokeContainer.textContent = item.joke;
      JokeContainer.classList.add("fade");
    })
    .catch((error) => console.error("Error fetching joke:", error));
};

BtnContainer.addEventListener("click", GetJoke);
GetJoke();
