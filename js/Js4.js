const pokemones = [
    {
        idPoke: 1,
        nombre: "Charizard",
        imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        descripcion: "El Pokémon llama. Escupe fuego tan caliente que puede derretir roca.",
        tipo: "Fuego / Volador",
        generacion: "Gen I",
        nivel: 80,
        edicion: "Holo Rare",
        disponibilidad: 3,
        precio: 150000
    },
    {
        idPoke: 2,
        nombre: "Mewtwo",
        imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
        descripcion: "Un Pokémon creado por recombinación genética. Tiene el mayor poder de todos.",
        tipo: "Psíquico",
        generacion: "Gen I",
        nivel: 100,
        edicion: "Ultra Rare",
        disponibilidad: 1,
        precio: 350000
    },
    {
        idPoke: 3,
        nombre: "Pikachu",
        imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        descripcion: "Cuando varios se juntan, su electricidad puede provocar tormentas.",
        tipo: "Eléctrico",
        generacion: "Gen I",
        nivel: 50,
        edicion: "Common",
        disponibilidad: 10,
        precio: 50000
    },
    {
        idPoke: 4,
        nombre: "Gengar",
        imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
        descripcion: "Si te sientes repentinamente frío, es señal de que un Gengar está cerca.",
        tipo: "Fantasma / Veneno",
        generacion: "Gen I",
        nivel: 65,
        edicion: "Holo Rare",
        disponibilidad: 5,
        precio: 120000
    },
    {
        idPoke: 5,
        nombre: "Eevee",
        imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
        descripcion: "Un Pokémon inusual que puede evolucionar en muchas formas diferentes.",
        tipo: "Normal",
        generacion: "Gen I",
        nivel: 30,
        edicion: "Uncommon",
        disponibilidad: 7,
        precio: 80000
    },
    {
        idPoke: 6,
        nombre: "Lucario",
        imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png",
        descripcion: "Puede percibir los sentimientos de los seres vivos a través de las ondas de aura.",
        tipo: "Lucha / Acero",
        generacion: "Gen IV",
        nivel: 75,
        edicion: "Rare",
        disponibilidad: 4,
        precio: 200000
    },
    {
        idPoke: 7,
        nombre: "Gastly",
        imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png",
        descripcion: "Casi todo su cuerpo está compuesto de gases. Puede envolver a un elefante entero y hacerlo desaparecer.",
        tipo: "Fantasma / Veneno",
        generacion: "Gen I",
        nivel: 25,
        edicion: "Uncommon",
        disponibilidad: 6,
        precio: 70000
    },
    {
        idPoke: 8,
        nombre: "Snorlax",
        imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
        descripcion: "Come 400 kg de comida al día. Cuando termina, se queda dormido y no se despierta fácilmente.",
        tipo: "Normal",
        generacion: "Gen I",
        nivel: 55,
        edicion: "Rare",
        disponibilidad: 2,
        precio: 110000
    }
];

const catalogoProductos = document.getElementById("catalogoProductos");
const elementoModal = document.getElementById("miModal");
const miModal = new bootstrap.Modal(elementoModal);

const nombreModal = document.getElementById("nombreModal");
const imagenModal = document.getElementById("imagenModal");
const descripcionModal = document.getElementById("descripcionModal");
const tipoModal = document.getElementById("tipoModal");
const generacionModal = document.getElementById("generacionModal");
const nivelModal = document.getElementById("nivelModal");
const edicionModal = document.getElementById("edicionModal");
const disponibilidadModal = document.getElementById("disponibilidadModal");
const precioModal = document.getElementById("precioModal");

function formatearPrecio(precio) {
    return precio.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 });
}

function cargarTarjetas() {
    catalogoProductos.innerHTML = "";
    pokemones.forEach(poke => {
        catalogoProductos.innerHTML += `
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div class="card tarjeta">
                    <div class="img-container">
                        <img src="${poke.imagen}" class="card-img-top" alt="${poke.nombre}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${poke.nombre}</h5>
                        <p class="card-text">${poke.descripcion}</p>
                        <div class="precio-box">
                            <span>Precio:</span>
                            <strong>${formatearPrecio(poke.precio)}</strong>
                        </div>
                        <button type="button" class="btn btn-warning btn-ver-detalle" data-id="${poke.idPoke}">
                            Ver detalles
                        </button>
                    </div>
                </div>
            </div>`;
    });

    document.querySelectorAll('.btn-ver-detalle').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            mostrarDetalle(id);
        });

        boton.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0px 0px 15px rgba(255, 200, 0, 0.8)';
            e.target.style.backgroundColor = '#ffd700';
        });

        boton.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'translateY(0px)';
            e.target.style.boxShadow = 'none';
            e.target.style.backgroundColor = '';
        });
    });
}

function mostrarDetalle(id) {
    const poke = pokemones.find(item => item.idPoke === id);
    if (!poke) return;

    nombreModal.textContent = poke.nombre;
    imagenModal.src = poke.imagen;
    imagenModal.alt = poke.nombre;
    descripcionModal.textContent = poke.descripcion;
    tipoModal.textContent = poke.tipo;
    generacionModal.textContent = poke.generacion;
    nivelModal.textContent = poke.nivel;
    edicionModal.textContent = poke.edicion;
    disponibilidadModal.textContent = poke.disponibilidad > 0 ? `${poke.disponibilidad} disponibles` : "Agotado";
    precioModal.textContent = formatearPrecio(poke.precio);

    miModal.show();
}

cargarTarjetas();