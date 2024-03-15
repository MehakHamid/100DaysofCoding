//Q16
//adding guest in top, mid , end
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guestlist = ["Jugnu", "Zainab"];
console.log("Great News! I have a bigger table for dinner");
guestlist.unshift("Samrah");
guestlist.splice(guestlist.length / 2, 0, "sadaf");
guestlist.push("soniya");
guestlist.forEach(function (guestlist) { console.log("Dear ".concat(guestlist, ", would you like to join me for dinner")); });
//Q17
//shirink list
console.log("Unfortunately, i can invite only two people for dinners");
while (guestlist.length > 2) {
    var removeGuest = guestlist.pop();
    console.log("Sorry, ".concat(removeGuest, ", I cant invite you to dinner"));
}
guestlist.forEach(function (guestlist) { console.log("Dear ".concat(guestlist, " you're still invited to dinner.")); });
guestlist.splice(0, guestlist.length);
console.log(guestlist);
//Q18
//array in different orders
var Places = ["Makkah", "Madina", "Najaf", "Karbala"];
console.log("Original Order:", Places);
console.log("Alphabatic Order:", Places);
console.log("Original Order:", Places);
console.log("Reverse Alphabatic Order:", __spreadArray([], Places, true).sort());
console.log("Original Order:", Places);
