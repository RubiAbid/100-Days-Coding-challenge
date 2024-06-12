/*  Question:16
More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner. */
var guests = ['sidra', 'ramsha', 'maham'];
console.log("Great news!! , I  just found a bigger dinner table ");
guests.push("nimra");
guests.splice(Math.floor(guests.length / 2), 0, "aliya");
guests.unshift("ranam");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
