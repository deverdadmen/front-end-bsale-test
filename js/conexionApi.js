/**
 * URL_API se utiliza para declarar la direccion a la cual se realizaran las consultas
 * en este caso la que no esta comentada es la direccion de la appi que se encuentra subida Heroku
 * y la que esta comentada es la que se utiliza para pruebas locales
 */

 const URL_API = 'https://bsale-apirest.herokuapp.com/api'

 /**
 * consultarCategorias realiza la peticion de las categorias que se encuentran registradas
 */
const consultarCategorias = async() =>{
    //todo: Cambiar lo que manda la api que solo mande una lista capitalizada y gestionar errores
    try {
        const respuesta = await fetch(`${URL_API}/categories `)
        const categorias = await respuesta.json()
        setCategorias(categorias);
    } catch (error) {
        console.log(error)
    }

}

/**
 * ConsutalProductos realiza la peticion de traer todo los productos que se encuentren registrados
 */
 const consultarProductos = async() =>{
    try{
        const respuesta = await fetch(`${URL_API}/products`)
        const productos = await respuesta.json()
        setProductos(productos);
    }catch(error){
        console.log(error)
    }
    
}

/**
 * buscarProductos recibe el parametro buscado el cual trae lo ingresado en el buscador para poder traer los resultados similares a la busqueda
 * en el caso que no se encuentren realize una alerta avisando que no se encontraron productos relaziondos
 */
 const buscarProductos = async(buscado) =>{

    try {
        const respuesta = await fetch(`${URL_API}/products/find/${buscado}`)
        const productos = await respuesta.json();
        if(productos.length > 0){
            setProductos(productos);
        }else{
            swal({
                title: "Alert",
                text:  `No se encontraron productos relacionados`,
                confirmButtonText: "Aceptar",
            });
        }
       
    } catch (error) {
        console.log(error)
    }

}


/**
 * filtrarCategoria Realiza la peticion de los productos de la categoria seleccionada
 */
 const filtrarCategoria = async(filtro) =>{
    try{
        const respuesta = await fetch(`${URL_API}/products/category/${filtro}`)
        const productos = await respuesta.json()
        setProductos(productos)
    }catch(error){
        console.log(error)
    }
    
}

/**
 * ordenarProductosMenor Realiza la peticion de los productos ordenados de menor a mayor precio
 */
const ordenarProductosMenor = async(filtro) =>{
    try{
        console.log(filtro)
        const respuesta = filtro !== '' && filtro !== undefined ? await fetch(`${URL_API}/orderby/lower/${filtro}`) : await fetch(`${URL_API}/orderby/lower`)
        const productos = await respuesta.json()
        setProductos(productos)
    }catch(error){
        console.log(error)
    }
}

/**
 * ordenarProductosMayor Realiza la peticion de los productos ordenados de mayor a menor precio
 */
const ordenarProductosMayor = async(filtro) =>{
    try{
        const respuesta = filtro !== '' && filtro !== undefined ? await fetch(`${URL_API}/orderby/major/${filtro}`) : await fetch(`${URL_API}/orderby/major`)
        const productos = await respuesta.json()
        setProductos(productos)
    }catch(error){
        console.log(error)
    }
}

/**
 * ordenarProductosAlfabetico Realiza la peticion de los productos ordenados alfabeticamente
 */
const ordenarProductosAlfabetico = async(filtro) =>{
    try{
        const respuesta = filtro !== '' && filtro !== undefined ? await fetch(`${URL_API}/orderby/alphabetic/${filtro}`) : await fetch(`${URL_API}/orderby/alphabetic`)
        const productos = await respuesta.json()
        setProductos(productos)
    }catch(error){
        console.log(error)
    }
}