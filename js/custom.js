var age = prompt("Enter your age");
var gender = prompt("Enter your gender");

if(age >= 18 && gender === 'male'){
   document.write("You can travel alone");
}
else if(age >= 25 && gender === 'female'){
    document.write("You can travel alone");    
}
else if(age < 25 && gender === 'female'){
    document.write("Please don't travel alone");    
}
else{
    document.write("You can't travel alone");
}