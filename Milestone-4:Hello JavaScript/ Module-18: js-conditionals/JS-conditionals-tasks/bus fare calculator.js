let age=20;
let fare=800;
let isStudent;
let ticketPrice;

if(age<10){
    ticketPrice="Free";
}
else if(isStudent==true){
    ticketPrice=(fare*0.5);
}
else if(age >= 60){
    ticketPrice=(fare*0.85);
}
else{
    ticketPrice=fare;
}
console.log("Ticket Price: ",ticketPrice,"tk");