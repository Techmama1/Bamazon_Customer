CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
Id INTEGER NOT NULL AUTO_INCREMENT,
item_id INT NOT NULL,
product_name VARCHAR (50),
department_name VARCHAR (50),
price DECIMAL (10,2) NULL,
stock_quantity INT default 0,
PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "stove", "applicances", 300, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "dishwasher", "appliances", 325, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "couch", "furniture", 285, 3);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "desk", "furniture", 100, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "soccer ball", "sports", 10, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "burton snowboard", "sports", 200, 8);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "echo dot", "technology", 25, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "I phone 8", "technology", 125, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Drone", "technology", 85, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "swag cycle pro", "technology", 375, 5);

SELECT * FROM products

DELETE FROM products WHERE FROM stock_quantity

