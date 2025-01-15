// index.js (Ensure the file has the .js extension)
exports.handler = async (event) => {
    // Extracting numbers from the event input
    const number1 = event.number1;
    const number2 = event.number2;

    // Check if both numbers are provided
    if (typeof number1 === 'undefined' || typeof number2 === 'undefined') {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Both numbers are required' }),
        };
    }

    // Perform addition
    const sum = number1 + number2;

    // Return the result
    return {
        statusCode: 200,
        body: JSON.stringify({ result: sum }),
    };
};

//{
//   "number1": 5,
//   "number2": 10
// // }
