export default class PaymentFormElements {

    get modal() {
        return cy.get('div[id="orderModal"] div');
    }

    get nameInput() {
        return cy.get('input#name');
    }

    get countryInput() {
        return cy.get('input#country');
    }

    get cityInput() {
        return cy.get('input#city');
    }

    get creditCardInput() {
        return cy.get('input#card');
    }

    get monthInput() {
        return cy.get('input#month');
    }

    get yearInput() {
        return cy.get('input#year');
    }

    get paymentBtn() {
        return cy.contains('button', 'Purchase');
    }

}