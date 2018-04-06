# News Website

This application involves building a simple web application which fetches news articles from an external api vendor and display them in web application

### Tech Stack
* Backend - Node.js
* Frontend - React
* Database - lowdb

### Application Description
* This web application allows user to login(**username: xun, password: xun**)
* Allow user to choose 5 news sources from 134 news sources and display the top 10 articles
* Displayed news sources as tiles/links in web application and clicking on them will navigate to a screen which shows the top 10 articles. 
* It allows the user to save articles and enabled a button which allows the user to look at the saved articles (Bonus-Points)
* The user must be able to choose 5 news sources from the 134 news sources (Bonus points).

### Screens
1. Login screen.
2. Home screen with a button to add 5 sources from all news sources, a button to view saved articles and another button to view his own selected sources
3. My sources screen with 5 selected sources as tiles/links, a button goes back to previous screen
4. Top 10 articles screen to that source with a save button for each article
5. Saved articles screen, displaying articles details which user saved.

## Run the application

### Installation and Running
1. check **node.js** and **npm** is setup in your computer.  
```
node -v
npm -v
```
* [install node.js](https://nodejs.org/en/download/package-manager/)
* [install npm](https://docs.npmjs.com/getting-started/installing-node)

2. Clone project
```
git clone https://github.com/XunPeng715/interview-project.git
cd  interview-project
npm install
```
2. Start node.js server, the node.js server will run on localhost:3100
```
node server.js
```
3. start react, the react server will run on localhost:3000
```
npm start
```
4. Open browser and go to localhost:3000 and login(**username: xun, password: xun**)
