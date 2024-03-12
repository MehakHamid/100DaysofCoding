//Q13
var PetName = ["Smoke bell", "Snow", "Smoky"];
PetName.forEach(function (PetName) { console.log("My cat name is ".concat(PetName, ".")); });
//Q14
var GuestList = ["Jugnu", "Zainab", "Samrah", "Sadaf"];
var Message = "Join us for dinner and good vibes tonight!";
GuestList.forEach(function (GuestList) { console.log("Hello My dear ".concat(GuestList, ", ").concat(Message)); });
//Q15
var GuestList1 = ["Jugnu", "Zainab", "Samrah", "Sadaf"];
var Message1 = "Join us for dinner and good vibes tonight!";
var unableToAttend = "Sadaf";
console.log("".concat(unableToAttend, " can't make it to dinner"));
var NewGuest = "Soniya";
GuestList1[GuestList1.indexOf(unableToAttend)] = NewGuest;
GuestList1.forEach(function (GuestList1) { console.log("Hello My dear ".concat(GuestList1, ", ").concat(Message1)); });
