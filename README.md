![General Assembly's Logo](https://camo.githubusercontent.com/603ef5eae7d28900a9678ae96c6c60a9c72f8a059c328b28cf978df999cea1f8/68747470733a2f2f692e696d6775722e636f6d2f6c7a56493364382e706e67)
# SEI Project 02: WineTime
> *It's wine o'clock somewhere!*

### Table of Contents
- Project Overview
    - Team Members
- Goal
    - Technologies Used
- Approach Taken
- Challenges and Wins
    - Challenges
    - Wins
    - Bugs
- Future Enhancements 

--- 

# Project Overview
WineTime is a full stack application which allows a User to create a profile, login and add different wine records and reviews related to the existing wines to a database. The purpose is for wine-novices to research the main information regarding a specific wine (its name, its origin, its grape) and, by reading the reviews, potentially being positively influenced into buying or avoiding a wine. 
### Link to the deployed app: [WineTime](https://wineappsei64.herokuapp.com/)
![HomePage](/public/images/WineTime.png)

## Team Members
- Ailish McLaughlin - [GitHub](https://github.com/ailishmcl) | [LinkedIn](www.linkedin.com/in/ailish-mclaughlin)
- Elisabetta Maspero - [GitHub](https://github.com/emaspero) | [LinkedIn](https://www.linkedin.com/in/elisabetta-maspero/)

# Goal
The goal for this Project was for a Team of two students to build a web application from scratch using Express framework and subsequently to deploy the application on Heroku in order to make it live on the web. 
The application had to meet the following technical requirements:
##### User Resource and Authentication
- User must be able to create and edit a profile
- User must be able to sign up, login, logout and change password

##### Include two extra resources other than User
- User must be able to create and edit a resource
- User must be able to view a single resource and all the resources they created
- User must not be able to edit or delete other users' resources

## Technologies Used
- HTML and CSS
- Bootstrap 
- JavaScript and jQuery
- Node.js
- Express/Passport/Bcrypt
- Mongo DB/Mongoose
- Git/GitHub

# Approach Taken
##### Day 1
The first day was mainly dedicated to planning starting from setting up a Trello board, an ERD and some wireframes which made it easier to put the whole project into perspective and to gather a clearer idea on the steps to follow.
###### Trello
![Trello board screenshot picture](/public/images/trello-screenshot.png)
###### ERD (Entity Relationship Diagrams)
![ERD screenshot picture](/public/images/erd-screenshot.png)
###### Wireframes
![Wireframes pictures screenshot](/public/images/wireframes-screenshot.png)

We did also set up the skeleton of our application (server.js and, installation of all of the required dependencies, index controller/route and homepage view) via pair programming to make sure that we were both confident with adding extra features/resources individually as a second step.
Elisabetta created the models/controllers/routes/views for the Wine and the Review resources while Ailish tackled the authorization/authentication part setting the User model and the relevant models/controllers/views.

##### Day 2 and Day 3
For the majority of the time we did decide to work via pair programming as it facilitated our debugging process.
Together we did set up the outstanding relevant pages (public and private User profile pages) and tackled the intertwining process between models/controllers/views which, in the end, allowed us, for e.g., to display all of the reviews made by one User on the its specific profile page.

##### Day 4
The main focus for this last day was to debug and implement the function which allows the User to change its own password (while keeping that encrypted on the database) and to improve the styling of our application using a mixture of Bootstrap, CSS and JS.
On this day the database was also moved from local to remote and the app was deployed on Heroku.

# Challenges and Wins
## Challenges
As this was our first full-stack application project, the biggest challenge was the crucial role played by the precision that revolves around back-end coding. For e.g. while working on the "change password" feature, our code would work without giving us any errors, but the new password was not being sent to the database because we typed "req.body.password" instead of "req.body" in the related API. We also ended up spending a remarkable amount of time debugging our code on a daily basis. 
## Wins
- This was my first group project, managing to communicate on a daily basis, be organized and work together as a Team was a real win for me.

## Bugs
- Some of the buttons are not displayed correctly, they still do appear looking blue, rather then following our preferred CSS styling.

# Future Enhancements
- Users can upload pictures with reviews and wines and add their own profile picture
- Different levels of authorizations (e.g. only admin-users can add new wines)
- Users can select and save favorite users-profiles in a list
- Have a feed on the homepage showing recent activities (e.g. recently added reviews/vines)
- Star rating system and average wine-rating to display on the page based on the amount of reviews-ratings.