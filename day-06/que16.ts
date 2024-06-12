/*  Question:16
More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner. */
 
// Initializing the list of guests
let guests = ['sidra', 'ramsha', 'maham'];

// Announcing that a bigger dinner table has been found
console.log("Great news!! I just found a bigger dinner table");

// Adding 'nimra' to the end of the guest list
guests.push("nimra");

// Inserting 'aliya' in the middle of the guest list
guests.splice(Math.floor(guests.length / 2), 0, "aliya");

// Adding 'ranam' to the beginning of the guest list
guests.unshift("ranam");

// Sending an invitation message to each guest
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
