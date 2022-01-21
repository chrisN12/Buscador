// VARIABLES

const marca = document.querySelector("#marca")
const year = document.querySelector("#year")

const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo")
const puertas = document.querySelector("#puertas")
const transmision = document.querySelector("#transmision")
const color = document.querySelector("#color")

const resultados = document.querySelector("#resultado")


// AÑOS
const max = new Date().getFullYear();
const min = max - 10;

// EVENTOS
document.addEventListener("DOMContentLoaded", ()   => {
    mostrarAutos(autos);

    cargarYears()
})

marca.addEventListener("change", (e) => {
    
    datosBusqueda.marca = e.target.value
    filtrarAutos();
})
year.addEventListener("change", (e) => {
    
    datosBusqueda.year = parseInt(e.target.value)

    filtrarAutos();
})
minimo.addEventListener("change", (e) => {
    
    datosBusqueda.minimo = e.target.value

    filtrarAutos();
})
maximo.addEventListener("change", (e) => {
    
    datosBusqueda.maximo = e.target.value

    filtrarAutos();
})
puertas.addEventListener("change", (e) => {
    
    datosBusqueda.puertas = parseInt(e.target.value)

    filtrarAutos();
})
transmision.addEventListener("change", (e) => {
    
    datosBusqueda.transmision = e.target.value

    filtrarAutos();
})
color.addEventListener("change", (e) => {
    
    datosBusqueda.color = e.target.value

    filtrarAutos();
})

// objeto para selects

const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: "",
}


// FUNCIONES
function mostrarAutos(autos) {
    
    limpiarHTML();

    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto

        const autoHTML = document.createElement("p")
        autoHTML.textContent = 
        `
        ${marca} - ${modelo} - AÑO: ${year} - PRECIO: $${precio} - PUERTAS: ${puertas} - COLOR: ${color} - TRANSMICIÓN: ${transmision}
        `

        resultados.appendChild(autoHTML)
    })
}

// FILTRAR POR MARCA
function filtrarAutos()  {
    const filtrar = autos.filter( filtrarMarca ).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)

    mostrarAutos(filtrar)

    if (filtrar.length > 0)   {
        mostrarAutos(filtrar)
    }   else {
        noResultados();
    }
}

function noResultados() {
    
    limpiarHTML();

    const noResultados = document.createElement("div")
    noResultados.classList.add("alerta", "error")
    noResultados.textContent = "NO HAY RESULTADO, PRUEBA OTRO FILTRO."

    resultados.appendChild(noResultados)
}

function filtrarMarca(auto)  {
    if (datosBusqueda.marca)  {
        return auto.marca === datosBusqueda.marca
    }   return auto 
}

function filtrarYear(auto)  {
    if (datosBusqueda.year)  {
        return auto.year === datosBusqueda.year
    }   return auto 
}

function filtrarMinimo(auto)    {
    if (datosBusqueda.minimo)  {
        return auto.precio >= datosBusqueda.minimo
    }   return auto 
}

function filtrarMaximo(auto)    {
    if (datosBusqueda.maximo)  {
        return auto.precio <= datosBusqueda.maximo
    }   return auto 
}
// LIMPIAR HTML

function limpiarHTML()  {
    while(resultados.firstChild)    {
        resultados.removeChild(resultados.firstChild)
    }
}

function filtrarPuertas(auto)   {
    if (datosBusqueda.puertas)  {
        return auto.puertas === datosBusqueda.puertas
    }   return auto 
}

function filtrarTransmision(auto)   {
    if (datosBusqueda.transmision)  {
        return auto.transmision === datosBusqueda.transmision
    }   return auto 
}

function filtrarColor(auto) {
    if (datosBusqueda.color)  {
        return auto.color === datosBusqueda.color
    }   return auto 
}


// CARGAR AÑOS DE AUTOS

function cargarYears()  {

    for ( let i = max; i >= min; i--)   {
        const opcion = document.createElement("option")
        opcion.value = i;
        opcion.textContent= i;
        year.appendChild(opcion)
    }
}


