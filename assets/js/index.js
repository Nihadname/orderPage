
const SendingFinal=document.querySelector(".SendingFinal");
let foodSubmit=document.querySelector(".foodSubmit");
let foodInput=document.querySelector(".foodInput");
let options=document.querySelector(".options");
let NameInput=document.querySelector(".NameInput");
let foodInput2=document.querySelector(".foodInput2");
let NameInputSnding=document.querySelector(".NameInputSnding");
let portions=document.querySelector(".portions");
let portions2=document.querySelector(".portions2");
let price=document.querySelector(".price");
let priceSending=document.querySelector(".priceSending");
let pending=document.querySelector(".pending");
let accept=document.querySelector(".accept");
let whole=document.querySelector(".whole");
let array=[]

foodSubmit.addEventListener("click",function(){

    let valueOfInputFood=foodInput.value;
    if(valueOfInputFood==""){
        alert("this cannot  be empty");
        return
    }
    let creatingOptions=document.createElement("option")
    array.push(valueOfInputFood)

    creatingOptions.innerHTML=array[array.length-1];
options.appendChild(creatingOptions);
});
SendingFinal.addEventListener("click",function(){
    if(NameInputSnding.value==""||options.textContent==""||portions.value==""||price.value==""){
        alert("this cannot  be empty");
        return
    }
    NameInput.value=NameInputSnding.value;
    foodInput2.value=options.textContent;
if(isNaN(portions.value)){
    alert("this should be a number");
    return;
}
 portions2.value=portions.value;
 if(isNaN(price.value)){
    alert("this should be a number");
return;
 }
 priceSending.value=price.value*portions.value;
let whole=document.querySelector(".whole");
whole.classList.replace("d-none","d-block");
 
})
accept.addEventListener("click",function(){
    pending.classList.replace("btn-warning", "btn-success");
    pending.textContent = "Success";
    accept.classList("d-none");


})