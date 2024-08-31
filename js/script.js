document.getElementById("uploadBtn").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById("preview");
            preview.src = e.target.result;
            preview.style.display = 'block';

            // Guardar la URL de la imagen en un campo oculto
            document.getElementById("card-image").value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById("card-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Traer valores del formulario
    const title = document.getElementById("card-title").value;
    const bgColor = document.getElementById("card-bg-color").value;
    const description = document.getElementById("card-description").value;
    const bordercolor = document.getElementById("card-border-color").value;
    const imgurl = document.getElementById("card-image").value;

    // Verificar que se haya seleccionado una imagen
    if (!imgurl) {
        alert("Por favor, selecciona una imagen para la tarjeta.");
        return;
    }

    // Mostrar por consola los valores del formulario
    console.log({
        title: title,
        description: description,
        imgurl: imgurl,
        bgColor: bgColor,
        bordercolor: bordercolor
    });

    // Crear nueva card
    const cardcontainer = document.getElementById("cards-container");
    const newcard = document.createElement("div");
    newcard.className = "card";
    newcard.style.backgroundColor = bgColor;
    newcard.style.borderColor = bordercolor;

    // Maquetar la card
    newcard.innerHTML = `
    <img src="${imgurl}" alt="Card image">
    <div class="card-content">
        <p>${title}</p>
         <hr>
        <p>${description}</p>
    </div>
    `;

    // Añadir la nueva card al contenedor
    cardcontainer.appendChild(newcard);

    // Limpiar campos del formulario
    document.getElementById("card-form").reset();
    document.getElementById("preview").style.display = 'none';
    document.getElementById("card-image").value = "";
});
