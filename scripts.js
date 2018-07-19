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

window.onload = function(e)
{
    includeHTML();
    giveSpoilersEffects();
}