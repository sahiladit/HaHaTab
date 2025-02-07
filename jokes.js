async function fetchJoke() {
  const jokeElement = document.getElementById("joke");
  
  // Show "Loading joke..." immediately
  jokeElement.innerText = "Loading joke...";

  try {
      let response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://official-joke-api.appspot.com/random_joke")}&timestamp=${new Date().getTime()}`);
      let data = await response.json();
      let jokeData = JSON.parse(data.contents); // Extract actual API response

      // Add a slight delay to simulate loading
      setTimeout(() => {
          jokeElement.innerText = `${jokeData.setup} - ${jokeData.punchline}`;
      }, 500); // 1-second delay
  } catch (error) {
      jokeElement.innerText = "Failed to load joke.";
  }
}

document.getElementById("getJokeBtn").addEventListener("click", fetchJoke);
