/// <reference types="cypress" />;

describe('/pages', () => {
  it('go to the Contact Form', () => {
    cy.visit('localhost:3000');
  });
  describe('when user click in contact', () => {
    it('open the contact modal', () => {
      cy.get('button[name="contato"]').click();
    });

    it('when contact modal open', () => {
      cy.get('input[name="name"]').type('fihcapua');
      cy.get('input[name="email"]').type('fihcapua@gmail.com');
      cy.get('textarea').type('teste');
      cy.get('button[type="submit"]').click();
    });
  });
});
