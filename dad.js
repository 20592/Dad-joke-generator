const btnE1 =document.getElementById("btn");
const jokeE1 =document.getElementById("joke");

const apiKey ="JwBJX72LQx+l+Y9TlnsiUg==Mtu4raSVD3KqMjWI";
const options ={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

 async function getjoke(){
    joke.innerText = "Updating....";
    btnE1.disabled = true;
    btnE1.innerText = "Loading...";
   

    const response =await  fetch(apiURL,options)
    const data = await response.json();
    btnE1.disabled = false;
    btnE1.innerText = "Tell me a joke";
   jokeE1.innerText =data[0].joke;
}


btnE1.addEventListener("click",getjoke)