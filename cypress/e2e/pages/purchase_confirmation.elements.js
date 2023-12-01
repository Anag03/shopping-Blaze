export default class PurchaseConrfimationElements {

    get modalTitle() {
        return cy.contains('h2', 'Thank you for your purchase!');
    }

    get greenCheckMark() {
        return cy.get('.sa-success');
    }

    get okBtn() {
        cy.wait(1000); // this was needed because the site doesn't allow to click it if we don't wait
        return cy.contains('button', 'OK');

    }
}