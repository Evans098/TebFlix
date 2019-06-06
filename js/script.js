function llamadaPdfs() {

    var pdfs = document.querySelectorAll(".pdfs li a");

    pdfs.forEach(function(e) {


        e.addEventListener("click", function(a) {
            var embed = document.getElementById("pdf");
            embed.setAttribute("src", "comics/");
            var src = embed.getAttribute("src");
            var data = a.target.getAttribute("data");
            embed.setAttribute("src", src + data + ".pdf");
        });


    })

}

function llamadaComics() {

    var imgs = document.querySelectorAll(".imgs li a");
    imgs.forEach(function(e) {
        e.addEventListener("click", function(a) {
            var imgst = document.getElementById("imgD").innerHTML = ' <img id="img" name="img_content" type="application/img">';
            var im = document.getElementById("img");
            im.setAttribute("src", "imagenes/");
            var src = im.getAttribute("src");
            var dat = a.target.getAttribute("data");
            im.setAttribute("src", src + dat + ".jpg");
        });



    })
}

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