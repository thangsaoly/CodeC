# AGENTS.md

The rules you will follow before every change to my website:

- read PLAN.md and DESIGN.md before every change, and follow them exactly;
- build only what they describe; if something is missing or unclear, ask me: do not guess;
- plain HTML, CSS and JavaScript, with no frameworks and no build step;
- the website's files go in the folder public, and nothing else does: PLAN.md, DESIGN.md, the rules and the tests stay outside it;
- Firebase is loaded from https://www.gstatic.com/firebasejs/ as modules, with the same version in every import;
- the Firebase settings go in public/firebase-config.js, as export const firebaseConfig, with every value 'PASTE-YOURS' until I paste my own; until then, every page shows a clear note that it is not connected yet;
- anything a visitor typed is shown with textContent, never innerHTML;
- before any code, show me an implementation plan, and wait;
- never change PLAN.md or DESIGN.md yourself: tell me what should change.
