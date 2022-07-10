/**
 * filtro -> se utiliza para saber que categoria se esta utilziando actualemte
 * esBusqueda -> se utiliza para si los productos visibles son de una busqueda o no
 */
 let filtro = ''
 let esBusqueda = false;
$(document).ready(function() {

      /**
     * consultarProductos se utiliza  para consultar por los productos que se encuentran en la base de datos una vez se inicia la pagina
     */
    consultarProductos()

  });

/**
*  Se utiliza para cargar el html con la lista de productos que vienen de las consultas
*/
function setProductos(array){
    $('#catalogo').empty()
    array.forEach(function(producto){
        if(producto.url_image === null || producto.url_image === ""){
            $('#catalogo').append(`
                <div class="card">
                    <div class="card-image is-flex is-justify-content-center">
                        <img src="img/imagen_no_disponible.png" alt="">    
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content is-flex is-justify-content-center is-align-items-center">
                                <p class="title is-6">${producto.name}</p>
                            </div>
                        </div>
                    </div>
                    <footer class="card-footer is-flex is-justify-content-space-evenly is-align-content-center is-align-items-center">
                        <div class="precio">
                            <p>$${producto.price}</p>
                        </div>
                        <div class="buttons">
                            <a class="button is-light">
                                <span class="icon is-small">
                                    <box-icon name='cart-add' ></box-icon>
                                </span>
                            </a>
                        </div>  
                    </footer>
                </div>
            `) 
        }
        else{
            $('#catalogo').append(`
                <div class="card">
                    <div class="card-image is-flex is-justify-content-center">
                        
                        <img src="${producto.url_image}" alt="">
                        
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content is-flex is-justify-content-center is-align-items-center">
                                <p class="title is-6">${producto.name}</p>
                            </div>
                        </div>
                    </div>
                    <footer class="card-footer is-flex is-justify-content-space-evenly is-align-content-center is-align-items-center">
                        <div class="precio">
                            <p>$${producto.price}</p>
                        </div>
                        <div class="buttons">
                            <a class="button is-light">
                                <span class="icon is-small">
                                    <box-icon name='cart-add' ></box-icon>
                                </span>
                            </a>
                        </div>  
                    </footer>
                </div>
            `) 
        }
    });
}

/**
*  Se utiliza para obtener el valor del input de busqueda y se valida si solo tiene los caracteres requeridos
*/
function validateForm() {
    let busqueda = document.forms["buscador"]["busqueda"].value;
    const formato = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    if (busqueda != "") {
        if(formato.test(busqueda)) {
            swal({
                title: "Pop-Up",
                text:  `El texto ingresado tiene caracteres invalidos`,
                confirmButtonText: "Aceptar",
            });
            return false
        }else{
            buscarProductos(busqueda)
            $("#busqueda").val('');
            return false
        }  
    }
    swal({
        title: "Pop-Up",
        text:  `El campo busqueda se encuentra vacio`,
        confirmButtonText: "Aceptar",
    });
    return false
} 

/**
 * se utiliza para saber como se desea ordenar los productos
 */
function ordenar(orden){
    switch(orden){
        case 'menor':
          ordenarProductosMenor(filtro)
        break;
        case 'mayor':
            ordenarProductosMayor(filtro)
        break;
        case 'alfabetico':
            ordenarProductosAlfabetico(filtro)
        break;

    }
}

