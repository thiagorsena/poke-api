function procurarPokemon() {
    var codigo = document.getElementById('pokemon').value
    axios.get("https://pokeapi.co/api/v2/")
        .then(response => {
            showResults(response.data)
        })
        .catch(error => {
            document.getElementById('error').style.display = 'block'
            document.getElementById('error').innerHTML = 'Erro inesperado'
        })
        .finally(() => endPreloader())
    event.preventDefault()
}

function mostrarDados(codigo) {
    document.getElementById('informacoes').style.display = 'block'
    document.getElementById('informacoes').innerHTML = 
        '<p><b>Nome: </b> ${codigo.name} </p>'
}

function startPreloader() {
    document.getElementById('preloader').style.display = 'block'
    document.getElementById('informacoes').innerHTML = ''
    document.getElementById('informacoes').style.display = 'none'
    document.getElementById('error').style.display = 'none'
}

function endPreloader() {
    document.getElementById('preloader').style.display = 'none'
}


