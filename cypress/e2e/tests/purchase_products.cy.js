
import HomeElements from '../pages/home.elements';
import ProductElements from '../pages/product.elements';
import CartElements from '../pages/cart.elements';
import PaymentFormElements from '../pages/payment_form.elements';
import PurchaseConrfimationElements from '../pages/purchase_confirmation.elements';
import { faker } from '@faker-js/faker';


describe('complete the purchase', () => {
    const homeElements = new HomeElements();
    const productElements = new ProductElements();
    const cartElements = new CartElements();
    const paymentFormElements = new PaymentFormElements();
    const purchaseConrfimationElements = new PurchaseConrfimationElements();


    //Array with products and categories that will be added
    const products = [
        { name: 'Nokia lumia 1520', category: 'Phones' },
        { name: 'MacBook air', category: 'Laptops' },
    ];



    it('should complete the purchase', () => {
        cy.visit(Cypress.config('base_url'));

        //This is executed for all the products in the array
        for (const product of products) {
            homeElements.categoryOption(product.category).click();
            homeElements.productOption(product.name).click();
            productElements.addProductBtn.click();
            productElements.popUp('Product added').should('be.visible');

            homeElements.cartLink.click();
            cartElements.productAdded(product.name).should('be.visible');
            cartElements.deleteOption(product.name).should('exist');
            homeElements.homeLink.click();
        }

        //Goes to the cart
        homeElements.cartLink.click();
        cartElements.totalToBePaid('1520').should('be.visible');
        cartElements.placeOrderBtn.click();

        //Completing the payment data
        paymentFormElements.modal.should('be.visible');
        paymentFormElements.nameInput.click().invoke('val', faker.person.firstName);
        paymentFormElements.countryInput.click().invoke('val', faker.location.country);
        paymentFormElements.cityInput.click().invoke('val', faker.location.city);
        paymentFormElements.creditCardInput.click().invoke('val', faker.finance.creditCardNumber);
        paymentFormElements.monthInput.click().invoke('val', faker.number.int({ min: 1, max: 12 }));
        paymentFormElements.yearInput.click().invoke('val', faker.number.int({ min: 2025, max: 2035 }));

        //Completing the purchase
        paymentFormElements.paymentBtn.click();
        purchaseConrfimationElements.modalTitle.should('be.visible');
        purchaseConrfimationElements.greenCheckMark.should('exist');
        purchaseConrfimationElements.okBtn.click();
        cy.url().should('include', '/index.html');


    });


})