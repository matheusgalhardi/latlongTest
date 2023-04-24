describe('LatLong.net Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.latlong.net/');
    });
    it('Check Top nav logo', () => {
    cy.get('.logolink')
        .should('be.visible')
        .should('have.attr', 'href', '/')
    });
    it('Navigate to each page in nav', () => {
      cy.get('.topnav a')
        .contains('Geographic Tools')
        .click();
      cy.url()
      .should('include', '/geo-tools');
      cy.get('.topnav a')
        .contains('Pricing')
        .click();
      cy.url()
      .should('include', '/products');
      cy.get('.topnav a')
        .contains('Places')
        .click();
      cy.url()
      .should('include', '/latest-places.html');
      cy.get('.topnav a')
        .contains('TV Series')
        .click();
      cy.url()
      .should('include', '/tv-series-locations');
      cy.get('.topnav a')
        .contains('Movies')
        .click();
      cy.url()
      .should('include', '/movies-locations');
    cy.get('#myTopnav > [href="https://twitter.com/latlong_net"]')
        .contains('@LatLong')
        .should('have.attr', 'href', 'https://twitter.com/latlong_net')
      cy.get('.topnav a')
        .contains('User Login')
        .click();
      cy.url()
      .should('include', '/user/login');
    });
    
    it('Displays latitude and longitude on the map', () => {
      cy.get('#latlongmape')
        .should('be.visible');
      cy.get('#latlngspan')
        .should('contain.text', '(0.000000, 0.000000)');
    });
  
    it('Displays GPS coordinates', () => {
      cy.get('#dms-lat')
        .should('contain.text', "0° 0' 0'' N");
      cy.get('#dms-lng')
        .should('contain.text', "0° 0' 0'' E");
    });
  
    it('Shares the location link', () => {
      cy.get('#coordinateslink')
        .should('have.value', '<a href="https://www.latlong.net/c/?lat=0.000000&long=0.000000" target="_blank">(0.000000, 0.000000)</a>');
    });
    it('Check the Latitude and Longitude for Texas', () => {
        cy.get('#place')
            .type('Texas')
        cy.get('#btnfind')
            .click()
        cy.get('#lat')
        .should('have.value', "31.968599");
        cy.get('#lng')
            .should('have.value', "-99.901810");
        cy.get('#latlngspan')
            .should('contain.text', "(31.968599, -99.901810)");
        cy.get('#dms-lat')
            .should('contain.text', "31° 58' 6.9564'' N");
        cy.get('#dms-lng')
            .should('contain.text', "99° 54' 6.516'' W");
        cy.get('#coordinateslink')
            .should('have.value', '<a href="https://www.latlong.net/c/?lat=31.968599&long=-99.901810" target="_blank">(31.968599, -99.901810)</a>');
        cy.get('#coordinatesurl')
            .should('have.value', 'https://www.latlong.net/c/?lat=31.968599&long=-99.901810');
    });
    it.only('Checks the footer', () => {
        cy.get('footer')
          .contains('Refund Policy')
        cy.get('footer')
          .contains('Frequently Asked Questions')
        cy.get('footer')
          .contains('Privacy Policy and Cookies')
        cy.get('footer')
          .contains('Contact Us')
        cy.get('footer')
          .contains('LatLong.net Twitter')
        cy.get('footer')
          .contains('RSS')
        cy.get('footer')
          .contains('2012-2023 www.LatLong.net')
    });        
   
  });
  