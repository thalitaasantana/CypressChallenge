describe('API Test', () =>{
    //Call the request and validates sucess (200)
    it('Should print products rated higher than 4', () => {
        cy.request('https://fakestoreapi.com/products').then((response) => {
            expect(response.status).to.eq(200)

            // Print sucess
            cy.log('SUCESS OF REQUEST (200)')

            // After reading the response, find all the items with the property "electronics"
            const electronics = response.body.filter(item => item.category === 'electronics')

            cy.wait(2000)
            // Compares to see if the objects have the selected category
            electronics.forEach(item => {
                expect(item).to.have.property('category', 'electronics')
            });

            cy.wait(2000)
            // Count the number of times that the property "eletronics" appears
            cy.log(`Number of objects in category "electronics": ${electronics.length}`)

            // If you want it to also appear on the console 
            //console.log('Number of objects in category "electronics":', electronics.length)

            // Check if the number of these objects is greater than 4 and saving it in an array
            const topRated = electronics.filter(item => item.rating && item.rating.rate > 4)
            
            // Print the objects in the Cypress Test Runner
            cy.log(`There are ${topRated.length} products with a rating higher than 4`)
            cy.wait(2000)
            topRated.forEach(item => {
                cy.log(`Product : ${item.title}`)
                cy.log(`Category: ${item.category}`)
                cy.log(`Rate: ${item.rating.rate}`)
              })

            // Print the objects in the console
            console.log('Objects found with a rating higher than 4:', topRated)
        }) 
    }) 
})