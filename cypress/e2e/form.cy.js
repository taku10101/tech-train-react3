/// <reference types="cypress" />

describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/form-test");

    const email = "taku1011htm@ail.com";
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type("password");
    cy.get('button[type="submit"]').click();

    // 正規表現を使用してEメールが正しい形式であることを確認します。
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //trueであればパス
    assert.isTrue(emailRegex.test(email), "Email format is valid");
  });
});
