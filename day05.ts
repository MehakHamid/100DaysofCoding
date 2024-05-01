//Q13

let PetName: string[] = ["Smoke bell","Snow","Smoky"]
PetName.forEach(PetName => {console.log(`My cat name is ${PetName}.`)});

//Q14

let GuestList: string[] = ["Jugnu","Zainab", "Samrah", "Sadaf"]
let Message = "Join us for dinner and good vibes tonight!"
GuestList.forEach(GuestList => {console.log(`Hello My dear ${GuestList}, ${Message}`)})

//Q15

let GuestList1: string[] = ["Jugnu","Zainab", "Samrah", "Sadaf"]
let Message1 = "Join us for dinner and good vibes tonight!"
let unableToAttend ="Sadaf"
console.log(`${unableToAttend} can't make it to dinner`)
let NewGuest = "Soniya"
GuestList1[GuestList1.indexOf(unableToAttend)] = NewGuest
GuestList1.forEach(GuestList1 => {console.log(`Hello My dear ${GuestList1}, ${Message1}`)})