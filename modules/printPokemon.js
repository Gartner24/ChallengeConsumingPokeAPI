const printCard = (pokemon, container) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <div class="main-image">
                <img src="${pokemon.img}" alt="${pokemon.nombre}">
                <h2>${pokemon.nombre}</h2><span><b>${pokemon.hp}</b> Hp</span>
                <span><b>${pokemon.experiencia}</b> Exp</span>
            </div>
            <div class="data">
                <div class="subdata">
                    <h3>${pokemon.ataque}</h3>
                    <span>Ataque</span>
                </div>
                <div class="subdata">
                    <h3>${pokemon.especial}</h3>
                    <span>Ataque especial</span>
                </div>
                <div class="subdata">
                    <h3>${pokemon.defensa}</h3>
                    <span>Defenza</span>
                </div>
            </div>
    `;
    container.appendChild(card);
};

export default printCard;