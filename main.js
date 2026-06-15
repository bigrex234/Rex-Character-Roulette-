let card = document.getElementById("card");
let rollBtn = document.getElementById("rollBtn");

function rollCharacter() {
    card.innerHTML = `<p class="loading">Rolling.......</p>`;


    fetch("https://api.jikan.moe/v4/random/characters")
        .then(response => response.json())
        .then(data => {
            let character = data.data;

            card.innerHTML =`
               <img src="${character.images.jpg.image_url}" />
               <h2> ${character.name}</h2> 
               <p>${character.about?character.about.slice(0 , 200) + "...": "No bio available"}</p>
               `;
        })
        .catch(error =>{
            card.innerHTML = `<p>Something went wrong try again🙏😭</p>`;
        });
    
}
rollBtn.addEventListener("click" , rollCharacter);
