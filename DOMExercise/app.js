document.getElementById("container");

let container = document.querySelector("#container");

document.querySelectorAll("li.second");

const ol = document.querySelector("ol");
ol.querySelector("li.third");

const newP = document.createElement("p");
newP.textContent = "Hello!";
container.prepend(newP);

const main = document.querySelector("div.footer");
main.classList.add("main");

main.classList.toggle("main");

const newLi = document.createElement("li");

newLi.textContent = "four";

const ul = document.querySelector("ul");
ul.append(newLi);

const greens = ol.querySelectorAll("li");
for(let green of greens)
{
    green.style.backgroundColor = "green";
}

main.classList.remove("footer");