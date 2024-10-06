const loadJoke = async () => {
  try {
    const marioJokesfetch = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?type=single"
    );
    const jokesdata = await marioJokesfetch.json();
    document.getElementById("loadingJoke").innerHTML = jokesdata.joke;
  } catch (err) {
    console.log(err);
  }
};

document.getElementById('loadbut').addEventListener('click',loadJoke);