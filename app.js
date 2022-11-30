const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check");
const responce = document.querySelector("#responce");

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum =0;
    for(let i=0;i<dob.length;i++){
        sum += Number(dob[i]);
    }
    console.log(sum);
    return sum;
}
responce.style.display = "none";
checkButton.addEventListener("click", function (){
    responce.style.display = "block";
    if(birthDate.value&&luckyNumber.value)
    {    
        const dob = birthDate.value;
        const sum = calculateSum(dob);
        if(sum%luckyNumber.value==0){
            responce.innerText = "Your Birthdate is lucky🤞.";
        }else{
            responce.innerText = "Your Birthdate is Not that lucky😬.";
        }
    }else{
        responce.innerText = "Enter both inputs😡.";
    }
})