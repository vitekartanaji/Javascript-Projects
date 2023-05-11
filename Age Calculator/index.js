const birthdayEl= document.getElementById("birthday");

const btnEl= document.getElementById("btn");

const resultEl = document.getElementById("result");


const calculateAge=()=>{

    const birthdayValue = birthdayEl.value;

    if(birthdayValue === ""){
        alert("Please Enter Your Birth Date.");
    }else{

        const age = getAge(birthdayValue);

        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
        
    };

};


const getAge = (birthdayValue) =>{

    const currentDate = new Date();

    const birthdayDate = new Date(birthdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();

    const month  = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    };

    return age;

}


btnEl.addEventListener("click", calculateAge);