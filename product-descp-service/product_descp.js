module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //TO DO: add the pattern functions and describe the logic inside the function (Create a loop and search for the product based upon the id and return its URL and name)
    function productURL(msg, respond) {
        const productId = msg.productId;
        
        // Loop through the mock data to find the product based on the id
        for (let i = 0; i < mockData.length; i++) {
            if (mockData[i].product_id === productId) {
                const productURL = mockData[i].product_url;
                respond(null, { result: productURL });
                return;
            }
        }
        
        // If the product is not found
        respond(null, { result: ''});
    }

    // Define the pattern function for getting product name
    function productName(msg, respond) {
        const productId = msg.productId;
        
        // Loop through the mock data to find the product based on the id
        for (let i = 0; i < mockData.length; i++) {
            if (mockData[i].product_id === productId) {
                const productName = mockData[i].product_name;
                respond(null, { result: productName });
                return;
            }
        }
        
        // If the product is not found
        respond(null, { result: ''});
    }
}