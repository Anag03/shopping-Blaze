export default class CartElements {


    productAdded(product) {
        return cy.contains('td', product, { timeout: 20000 });
    }

    deleteOption(product) {
        return cy.contains('td', product).closest('tr').find('td').find('a').eq(0)
    }

    totalToBePaid(amount) {
        return cy.contains('h3', amount);
    }

    get placeOrderBtn() {
        return cy.get('button[data-toggle="modal"]');
    }
}