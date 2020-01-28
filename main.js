const gatos = [
    {
        name: "Rodolfo",
        shortDesc: "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "./img/gatitos/gatito_blanco.jpg",
        colors: ["blanco"],
        sex: "Masculino"
    },

    {
        name: "Muzzarella",
        shortDesc: "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "./img/gatitos/gatito_naranja.jpg",
        colors: ["naranja", "blanco"],
        sex: "Femenino"
    },

    {
        name: "Artilugia",
        shortDesc: "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "./img/gatitos/gatito_gris_blanco.jpg",
        colors: ["blanco", "gris"],
        sex: "Femenino"
    },

    {
        name: "Wosito",
        shortDesc: "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "./img/gatitos/gatito_rayado.jpg",
        colors: ["negro", "blanco", "gris"],
        sex: "Masculino"
    },

    {
        name: "Calamardo",
        shortDesc: "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "./img/gatitos/gatito_negro.jpg",
        colors: ["negro"],
        sex: "Masculino"
    },
]



let acumuladora = "";
const btnAbrirModal = document.getElementsByTagName("button");
const modal = document.getElementById("modal");
const modalContenedor = document.getElementById("modalContenedor");
const contenedorCards = document.getElementById("contenedorCards");

for (let i = 0; i < gatos.length; i++) {
    acumuladora += `
  <div id="card">
    <div class="img">
        <img src="${gatos[i].img}" alt="" />
    </div>
    <div class="info">
        <h1>${gatos[i].name}</h1>
        <p>
        ${gatos[i].shortDesc}
        </p>
        <button class="ver">Ver mas</button>
    </div>
  </div>`;
}

contenedorCards.innerHTML = acumuladora;

for (let x = 0; x < gatos.length; x++) {

    btnAbrirModal[x].onclick = (e) => {

        modalContenedor.innerHTML = `
        <div class="info">
            <h1>Adopta un gatito</h1>
            <h4>${gatos[x].name}</h4>
            <p>${gatos[x].longDesc}</p>
        </div>
        <div class="img">
            <img src="${gatos[x].img}" alt="" />
        </div>`;

        modal.classList.remove("nomostrar");
    }
}

const form = document.forms[0];

const gatiteSeleccionado = (gato) => {

    return `
    <div id="card">
      <div class="img">
          <img src="${gato.img}" alt="" />
      </div>
      <div class="info">
          <h1>${gato.name}</h1>
          <p>
          ${gato.shortDesc}
          </p>
          <button class="ver">Ver mas</button>
      </div>
    </div>`;
}

form.onsubmit = (e) => {
    e.preventDefault();

    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const radios = document.querySelectorAll("input[type='radio']");
    const inputs = document.querySelectorAll("input[type='text']");

    let colores = [];
    let sexo = [];
    let datos = [];

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            colores.push(checkboxes[i].value);
        }
    }

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            sexo.push(radios[i].value);
        }
    }

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value != "") {
            datos.push(inputs[i].value);
        }
    }

    contenedorCards.innerHTML = ``;
    let filtro = "";

    for (let i = 0; i < gatos.length; i++) {
        
        if (sexo[0] === "Indiferente") {

            filtro += gatiteSeleccionado(gatos[i]);

        } else if (sexo[0] == gatos[i].sex) {

            filtro += gatiteSeleccionado(gatos[i]);
        }
    }
console.log(filtro)
    contenedorCards.innerHTML = filtro;
}

