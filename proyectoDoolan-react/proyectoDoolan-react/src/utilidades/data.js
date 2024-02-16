const motos = [
    {
        id : "a1",
        nombre : "honda tornado",
        descripcion : "una moto fiel",
        categoria : "motos" ,
        stock : 10,
        precio: 3000,
        imagen : "/imagenes/tornado.jpg"
    },
    {
        id : "a2",
        nombre : "yamaha xtz ",
        descripcion : "una moto sensacional ",
        categoria : "motos" ,
        stock : 10,
        precio: 3500,
        imagen : "/imagenes/xtz.jpg"
    },
    {
        id : "a3",
        nombre : "ktm sx" ,
        descripcion : "una moto fina",
        categoria : "motos" ,
        stock : 10,
        precio: 4000,
        imagen : "/imagenes/sx.jpg"
    },
    {
        id : "a4",
        nombre : "kawasaki kx",
        descripcion : "una moto agresiva",
        categoria : "motos" ,
        stock : 10,
        precio: 4000,
        imagen : "/imagenes/kx.jpg"
    },
    {
        id : "b1",
        nombre : "casco fox negro ",
        descripcion : "la seguridad que necesitas",
        categoria : "cascos" ,
        stock : 10,
        precio: 400,
        imagen : "/imagenes/cascoFoxNegro.jpg"
    },
    {
        id : "b2",
        nombre : "casco fox rojo ",
        descripcion : "la seguridad que necesitas",
        categoria : "cascos" ,
        stock : 10,
        precio: 400,
        imagen : "/imagenes/cascoFoxRojo.jpg"
    },
    {
        id : "b3",
        nombre : "casco fox verde ",
        descripcion : "la seguridad que necesitas",
        categoria : "cascos" ,
        stock : 10,
        precio: 400,
        imagen : "/imagenes/cascoFoxVerde.jpg"
    },
    {
        id : "b4",
        nombre : "casco fox gris",
        descripcion : "la seguridad que necesitas",
        categoria : "cascos" ,
        stock : 10,
        precio: 400,
        imagen : "/imagenes/cascoFoxGris.jpg"
    },
    {
        id : "c1",
        nombre : "guantes fox negro ",
        descripcion : "protege tus manos",
        categoria : "guantes" ,
        stock : 10,
        precio: 200,
        imagen : "/imagenes/guantesFoxNegros.jpg"
    },
    {
        id : "c2",
        nombre : "guantes fox gris ",
        descripcion : "protege tus manos",
        categoria : "guantes" ,
        stock : 10,
        precio: 200,
        imagen : "/imagenes/guantesFoxGris.jpg"
    },
    {
        id : "c3",
        nombre : "guantes fox verdes ",
        descripcion : "protege tus manos",
        categoria : "guantes" ,
        stock : 10,
        precio: 200,
        imagen : "/imagenes/guantesFoxVerde.jpg"
    },
    {
        id : "c4",
        nombre : "guantes fox rojos ",
        descripcion : "protege tus manos",
        categoria : "guantes" ,
        stock : 10,
        precio: 200,
        imagen : "/imagenes/GuantesFoxRO.jpg"
    },
   
    {
        id : "d1",
        nombre : "botas fox negras ",
        descripcion : "protege tus pies",
        categoria : "botas" ,
        stock : 10,
        precio: 300,
        imagen : "/imagenes/botasFoxNegras.jpg"
    },
    
    {
        id : "d2",
        nombre : "botas fox gris ",
        descripcion : "protege tus pies",
        categoria : "botas" ,
        stock : 10,
        precio: 300,
        imagen : "/imagenes/BotasFoxGrises.jpg"
    },
    
    {
        id : "d3",
        nombre : "botas fox rojas ",
        descripcion : "protege tus pies",
        categoria : "botas" ,
        stock : 10,
        precio: 300,
        imagen : "/imagenes/botasFoxRojas.jpg"
    },
    
    {
        id : "d4",
        nombre : "botas fox verdes ",
        descripcion : "protege tus pies",
        categoria : "botas" ,
        stock : 10,
        precio: 300,
        imagen : "/imagenes/botasFoxVerdes.jpg"
    },
    {
        id : "e1",
        nombre : "conjunto fox negro ",
        descripcion : "conjunto para lucirte en la pista",
        categoria : "conjuntos" ,
        stock : 10,
        precio: 700,
        imagen : "/imagenes/ConjuntoFoxBlack.jpg"
    },
    
    {
        id : "e2",
        nombre : "conjunto fox gris ",
        descripcion : "conjunto para lucirte en la pista",
        categoria : "conjuntos" ,
        stock : 10,
        precio: 700,
        imagen : "/imagenes/conjuntoFoxGris.jpg"
    },
    {
        id : "e3",
        nombre : "conjunto fox rojo ",
        descripcion : "conjunto para lucirte en la pista",
        categoria : "conjuntos" ,
        stock : 10,
        precio: 700,
        imagen : "/imagenes/conjuntoFoxRojo.jpg"
    },
    {
        id : "e4",
        nombre : "conjunto fox verde ",
        descripcion : "conjunto para lucirte en la pista",
        categoria : "conjuntos" ,
        stock : 10,
        precio: 700,
        imagen : "/imagenes/conjuntoFoxVerde.jpg"
    },
    
    
    

]

const obtenerMotos = new Promise((resolve , reject) => {
    setTimeout(() =>{
        resolve(motos);
    }, 2000)
})

export default obtenerMotos