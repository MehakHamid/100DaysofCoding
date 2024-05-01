//Q16
//adding guest in top, mid , end

let guestlist: string[] = ["Jugnu","Zainab"]
console.log(`Great News! I have a bigger table for dinner`)
guestlist.unshift("Samrah")
guestlist.splice(guestlist.length / 2,0, "sadaf")
guestlist.push("soniya")
guestlist.forEach(guestlist => {console.log(`Dear ${guestlist}, would you like to join me for dinner`)})

//Q17
//shirink list

console.log(`Unfortunately, i can invite only two people for dinners`)
while (guestlist.length > 2) {let removeGuest = guestlist.pop();
console.log(`Sorry, ${removeGuest}, I cant invite you to dinner`);}
guestlist.forEach(guestlist => {console.log(`Dear ${guestlist} you're still invited to dinner.`);})

guestlist.splice(0, guestlist.length);
console.log(guestlist)

//Q18
//array in different orders

let Places: string[] = ["Makkah", "Madina", "Najaf", "Karbala"]
console.log("Original Order:", Places)
console.log("Alphabatic Order:", Places)
console.log("Original Order:", Places)
console.log("Reverse Alphabatic Order:", [...Places].sort())
console.log("Original Order:", Places)