/// <reference types= "cypress" />
import LoginPage from "../../../pom/Login/login.cy";

describe('TC_Login_01 - Login dengan kredensial valid', () => {
    it('TC_Login_01_01 - Login dengan username dan password benar', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      LoginPage.verifyLoginPage().should('have.text','Login');
      //cy.get('h5').contains('Login').should('have.text','Login');

      // Find the username and password fields and type the credentials
      LoginPage.inputUsername().type('Admin');
      //cy.get('[name="username"]').type('Admin');
      LoginPage.inputPassword().type('admin123');
      //cy.get('[name="password"]').type('admin123');
  
      cy.intercept('GET', '**/action-summary').as('actionSummary');

      LoginPage.buttonLogin().click();
      //cy.get('button[type="submit"]').click();
      cy.wait('@actionSummary');
      LoginPage.dashboardPage().should('have.text','Dashboard');
      //cy.get('h6').contains('Dashboard').should('have.text','Dashboard');
  
    });
  });

  describe('TC_Login_02 - Login dengan kredensial tidak valid', () => {
    it('TC_Login_02_01 - Login dengan username salah', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

      // Find the username and password fields and type the credentials
      LoginPage.inputUsername().type('admin123');
      //cy.get('[name="username"]').type('admin123');
      LoginPage.inputPassword().type('admin123');
      //cy.get('[name="password"]').type('admin123');
  
      cy.intercept('GET', '**/login').as('actionLogin');

      // Click the login button
      LoginPage.buttonLogin().click()
      //cy.get('button[type="submit"]').click();
      cy.wait('@actionLogin');
      LoginPage.dashboardPageInvalid().should('have.text','Invalid credentials');
      //cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text', 'Invalid credentials');
  
    });

    it('TC_Login_02_02 - Login dengan password salah', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Find the username and password fields and type the credentials
      LoginPage.inputUsername().type('Admin');
      //cy.get('[name="username"]').type('Admin');
      LoginPage.inputPassword().type('123@admin');
      //cy.get('[name="password"]').type('123@admin');
  
      cy.intercept('GET', '**/login').as('actionLogin');

      // Click the login button
      LoginPage.buttonLogin().click()
      //cy.get('button[type="submit"]').click();
      cy.wait('@actionLogin');
      LoginPage.dashboardPageInvalid().should('have.text', 'Invalid credentials');
      //cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text', 'Invalid credentials');
  
    });

    it('TC_Login_02_03 - Login dengan username & password salah', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Find the username and password fields and type the credentials
      LoginPage.inputUsername().type('nikenarra');
      //cy.get('[name="username"]').type('nikenarra');
      LoginPage.inputPassword().type('nikenarra12');
      //cy.get('[name="password"]').type('nikenarra12');

      cy.intercept('GET', '**/login').as('actionLogin');
  
      // Click the login button
      LoginPage.buttonLogin().click()
      //cy.get('button[type="submit"]').click();
      cy.wait('@actionLogin');
      LoginPage.dashboardPageInvalid().should('have.text', 'Invalid credentials');
      //cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text', 'Invalid credentials');
  
    });

  });

  describe('TC_Login_03 - Login dengan kredensial kosong', () => {
    it('TC_Login_03_01 - Login tanpa memasukan username', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Find the username and password fields and type the credentials
      LoginPage.inputUsername().clear();
      //cy.get('[name="username"]').clear();
      LoginPage.inputPassword().type('admin123');
      //cy.get('[name="password"]').type('admin123');
  
      // Click the login button
      LoginPage.buttonLogin().click();
      //cy.get('button[type="submit"]').click();
      LoginPage.dashboardPageRequired().should('have.text', 'Required');
      //cy.get('.oxd-input-field-error-message').should('have.text', 'Required');
    });

    it('TC_Login_03_02 - Login tanpa memasukan password', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Find the username and password fields and type the credentials
      LoginPage.inputUsername().type('Admin');
      //cy.get('[name="username"]').type('Admin');
      LoginPage.inputPassword().clear();
      //cy.get('[name="password"]').clear();
  
      // Click the login button
      LoginPage.buttonLogin().click();
      //cy.get('button[type="submit"]').click();
      LoginPage.dashboardPageRequired().should('have.text', 'Required');
      //cy.get('.oxd-input-field-error-message').should('have.text', 'Required');
  
    });

    it('TC_Login_03_03 - Login tanpa memasukan username dan password', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Find the username and password fields and type the credentials
      LoginPage.inputUsername().clear();
      //cy.get('[name="username"]').clear();
      LoginPage.inputPassword().clear();
      //cy.get('[name="password"]').clear();
  
      // Click the login button
      LoginPage.buttonLogin().click();
      //cy.get('button[type="submit"]').click();

      LoginPage.dashboardPageRequired()
        .contains('Required')
        .should('have.length', 1);

      // cy.get('.oxd-input-field-error-message')
      //   .contains('Required')
      //   .should('have.length', 1);
  
    });
  });

  describe('TC_Login_04 - Login dengan kredensial tidak terdaftar', () => {
    it('TC_Login_04_01 - Login dengan kredensial tidak terdaftar', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Find the username and password fields and type the credentials
      LoginPage.inputUsername().type('cantik');
      //cy.get('[name="username"]').type('cantik');
      LoginPage.inputPassword().type('cantik');
      //cy.get('[name="password"]').type('cantik');

      cy.intercept('GET', '**/login').as('actionLogin');
  
      // Click the login button
      LoginPage.buttonLogin().click();
      //cy.get('button[type="submit"]').click();

      cy.wait('@actionLogin');
      LoginPage.dashboardPageInvalid().should('have.text','Invalid credentials');
      //cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text', 'Invalid credentials');

    });
  });