function sales(carsSold) {
    // create empty object to store the accumulated sales
    let totals = {};

    // loop through carSold 
    // object destructuring for easy access
    carsSold.forEach(({make, price}) => {
        if (totals[make]) { // check if make exist in the total obj
            totals[make] += price; 
        } else {
            totals[make] = price;
        }
        
    });

    return totals;
}

module.exports = sales;
