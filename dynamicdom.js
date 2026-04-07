let h1 =document.createElement('h1');
h1.textContent="hi this is created using dom manipulation";

document.querySelector("div").appendChild(h1);
document.querySelector("div").prepend(h1);

// Add style in html using dom manipulation 
h1.style.color="red";
h1.style.backgroundColor="yellow";
h1.classList.add("colors");
h1.classList.remove("colors");
h1.classList.toggle("colors");// if class is present then it will remove and if class is not present then it will add