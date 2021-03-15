// Show links via burger-menu

function showLink(a) {
    let links = document.querySelector(".links-header");  // Взимаме линка
    links.classList.toggle("show"); //Прибавяме му клас

    a.classList.toggle("change");
}