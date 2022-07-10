$(document).ready(function() {

    /**
     * consultarCategorias se utiliza para llamar a la funcion que realiza la consulta de las categorias que se encuentran en la base de datos
     */
     consultarCategorias()
  });

  
/**
 * Se utiliza para cargar las categorias en el html que vienen de las consultas
 */
function setCategorias(array){
    $('.navbar-dropdown').empty()
    array.forEach(function(categoria){
        $('.navbar-dropdown').append(`
        <a class="navbar-item" onclick="filtrarProductosCategoria(this)">${categoria.name}</a>
        `)
    });
}

/**
 * Se utiliza para asignar el valor a filtro y llamar a la funcion que corresponda a cada caso
 */
function filtrarProductosCategoria(categoria){
    filtro = categoria.textContent
    filtro !== undefined ? filtrarCategoria(filtro) : consultarProductos()
       
}

