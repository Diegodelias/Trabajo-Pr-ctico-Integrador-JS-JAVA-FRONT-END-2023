let botonResumen = document.getElementById("resumen");
let selectCategorias = document.getElementById("selectCategoria");
let totalPagar = document.getElementById("totalPagar")
let cantidad = document.getElementById("cantidad")
const form = document.querySelector(".validado");
const botonBorrar = document.querySelector("#botonBorrar");
const divsdescuentos = document.querySelectorAll(".precios-categorias");



divsdescuentos.forEach(function (div){

    div.addEventListener("click", function() {

        const tipoDescuento =  div.getAttribute("data-attribute");
        console.log(tipoDescuento);
        selectCategorias.value = tipoDescuento;
    




    })





})


botonResumen.addEventListener("click",function(){
    if(form.checkValidity()) {
    procesarCategoria(selectCategorias.value,Number(cantidad.value))
    }
  
})
botonBorrar.addEventListener("click", function() {

    form.reset();
    form.classList.remove('was-validated')



});

form.addEventListener('submit', (e)=>{
  
   e.preventDefault();
  
     if(!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();

     }

     form.classList.add('was-validated')
  
})



function procesarCategoria(categoria,cantidad) {
   
    let valor 
        //obtiene valor del select
        switch(categoria){

            case "estudiante":
            
            
               valor= calcularValorTicket(80,cantidad)
                break;
            case "trainee":
         
                valor = calcularValorTicket(50, cantidad)
                break
            case "junior":
              
               valor = calcularValorTicket(15,cantidad)
                break;
        }

        return valor

}


function calcularValorTicket(porcentaje , cantidad) {


  let res =  ((200 - (200 * porcentaje) / 100))  * cantidad
  escribirEnInputTotal(res)

  

  return res


}

function escribirEnInputTotal(valor) {
    totalPagar.value =  valor

}

