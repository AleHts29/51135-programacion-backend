fetch('/api/v1/productos')
.then(res => res.json())
.then(res => 
    {
        console.log(res.data)
        render(res.data)
    }
);

function render(data) {
    let html = `<tr style="color: yellow;"> <th>Nombre</th> <th>Descripcion</th> <th>Precio</th><th>Imagen</th> </tr>
    `

    data.forEach(element => {
        html += `<tr>
                    <td>${element.nombre}</td>
                    <td>${element.descripcion}</td>
                    <td>${element.precio}</td>
                    <td>
                        <img width="30" src="${element.imagen}" alt="">
                    </td>
                </tr>`;
    });
    
    document.getElementById('tabla-productos').innerHTML = html;
}