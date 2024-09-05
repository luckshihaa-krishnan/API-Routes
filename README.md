## API ROUTES

#### Published URL : https://luckshihaakrishnan-apiroutes.onrender.com

This application was the first project I did in the course and the main focus in this project is using API (Application Programming Interface) routes. While using API, I added some HTTP (Hypertext Transfer Protocol) request methods such as GET, POST, PUT and DELETE in order to view, add, update or delete IDs. The data in this application contains unique IDs, listng urls, name, summary, etc.

The command, 'node server.js', is used to run the application as the main is server.js in package.json. In the terminal, it will display a message such as what port it will be. In this application, it will be running on port 8080. To see the application running, type 'localhost:8080' in the browser. Since this application has many possible routes, we can do localhost:8080/api/listings or localhost:8080/api/listings/:id to view all the listings or a specific ID.

  The possible routes are:

  GET: <br/>
  &nbsp; &nbsp; &nbsp; - /  <br/>
  &nbsp; &nbsp; &nbsp; - /api/listings <br/>
  &nbsp; &nbsp; &nbsp; - /api/listings/:id  <br/>
  POST: <br/>
  &nbsp; &nbsp; &nbsp; - /api/listings <br/>
  PUT: <br/>
  &nbsp; &nbsp; &nbsp; - /api/listings/:id <br/>
  DELETE: <br/>
  &nbsp; &nbsp; &nbsp; - /api/listings/:id  <br/>
