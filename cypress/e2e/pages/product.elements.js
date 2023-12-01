export default class ProductElements {

    get addProductBtn() {
        return cy.contains('a', 'Add to cart');
    }

    popUp(expectedMessage) {
        return cy.on("window:alert", (str) => {
            expect(str).to.equal(expectedMessage);
        });
    }

}