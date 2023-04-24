describe('LatLong.net Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.latlong.net/');
    });
    it('Check Top nav logo', () => {
    cy.get('.logolink')
        .should('be.visible')
        .should('have.attr', 'href', '/')
    });
    it('Navigates to each page in nav', () => {
      cy.get('.topnav a')
        .contains('Geographic Tools')
      cy.get('.topnav a')
        .contains('Pricing')
      cy.get('.topnav a')
        .contains('Places')
      cy.get('.topnav a')
        .contains('TV Series')
      cy.get('.topnav a')
        .contains('Movies')
    cy.get('#myTopnav > [href="https://twitter.com/latlong_net"]')
        .contains('@LatLong')
      cy.get('.topnav a')
        .contains('User Login')
    });
    it('Navigates to the Geographic Tools page', () => {
        cy.get('.topnav a')
          .contains('Geographic Tools')
          .click();
        cy.url()
        .should('include', '/geo-tools');
      });
  });
  