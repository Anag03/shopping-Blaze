
import HomeElements from '../pages/home.elements';
import ProductElements from '../pages/product.elements';
import CartElements from '../pages/cart.elements';


describe('adding products to the cart', () => {
  const homeElements = new HomeElements();
  const productElements = new ProductElements();
  const cartElements = new CartElements();

  //Array with products and categories that will be added
  const products = [
    { name: 'Nokia lumia 1520', category: 'Phones' },
    { name: 'MacBook air', category: 'Laptops' },
  ];



  it('should add products to the cart', () => {
    cy.visit(Cypress.config('base_url'));

    //This is executed for all the products in the array
    for (const product of products) {
      homeElements.categoryOption(product.category).click();
      homeElements.productOption(product.name).click();
      productElements.addProductBtn.click();
      productElements.popUp('Product added').should('be.visible');

      //Checks if the product added exist in the cart list
      homeElements.cartLink.click();
      cartElements.productAdded(product.name).should('be.visible');
      cartElements.deleteOption(product.name).should('exist');
      homeElements.homeLink.click();
    }
  });


})