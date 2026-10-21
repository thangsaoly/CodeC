I'm writing PLAN.md now from your decisions only.

# Class Feedback Box: Plan

## What it is

A website where my students send me feedback about my class. I reply, and everyone can read the feedback I have replied to.

## Who uses it

- **Visitors** only read.
- **My students** sign in with Google.
- **Me, the teacher,** sign in with Google.

## What is in and what is out

**In**
- Reading the feedback I have replied to (everyone).
- Signing in with Google (students and teacher).
- Sending feedback, with a choice to show the name or stay anonymous (signed-in students).
- Seeing the feedback still waiting, replying, and marking it done (teacher only).

**Out**
- Deleting anything. Nobody deletes anything.

## What it keeps

For each feedback:

1. Its words, 1 to 500 characters.
2. Its subject, one of: Theory class, Lab, Homework, Other.
3. The sender's name, only if they chose to show it.
4. When it was sent.
5. My reply.
6. Done or not.
7. When I replied.

## Who may do what

| Who | May |
|---|---|
| Anyone (visitor, student, teacher) | Read the feedback I have replied to |
| Signed-in student | Also send feedback, and choose to show their name or stay anonymous |
| Teacher (me) only | See the feedback still waiting, reply, and mark it done |
| Nobody | Delete anything |

## Done when

Each check is one thing a tester can do.

1. **What it is:** A student sends feedback, the teacher replies, and a visitor then reads that feedback and its reply.
2. **Visitors only read:** A visitor who is not signed in can read replied feedback and sees no way to send, reply, or mark done.
3. **Students sign in with Google:** A student signs in with a Google account and reaches the send form.
4. **Teacher signs in with Google:** The teacher signs in with a Google account and reaches the waiting feedback.
5. **Anyone reads replied feedback:** Feedback with a reply appears for a visitor, a student, and the teacher. Feedback without a reply appears for none of the first two.
6. **Only a signed-in student can send:** A visitor who is not signed in cannot send feedback, including by sending the request directly without the page. A signed-in student can.
7. **Name shown:** A student who chooses to show their name sends feedback, and that name appears with it.
8. **Anonymous saves no name:** A student who chooses anonymous sends feedback, and the saved record contains no name, and none appears on the page.
9. **Only the teacher sees waiting feedback:** The teacher sees feedback still waiting. A visitor and a student do not, including by asking for it directly.
10. **Only the teacher replies:** The teacher saves a reply, and it appears with the feedback. A visitor and a student cannot reply, including by sending the request directly.
11. **Only the teacher marks done:** The teacher marks a feedback done and it shows as done. A visitor and a student cannot, including by sending the request directly.
12. **Nobody deletes anything:** No page offers delete to anyone, the teacher included, and a delete request sent directly is refused and the feedback remains.
13. **500 characters can be sent and 501 cannot:** Exactly 500 characters are saved. 501 are refused and nothing is saved. This holds even with the browser's developer tools.
14. **At least 1 character:** Empty feedback is refused and nothing is saved.
15. **Subject must be on the list:** Each of Theory class, Lab, Homework, Other can be saved. Any other subject cannot be saved, even by changing the form with the browser's developer tools.
16. **What it keeps:** After one feedback is sent, replied to, and marked done, the saved record holds its words, subject, sent time, reply, done status, and reply time, plus the sender's name only if shown.

## Questions for me

1. **Who is the teacher?** How does the website know which Google account is you? (One specific account? Several?)
2. **Which students may sign in?** Any Google account, or only my students (for example a certain school email domain or a list)?
3. **Does replying make it public by itself?** I read "everyone can read the feedback I have replied to" as: replied means public. Is that right?
4. **What does "done" do?** Can I mark feedback done before replying, or without replying? Does done change who can read it? Do visitors see done or not?
5. **Can I change or remove a reply after saving it?** Can I edit a reply? (Nobody deletes, but editing was not mentioned.)
6. **Can a student see their own feedback while it waits?** You said only I see waiting feedback, so I have planned for no. Do you want that?
7. **Is the subject required?** Must a student choose one, or may it be left empty?
8. **Is there a limit on my reply?** Same 500 characters, a different limit, or none?
9. **Does the sender's name come from their Google account?** Or do they type it in?
10. **Anonymous and me:** Should I be unable to tell who sent anonymous feedback, even in the system's records behind the scenes? I planned for the saved record to hold no name, but not for deciding what else is stored.
11. **Is feedback with only spaces allowed?** Do spaces count toward the 1 to 500 characters?
12. **Language:** Will feedback be in English, Khmer, or both?
13. **Anything else out?** Besides deleting, is there anything you want left out for now (for example editing sent feedback, notifications, search, limits on how much one student sends)?

The plan is saved as PLAN.md. Checks 14 and 16 go slightly beyond your examples, but they follow directly from your "1 to 500 characters" and "what it keeps" decisions. Question 4 matters most, because it decides how "done" and "replied" relate.