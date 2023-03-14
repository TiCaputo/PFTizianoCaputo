/*              ALGORITMO CON UN CONDICIONAL   Y UN OBJETO!     */
    const cliente={nombre:prompt("Ingrese su nombre"), apellido:prompt("Ingrese su apellido"), edad:prompt("Ingrese su edad")}
 let edad = cliente.edad

if(edad >= 18){
    alert ("Puedes continuar en nuestro sitio web!")
} else if(edad > 0 && edad < 18){
    alert ("Puede ingresar con la supervision de un adulto")
}else{
    alert ("Ingrese una edad comprendible " + edad)
}

alert("Bienvenido "+cliente.nombre +" "+ cliente.apellido + ", usted va simular una compra en nuestra pagina web!")

/*              ALGORITMO UTILIZANDO UN CICLO  y SIMULADOR DE COSTOS */

const stock=[
    { nombre: "Café Colombiano", precio:3400, id:1},
    { nombre: "Café Verona", precio:3400, id:2},
    { nombre: "Café House Blend", precio:3400, id:3},
    { nombre: "Cafetera Expresso", precio:44990, id:4},
    { nombre: "Cafetera Italiana", precio:17000, id:5},
    { nombre: "Cafetera de Filtro", precio:6200, id:6}
]


let seleccion = prompt("Quiere comprar alguno de nuestros productos?")

while (seleccion != "si" && seleccion != "no") {
    alert("En caso de querer comprar algun producto ingrese si o al contrario no")
    seleccion = prompt("porfavor ingrese si o no")
}

if (seleccion == "si") {
    alert("Este es nuestro stock")
    let todosLosProductos= stock.map(
        (producto) =>  "ID " + producto.id + " " + producto.nombre +" "+ producto.precio + "$");
    alert(todosLosProductos.join(" - "))
} 


else if (seleccion == no) {
    alert("Gracias por visitarnos!")
}
function eleccionDeCompra() {
    let precio = 0
    while (seleccion == "si") {
        let producto = prompt("Seleccione un producto 1:Café Colombiano, 2:Café Verona, 3:Café House Blend, 4:Cafetera Expresso, 5:Cafetera Italiana, 6:Cafetera de Filtro")

        if (producto == "1" || producto == "2" || producto == "3" || producto == "4" || producto == "5" || producto == "6") {

            switch (producto) {
                case "1":
                    precio = precio + 3400;
                    break;

                case "2":
                    precio = precio + 3400;
                    break;

                case "3":
                    precio = precio + 3400;
                    break;
                case "4":
                    precio = precio + 44990;
                    break;
                case "5":
                    precio = precio + 17000;
                    break;
                case "6":
                    precio = precio + 6200;
                    break;
                default:
                    break;
            }
            alert("El total hasta el momento es " + precio)
            let seleccionSeguirComprando = prompt("Quiere seguir comprando? 1:Si 2:No")
            if(seleccionSeguirComprando == 1){
                seleccion = "si";
            }
            else if(seleccionSeguirComprando !==1){
                seleccion = "no"
            }
        }
    }
    alert("El precio final es de " + precio)
}
window.addEventListener("load", function () {
    eleccionDeCompra()
})
 
/*           ARRAY CON FILTRO SPLICE*/



