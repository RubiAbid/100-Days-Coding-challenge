/* **Question 14:**
Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to invite to
 dinner. Then use your list to print a message to each person, inviting them to dinner.*/
// Guest list
var guests = ['waniya', 'ramsha', 'maham'];
// Loop through the guest list and send invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", \"You are cordially invited to dinner at my place.Looking forward to seeing you!\""));
});
