module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions


    //TO DO: add the pattern functions and describe the logic inside the function (Create a loop and search for the product based upon the id and return its price)

    // Add the pattern and its corresponding function
    this.add('role:product,cmd:getProductPrice', productPrice);
    
    // Define the pattern function for getting product price
    function productPrice(msg, respond) {
        const productId = msg.productId;
     
    // Loop through the mock data to find the product based on the id
        for (let i = 0; i < mockData.length; i++) {
            if (mockData[i].product_id === productId) {
                const productPrice = mockData[i].price;
                respond(null, { result: productPrice });
                return;
            }
        }
     
    // If the product is not found
        respond(null, { result: ''});
    }
}