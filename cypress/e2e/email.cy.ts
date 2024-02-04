describe("template spec", () => {
  it("passes", () => {
    const email = "taku1011@dfd.com";
    Cypress._.isString(email) && email.includes("@") && email.includes("."); //valid email
    cy.visit("http://localhost:5173");

    cy.get('input[type="email"]').type(email);

    cy.get('input[type="password"]').type("password");
    cy.get('button[type="submit"]').click();
  });
});
