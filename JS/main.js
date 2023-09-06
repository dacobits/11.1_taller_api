document.addEventListener("DOMContentLoaded", function () {
    const search = document.getElementById('btn');
  
    search.addEventListener("click", () => {
      let random = Math.floor(Math.random() * 33) + 1;
  
      fetch(`https://apisimpsons.fly.dev/api/personajes?limit=20&page=${random}`)
        .then(response => response.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.docs.length);
            let randomCharacter = data.docs[randomIndex];
  
            let container = document.getElementById('container'); // Obtiene el contenedor
  
            let div = document.createElement("div");
            div.innerHTML = `
                <div id='info'>
                    <h2>${randomCharacter.Nombre}</h2>
                    <p>${randomCharacter.Historia}</p>
                </div>
                <div id='pj'>
                    <img src="${randomCharacter.Imagen}">
                </div>`;
            container.innerHTML = '';
            container.appendChild(div);  
        });
    });
  });
  