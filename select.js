// element selection
let abcd=document.getElementById('abcd');
console.dir(abcd);
let selection =document.getElementsByClassName('selection');
console.dir(selection);
let quer =document.querySelector('h2');
console.dir(quer)
let querall=document.querySelectorAll('h2');
console.dir(querall)

//manipulation in the text.. 
let h2=document.querySelector('h2');
console.dir(h2);
h2.innerHTML="hello vinay"
h2.innerText="helloooo vinayyy"

// get set and    element 
// first method 
 let a=document.querySelector('a')
 console.dir(a);
 a.href="https://google.com"

// second method
 let a=document.querySelector('a')
 console.dir(a);
 a.setAttribute("href","https://instagram.com")
 let image =document.querySelector('img');
 image.setAttribute("src","https://images.unsplash.com/photo-1773332585754-f1436987743b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

getelement
let a=document.querySelector('a');
console.log(a.getAttribute('href'));
a.removeAttribute('href');

