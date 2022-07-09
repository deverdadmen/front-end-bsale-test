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


function filtrarProductosCategoria(categoria){
    filtrarCategoria(categoria.textContent)
}