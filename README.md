# zuri-bookstore
NodeJS Bookstore App 

**FEATURES**
* Store owner can:
   * Create Books
   * Fetch Books
   * Updates Books
   * Delete Books
   * Search for Books

**TODO_DAY1**
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


**TODO-DAY2**
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

**TODO-DAY3**
* Schema Validation
* Search Feature
  
  Setting the category to a range of values set for validation. It can be enforce on the schema by adding a property called, Enum:
  
  Categories: fiction, non-fiction, comics, others

  **TODO-DAY4**
  * Register route
    * Create a new user
    * Hash user's password 
    * Create a token for user
    * Send token to a user


  * Login route
    * Checkk if user exists
    * Compare user's password with stored hash
    * Create a token
    * Send token to user
  * authenticate book route (A user not login wont have access to the book route) 
  * role-based authentication
    * SEEDING
      <p>Seeding is when you input your some data into your application before hands. It means you do not need to create a route to create those document in your database, you just need to call a particular function.</p>
      The reason we are using seeding is because we do not want to register people with admin account from the register route. We just want admin account to be created by default in our application
      
 **TODO-DAY5**
  * Use environment variables
    * Refactor code