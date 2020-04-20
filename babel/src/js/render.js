const render = (data) =>{
    const pokemon = document.createElement('img');
    pokemon.src = data.sprites.front_default;
    document.body.append(pokemon);
}

export default render;