function showImage(self, image)
{
    var img = document.createElement("img");
    img.src = image;
    self.parentNode.replaceChild(img, self);
}

function toggleSpoiler(self)
{
    var spoiler = self.parentElement;
    self.innerText = self.innerText.includes("Open") ? "Close": "Open";
    if (spoiler.classList.contains("open"))
    {
        spoiler.classList.remove("open");
    }
    else
    {
        spoiler.classList.add("open");
    }
}

function giveSpoilersEffects()
{
    var array = document.getElementsByClassName("spoiler-toggle");
    for (var i = 0; i < array.length; i++)
    {
        array[i].addEventListener("click", toggleSpoiler, false);
    }
}

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        } 
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
}

function drawBlocks()
{
    var canvas = document.getElementById("blockData");
    if (canvas != null)
    {
        canvas.width = 160;
        canvas.height = 160;
        var img0 = document.getElementById("blockData0");
        var img1 = document.getElementById("blockData1");
        var img2 = document.getElementById("blockData2");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.transform(1,0.5,0,1,0,0);
        ctx.drawImage(img0, 32, 32, 64, 64);
        ctx.beginPath();
        ctx.setTransform(0.5,-0.5,0,1,0,0);
        ctx.drawImage(img1 == null ? img0 : img1, 188, 175, 96, 64);
        ctx.beginPath();
        ctx.setTransform(1.3,0.7,-0.7,0.7,0,0);
        ctx.drawImage(img2 == null ? img0 : img2, 40.5, -39, 47.5, 68);
    }
}

window.onload = function(e)
{
    includeHTML();
    giveSpoilersEffects();
    drawBlocks();
}