//rechercher tous les bouttons
const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
console.log(result);

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      
      result.textContent += e.target.id;
    })
})
equal.addEventListener('click',()=>{
    //faire le calcule
    result.textContent=eval(result.textContent)
    console.log(result.textContent);

})

clear.addEventListener('click',()=>{
    result.textContent="";
})