Cypress.Commands.add("text", { prevSubject: true }, (subject, options) => {
    return subject.text();
});