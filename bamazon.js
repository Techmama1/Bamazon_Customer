var mysql = require('mysql');
var inquirer = require('inquirer');
var cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "bamazon_db"
});

// connecting to database: gives a call back, if no error, then terminal will indicate, "connected as id, and we can move on to the next function"
connection.connect(function (err) {
    console.log("connected as id");
    // run the buyProduct function after connection is made
    buyProduct();
});

// function prompts the user for the action they should take
// query the database for the products being sold
function buyProduct() {
    connection.query("SELECT * FROM products", function (err, res) {

        if(err)throw err;
        // Log all results of the SELECT statement   
        // once items are logged, prompt the user to choose which ID they would like to buy
        
        inquirer.prompt([
            {
                name: "choice",
                type: "input",
                choices: function (value) {
                    var choiceArray = [];
                    for (var i = 0; i < res.length; i++) {
                        choiceArray.push(res[i]);
                    }
                   console.table(choiceArray);
                },
                message: "What is the ID of the item you would like to purchase?"
            },
           
        ]).then(function (answer) {
        
                quantity(answer);
                // get the information on the chosen item
                // var chosenItem;
                // for (var i = 0; i < results.length; i++) {
                //     if (results[i].item_id === answer.choice) {
                //         chosenItem = results[i];
                //     }
                // }
                // determine if there is enough stock_quantity available
              // if (chosenItem.stock_quantity < parseInt(answer.stock_quantity)) {
                    // if chosen item from the stock_quantity is less than the amount remaing in the stock_quantity, then you can purchase the desired amount
                //     connection.query(
                //         "UPDATE products SET ? WHERE ?",
                //         [
                //             {
                //                 stock_quantity: answer.stock_quantity
                //             },
                //             {
                //                 id: chosenItem.id
                //             }
                //         ],
                //         function (error) {
                //             if (error) throw err;
                //             console.log("Purchase was successful!");
                //             start();
                //         }
                //     );
                // }
                // else {
                    // if the desired amount is more than the stock_quantity on hand, then the purchase will be unsuccessful, which should bring you back to the buyProduct function, to begin choosing again
                    // console.log("The amount you requested exceeds our stock level, please re-order");
                    // buyProduct();
            //     }
            
             });
        });  
    }

    function quantity(answer) {
        connection.query("SELECT stock_quantity FROM products WHERE Id = " + answer.choice, function (err, res) {

            if(err)throw err;
           
            // Log all results of the SELECT statement   
            // once items are logged, prompt the user to choose which how many units they will buy
            
            inquirer.prompt([
                {
                    name: "choice",
                    type: "input",
                    message: "How many units of the item would you like to purchase?"
                },
               
            ]).then(function (amount) {
                   
                    //determine if there is enough stock_quantity available
                  if (parseInt(amount.choice) <= parseInt(res[0].stock_quantity)) {
                        // if chosen item from the stock_quantity is less than or equal to the amount remaining in the stock_quantity, then you can purchase the desired amount
                        
    //WORKS UP TO HERE AND BELOW with the else statment           
                        console.log('there are enough you can buy')

                        connection.query(
                            "UPDATE products SET ? WHERE ?",
                            [
                                {
                                    // stock_quantity: Quantity
                                },
                                {
                                    id: answer.choice
                                }
                            ],
                            function (error) {
                                if (error) throw err;
                                console.log("Purchase was successful!");
                                start();
                            }
                        );
                    }
         
                            // })
                         
                     

                        else {
                        // if the desired amount is more than the stock_quantity on hand, then the purchase will be unsuccessful, which should bring you back to the buyProduct function, to begin choosing again
                        console.log("The amount you requested exceeds our stock level, please re-order");
                        buyProduct();
                    }
                
                 });
            });  
       

    }
            // Subract choice from stock_quantity
            // var newQauntity = amount.choice - res[0].stock_quantity
            // console.log(amount.choice[0].stock_quantity + 'items purchased');

