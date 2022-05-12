const search = (value, data, container) => {
    container.innerHTML = '';
    const results = data.filter( m => m.name.toLowerCase().includes(value.toLowerCase()))
    return results;
}

export default search;