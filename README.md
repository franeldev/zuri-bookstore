# zuri-bookstore
NodeJS Bookstore App 

**FEATURES**
* Store owner can:
   * Create Books
   * Fetch Books
   * Updates Books
   * Delete Books
   * Search for Books

**TODO**
* Set up mongoose
* Create schema
* Create routes

**Book**
* title
* author
* category
* purchaseCount
* imageUrl
* description


**TODO-PART2**
* Create routes
* Update Folder Structure
* Install nodemon

src
  |-- controllers => contains the request & response functions
  |-- database => database (in our case, we are using mongoose) setup and connection
  |-- models => database schema file
  |-- routes => application routes
  |__ index.js => entry file
views
tests
config
services
middlewares
utilities
helpers