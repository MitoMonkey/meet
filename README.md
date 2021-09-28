# Project Name

> Meet App
A serverless, progressive web application (PWA) allowing users to  
* view a list of events
* search for a city and get a list of events hosted in that city
* view two charts - one that shows how many events will take place in that city on upcoming days, and another
that visualizes the popularity of event genres in the form of a pie chart.

![screenshot](./app_screenshot.png)

## Features
* Filter events by city. 
* Show/hide event details. 
* Specify number of events.
* Use the app also when offline (with the help of a service worker)
* Fully responsive
* Add an app shortcut to the home screen. 
* View a chart showing the number of upcoming events by city.
* Alert system using an OOP approach to show information to the
user.

## Built With
Created using React following a test-driven development (TDD) approach (coverage rate >= 90%).
App is according to Lighthouse’s PWA checklist (https://developers.google.com/web/tools/lighthouse/)

- Major languages: Javascript
- Frameworks: React (CRA)
- Technologies used
* React Bootstrap for styling
* axios (async/await) for AJAX
* recharts to display charts
* Google Calendar API (and OAuth2 authentication) to fetch upcoming events
* Serverless function hosted on AWS
* Puppeteer (end-to-end tests)
* Cucumber (acceptance testing)

The application itself is also hosted online (gh-pages) to make it shareable and installable. 

## Live Demo

[Live Demo Link](https://MitoMonkey.github.io/meet)

## CRA Usage
* npm start
Starts the development server.
	
* npm run build
Bundles the app into static files for production.
	
* npm test
Starts the test runner.
	
* npm run eject
Removes CRA and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!

### Run tests

### Deployment



## Author:
👤 **Mito.this**
- GitHub: [@MitoMonkey](https://github.com/MitoMonkey/)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/michael-flohrsch%C3%BCtz-8a58321b3/)

Created during the Fullstack Webdevelopment course @CareerFoundry


Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).