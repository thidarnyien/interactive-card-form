const confirmBtn = document.querySelector(".confirm");
const cardholderName = document.querySelector("#cardhloderName");
const cardNumber = document.querySelector("#cardNumber");
const expMonth = document.querySelector("#expMonth");
const expYear = document.querySelector("#expYear");
const cvcNumber = document.querySelector("#cvcNumber");

let form = document.querySelector("form");

let showErr = (errElement, errMessage)=>{
    document.querySelector("."+errElement).classList.add("d-block");
    document.querySelector("."+errElement).innerHTML= errMessage;
}
let completed = () => {
    form.style.display = "none";
    document.querySelector(".completed").style.display="block";
}
let myFun = ()=>{
    cardholderName.innerText= form.name.value;
}
let myFun2 = ()=>{
    cardNumber.innerText= form.cardNumber.value;
}
let myFun3 = ()=>{
    let expMon = parseInt(form.month.value);
    expMonth.innerText= expMon < 10 ? "0"+expMon.toString(): expMon;
}
let myFun4 = ()=>{
    let expYr = parseInt(form.year.value);
    expYear.innerText= expYr < 10 ? "0"+expYr.toString(): expYr;
}
let myFun5 = ()=>{
    cvcNumber.innerText= form.cvcNumber.value;
}

form.onsubmit = function(event) {
    if(form.name.value === ""){
        showErr("nameErr", "Please fill cardholder name");
        return false;
     } else{
        cardholderName.innerText= form.name.value;
    }
    if(form.cardNumber.value === ""){
        showErr("cardNumberErr", "Please fill card numbers");
        return false;
    } else if(form.cardNumber.value.length > 19){
        showErr("cardNumberErr", "Wrong format. Numbers only.");
        return false;
    } else{
        cardNumber.innerText = form.cardNumber.value;
    }
  
    if(form.month.value === ""){
        showErr("expErr", "Can't be blank");
        return false;
    } else if(parseInt(form.month.value) > 12 || parseInt(form.month.value)< 1){
        showErr("expErr", "Wrong format.");
        return false;
    } else{
        let expMon = parseInt(form.month.value);
        expMonth.innerText= expMon < 10 ? "0"+expMon.toString(): expMon;
    }
    if(form.year.value === ""){
        showErr("expErr", "Can't be blank");
        return false;
    } else{
        expYear.innerText = form.year.value;
    }
    if(form.cvcNumber.value === ""){
        showErr("cvcNumberErr", "Can't be blank");
        return false;
    } else{
        cvcNumber.innerText = form.cvcNumber.value;
    }

    event.preventDefault();
    return completed();
}