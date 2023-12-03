import { faker } from '@faker-js/faker';


describe('sign up tests', () => {

  const username = faker.internet.userName(); //generates a random username using faker library

  it('should register the user successfuly', () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.config('api_base_url')}/signup`,
      body: {
        username: username,
        password: "Test123*",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.eq('');
    });
  });

  it('should try to register a user that already exist', () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.config('api_base_url')}/signup`,
      body: {
        username: username,
        password: "Test123*",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.errorMessage).to.eq('This user already exist.');
    });
  });

  it('should log in with valid credentials', () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.config('api_base_url')}/login`,
      body: {
        username: username,
        password: "Test123*",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include('Auth_token');
    });


  });

  it('try to log in with invalid credentials', () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.config('api_base_url')}/login`,
      body: {
        username: username,
        password: "Test1234*",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.errorMessage).to.eq('Wrong password.');
    });
  });

})