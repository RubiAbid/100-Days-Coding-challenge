/*            **Question 15:**
Changing Guest List: One of your guests can't make it to the dinner, so you need to send out
 a new set of invitations with a replacement guest.*/
var guests = ['waniya', 'ramsha', 'maham'];
console.log(guests[0] + " cannot make it to dinner.");
// Replace 'waniya' with 'sidra'
guests.splice(0, 1, 'sidra');
// Print a message for each guest who can make it
guests.forEach(function (guest) {
    console.log(guest + ", you are invited to dinner. See you there!");
});
