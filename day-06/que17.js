/*           Question:17
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program.*/
var guestslist = ['ranam', 'sidra', 'ramsha', 'aliya', 'maham', 'nimra'];
console.log("sad news!! New dinner table won’t arrive in time for the dinner ");
// Loop to remove guests if there are more than 2
while (guestslist.length > 2) {
    var removedGuest = guestslist.pop();
    console.log("Sorry ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Message for the last 2 guests
console.log("Invitation to the last 2 guests:");
guestslist.forEach(function (guest) { return console.log("Hey ".concat(guest, ", you are still invited to dinner.")); });
// Empty the guests list
guestslist.splice(0, guestslist.length);
console.log(guestslist); // Shows an empty list
