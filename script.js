const jokeDisplay = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

const url = "https://icanhazdadjoke.com/"

jokeBtn.addEventListener("click", getJoke)

getJoke()
//using ASYNC/AWAIT
async function getJoke(){
	const settings= {
		headers:{
			"Accept": "application/json"	
	}}
	
	const res = await fetch(url,settings)
	const data = await res.json()

	jokeDisplay.innerText = data.joke
}
