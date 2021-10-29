<div id="top"></div>

# M8_632110340


<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)
My Project is e-commerce website for woman who want to buy clothes. My website are collects various styles of clothing.
The Theme of website is model and minimal because I think that this theme can accessible and can make the good image of my website.

## Features

* Register
* Login
* Show detail product
* Add product to cart
* Delete product in cart
* Payment by Stripe API


### Built With

* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Bootstrap](https://getbootstrap.com)
* [React-Redux](https://react-redux.js.org/)

## Choose API

* [FaceBook login API](https://developers.facebook.com/products/facebook-login/)
* [Stripe API](https://stripe.com/th-us)
* [Longdo Map API](https://map.longdo.com/docs/)


<!-- GETTING STARTED -->
## Getting Started the project
1. Clone the repo

        gh repo clone tharinee340/M8_632110340
        
2. Frontend

         $ cd client npm install
         $ npm start
    
3. Backend

         $ cd server npm install
         $ node server.js
   You can run the server with nodemon
   
         $ npx nodemon server.js
      

## API Authentication

JWT : I choose JSON Web Token because it is easy to use and understand. When user login to my website, it will send the token to user in the localstorage. It will check that
this user is authentication or not because some path is for the admin, so if you not admin tou cannot accessible.






<!-- CONTACT -->
## Contact

FaceBook: Tharinee Thuengnok

E-mail: tharinee_t@elearning.cmu.ac.th

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: images/screenshot.png
