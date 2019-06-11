
//Funcion que realiza la visualización
/**
 * 
 * @param {*} pdf nodo img de la clase .comic que contiene el nombre del pdf(data-pdf)
 */
function mostrame(pdf) {

    var pdfAMostrar = pdf;
    var lista = document.querySelectorAll('.lista');
    lista.forEach(function(e){
        console.log("paso4")
        e.style.display = 'none';
    })
    
    var embed = document.getElementById("pdf");//obtiene por id
    embed.setAttribute("src", "comics/");//establece un atributo
    var src = embed.getAttribute("src");//obtiene atributo src
    var data = pdfAMostrar.getAttribute("data-pdf");//obtencion de los datos que contiene ese atributo
    embed.setAttribute("src", src + data + ".pdf");//establece un nuevo atributo concatenanto los datosy mostrar el pdf
    console.log("Creo los atributos del pdf");
    
}


//mostrar lista de comics en imagenes
function mostrarLista (dataLista){
    var lista = document.querySelectorAll('.lista');
    lista.forEach(function(e){
        console.log(" paso 2")
        e.style.display = 'none';
    
        
    })
    
    var actual = document.getElementsByClassName(dataLista.getAttribute('data-lista'))[0];
    console.log(actual+" paso3")
    actual.style.display = 'flex';
    var embed = document.getElementById("pdf");
    embed.setAttribute('src',null);//El atributo src se cambia null para ocultar el pdf 
}


// function llamadaComics() {

//     var imgs = document.querySelectorAll(".imgs li a");
//     imgs.forEach(function(e) {
//         e.addEventListener("click", function(a) {
//             var imgst = document.getElementById("imgD").innerHTML = ' <img id="img" name="img_content" type="application/img">';
//             var im = document.getElementById("img");
//             im.setAttribute("src", "imagenes/");
//             var src = im.getAttribute("src");
//             var dat = a.target.getAttribute("data");
//             im.setAttribute("src", src + dat + ".jpg");
//         });



//     })
// }

// function eliminarComics() {
//     imagen = document.getElementById("margen");
//     padre = imagen.parentNode;
//     padre.removeChild(imagen);

// }

// function eliminarPdfs() {
//     imagen = document.getElementById("pdf");
//     padre = imagen.parentNode;
//     padre.removeChild(imagen);

// }







//mostrar los pdf una vez que se pulse en las imagenes
window.addEventListener('load', function(){
    
    console.log("mec_inicial")
    // Recoge todas los nodos imagenes de clases .comic
    var imgs = document.querySelectorAll(".lista .comic img");
    console.log(imgs+" antes del foreach de lso pdfs");
    imgs.forEach(function(e) {
        e.addEventListener("click", function(a) {
            console.log("entro en el foreach inicial")
            mostrame(e);
            
        });

    })
    this.console.log("No entro en el foreach de los pdfs");
    
});