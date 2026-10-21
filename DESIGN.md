# Class Feedback Box — Design

## Design rules

- **Phone first.** The layouts start as a single column for a narrow screen. On a wider screen, the content stays centered and uses the available width without changing the order or controls.
- **One main colour:** deep blue `#2457A7`, used for primary buttons, links, and small emphasis. White cards sit on a pale blue-gray page background. Text is dark navy for contrast.
- **Large, readable type:** body text is 18px, headings are 30px or larger, and form labels are 18px. The mockup scales this slightly on wider screens.
- **Same buttons everywhere:** primary actions use the same solid blue, rounded button; secondary actions use the same outlined button. Both have large text and touch-friendly height.
- **No delete controls.** Visitor and student views never expose waiting feedback. Only the teacher view includes waiting items, reply controls, and a Done action.

## Screens

### 1. Replied feedback — public

Everyone can read feedback that has a reply. Each item shows its subject, feedback words, sender name only when the student chose to show it, sent date, reply, and reply date. Anonymous feedback has no name label. No sign-in or management controls are needed to read.

- **Nothing yet:** “No replied feedback yet.” There are no cards to show.
- **Something went wrong:** An inline message says the replied feedback could not be loaded, with a **Try again** button.
- **No internet:** An offline notice explains the page needs a connection to load feedback, with a **Try again** button when connection returns.

### 2. Sign in with Google — student entry

The screen explains that signing in is required to send feedback. **Sign in with Google** starts the Google sign-in flow. A successful student sign-in leads to the Send feedback form. This design does not assume an account eligibility policy or a sign-out flow.

- **Nothing yet:** There is no feedback content on this entry screen; it shows the sign-in prompt.
- **Something went wrong:** A clear sign-in error appears above **Try again**.
- **No internet:** The Google sign-in button is disabled while offline, with an explanation that a connection is needed.

### 3. Send feedback — signed-in student

The form contains:

- **Your feedback:** multiline text, required, 1–500 characters. The counter starts at `0 / 500` and updates as text is entered. Sending is unavailable if empty or over 500 characters.
- **Subject:** required selection with exactly **Theory class**, **Lab**, **Homework**, and **Other**. The initial prompt is “Choose a subject”. Whether the field should be required is listed as a question below because PLAN.md asks for one of these subjects but does not say whether choosing one is mandatory.
- **Show my name / Stay anonymous:** a two-choice control. The selected choice determines whether the sender's name is displayed; anonymous submission stores no sender name according to the plan.
- **Send:** submits the feedback. It is enabled only when the text has 1–500 characters and a subject is selected (the mockup uses that provisional form behavior; see Questions).
- **Sign in with Google:** shown before Send for a visitor who has not signed in; signing in leads to this form. A signed-in student sees the Send action instead.

- **Nothing yet:** The blank form has instructional placeholders and a `0 / 500` counter.
- **Something went wrong:** A form-level message explains the submission failed and keeps the entered text and selections so the student can try again.
- **No internet:** An offline message explains sending needs a connection. The form stays visible and entered text stays in place; Send is unavailable until the connection returns.
- **Sent:** A confirmation says the feedback was sent. It does not claim the feedback is public; only replied feedback is readable by everyone.

### 4. Teacher sign in with Google

The teacher uses **Sign in with Google** to reach the teacher's waiting feedback view. The screen does not show management actions before sign-in. Which Google account is the teacher's is still an open plan question.

- **Nothing yet:** The screen still presents the sign-in action.
- **Something went wrong:** A sign-in error appears with **Try again**.
- **No internet:** Sign-in is disabled with a connection explanation.

### 5. Waiting feedback — teacher only

The teacher sees feedback still waiting. Each waiting item shows its words, subject, sender name only if the student chose to show it, and sent date. It has a reply field and **Reply** action, plus **Mark done**. The plan does not define whether Done can be used before a reply or whether done items remain in this view; those are questions below. The mockup shows both actions on each waiting item so the intended teacher controls are visible.

- **Nothing waiting:** “Nothing waiting for a reply.” No waiting cards are shown.
- **Something went wrong:** An inline load error and **Try again** action.
- **No internet:** An offline notice explains the waiting list and teacher actions need a connection; cards remain visible if already loaded, but actions are unavailable until reconnected.
- **Reply error:** The reply remains in its field and an error appears so the teacher can retry.
- **Done confirmation:** A status message confirms the item was marked done. What done changes is still an open question.

## Questions for me

These details are not specified by PLAN.md, so the mockup leaves them as questions rather than adding product rules:

1. Which Google account or accounts identify the teacher?
2. May any Google account send feedback, or only approved student accounts?
3. Does saving a reply make the feedback public immediately?
4. Can feedback be marked done before or without a reply? Does done change who can read it, and should visitors see its done status?
5. Can a saved reply be edited?
6. May students see their own waiting feedback?
7. Is choosing a subject required?
8. What character limit applies to a teacher reply?
9. Does “show my name” use the Google account name, or does the student type a name?
10. Should the teacher be unable to identify anonymous senders in any system record, beyond the saved feedback having no name?
11. Do spaces count toward the 1–500 character limit, and is a message made only of spaces allowed?
12. Should the site support English, Khmer, or both?
13. Should anything else stay out besides deleting, such as editing sent feedback, notifications, search, or per-student sending limits?
