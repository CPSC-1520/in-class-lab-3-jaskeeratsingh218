// Enter your code below.

console.log("js file successfully linked");

// select the javascript list.
let showResourcesButton = document.getElementById('show-resources');
let javascriptlist = document.querySelector(".javascript-resources");

showResourcesButton.addEventListener('click', () => {

    javascriptlist.classList.toggle('d-none');

    if (javascriptlist.classList.contains("d-none")) {
        showResourcesButton.textContent = 'Show Resources';
      } else {
        showResourcesButton.textContent = 'Hide Resources';
      }
    });
    
    
  
 //add bold 
javascriptlist?.addEventListener("mouseover", (event)=>{
    console.log(event.target)
    event.target.classList.add("fw-bold");
});


// remove bold
javascriptlist?.addEventListener("mouseout", (event)=>{
    console.log(event.target)
    event.target.classList.remove("fw-bold")
});

// click italic
javascriptlist?.addEventListener("click", (event)=>{
    console.log(event.target)
    event.target.classList.add("fst-italic");
   });