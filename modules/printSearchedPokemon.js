const printSearchedCard = (pokemon, container) => {
    
    pokemon.forEach(e => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                <div class="main-image">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png" alt="${e.name}">
                    <h2>${e.name}</h2><span><b>${e.stats[0].base_stat}</b> Hp</span>
                    <span><b>${e.base_experience}</b> Exp</span>
                </div>
                <div class="data">
                    <div class="subdata">
                        <h3>${e.stats[1].base_stat}</h3>
                        <span>Ataque</span>
                    </div>
                    <div class="subdata">
                        <h3>${e.stats[3].base_stat}</h3>
                        <span>Ataque especial</span>
                    </div>
                    <div class="subdata">
                        <h3>${e.stats[2].base_stat}</h3>
                        <span>Defenza</span>
                    </div>
                </div>
                `;
       container.appendChild(card);
    })
};

export default printSearchedCard;