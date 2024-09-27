var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popupbox");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

var cancelbutton = document.getElementById("cancel-book")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()

    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

})


var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitle = document.getElementById("book-title-input");
var bookauthor = document.getElementById("book-author-input");
var bookdescription = document.getElementById("book-description-input");

addbook.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");

    div.innerHTML = `<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">delete</button>`
    
    container.append(div);

    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

function deletebook(event){

    event.target.parentElement.remove()

}



