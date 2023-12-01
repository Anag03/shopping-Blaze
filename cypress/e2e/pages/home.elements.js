export default class HomeElements {

    categoryOption(category) {
        return cy.contains('a', category);
    }

    productOption(product) {
        return cy.contains('a', product);
    }

    get homeLink() {
        return cy.contains('a', 'Home');
    }

    get cartLink() {
        return cy.contains('a', 'Cart');
    }
}