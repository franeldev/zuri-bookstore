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

**TODO-PART3**
* Schema Validation
* Search Feature
  
  Setting the category to a range of values set for validation. It can be enforce on the schema by adding a property called, Enum:
  
  Categories: fiction, non-fiction, comics, others