function mostrame(pdf) {

    var pdfAMostrar = pdf;
    var lista = document.querySelectorAll('.lista');
    lista.forEach(function(e){
        console.log(e)
        e.style.display = 'none';
    })
    
    var embed = document.getElementById("pdf");
    embed.setAttribute("src", "comics/");
    var src = embed.getAttribute("src");
    var data = pdfAMostrar.getAttribute("data-pdf");
    embed.setAttribute("src", src + data + ".pdf");

}



function mostrarLista (dataLista){
    var lista = document.querySelectorAll('.lista');
    lista.forEach(function(e){
        console.log(e)
        e.style.display = 'none';
    })
    var actual = document.getElementsByClassName(dataLista.getAttribute('data-lista'))[0];
    console.log(actual)
    actual.style.display = 'flex';
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

function eliminarComics() {
    imagen = document.getElementById("margen");
    padre = imagen.parentNode;
    padre.removeChild(imagen);

}

function eliminarPdfs() {
    imagen = document.getElementById("pdf");
    padre = imagen.parentNode;
    padre.removeChild(imagen);

}








window.addEventListener('load', function(){
    console.log("mec")
    var imgs = document.querySelectorAll(".lista .comic img");
    console.log(imgs)
    imgs.forEach(function(e) {
        e.addEventListener("click", function(a) {
            mostrame(e);
        });

    })
    
});