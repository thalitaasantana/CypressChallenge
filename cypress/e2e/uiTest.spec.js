describe('UI Test', () => {
  it('Should log in and switch to descending alphabetical order', () => {
    
    // Go to the site and login
    cy.visit('https://www.saucedemo.com/')
    cy.wait(2000)
    cy.get('input[name="user-name"]').type('visual_user')
    cy.wait(2000) 
    cy.get('input[name="password"]').type('secret_sauce')

    // Click the login button
    cy.get('input[type="submit"]').click()
    cy.wait(2000)

    // Check if the title really is product
    cy.get('.title').should('contain', 'Products')
    cy.wait(2000)

    // Verify that items are sorted by Name (A -> Z)
    cy.get('.inventory_item_name').then(($items) => {
      const itemNames = $items.toArray().map(item => item.innerText)
      const sortedItemNames = [...itemNames].sort()
      expect(itemNames).to.deep.equal(sortedItemNames)
    })
  
    // Change sorting to Name (Z -> A)
    cy.get('.product_sort_container').select('za') 
    cy.wait(2000)  
    
    // Verify that items are sorted correctly (Z -> A)
    cy.get('.inventory_item_name').then(($items) => {
      const itemNames = $items.toArray().map(item => item.innerText)
      const sortedItemNames = [...itemNames].sort().reverse() 
      expect(itemNames).to.deep.equal(sortedItemNames)
    })
  })
})
