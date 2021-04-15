/// <reference types="cypress" />;

describe('/', () => {
  it('visit some page and go to the modal Contact Form', () => {
    cy.visit('/');
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
