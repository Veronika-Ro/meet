# meetUp App

## Objective

To build a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.

## Context

Serverless and PWAs have grown in popularity over the last few years, and they’re both
considered to be the future of web development. By combining these two concepts, your app
will not only work as a normal web application, but it will also reap the benefits of both
serverless architecture and PWAs:

- Serverless: No backend maintenance, easy to scale, always available, no cost for idle
time.
- PWAs: Instant loading, offline support, push notifications, “add to home screen” prompt,
responsive design, and cross-platform compatibility.

For this app, I’ll be using a TDD approach, where you write tests before writing the actual
functionality for your app in code. Writing tests forces you to focus on the requirements of your
application before jumping into the code. TDD relies on the repetition of a very short
development cycle, allowing you to get immediate feedback and deliver high-quality code.

## Features and Scenarios

### FEATURE 1: FILTER EVENTS BY CITY 

(As a user
I should be able to “filter events by city”
So that I can see the list of events that take place in that city)

**Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.**

- Given user hasn’t searched for any city
- When the user opens the app
- Then the user should see a list of all upcoming events

**Scenario 2: User should see a list of suggestions when they search for a city.**

- Given the main page is open
- When user starts typing in the city textbox
- Then the user should see a list of cities (suggestions) that match what they’ve typed

**Scenario 3: User can select a city from the suggested list.**

- Given the user was typing “Berlin” in the city textbox. And the list of suggested cities is showing
- When the user selects a city (e.g., “Berlin, Germany”) from the list
- Then their city should be changed to that city (i.e., “Berlin, Germany”). And the user should receive a list of upcoming events in that city

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

(As a user
I should be able to “open/hide and event's details”
So that I can open the event's details, see more information about the event and close the details )

**Scenario 1: An event element is collapsed by default**

- Given the user has not expanded an event element
- When the user is on the events page
- Then the user will see the collapsed event elements

**Scenario 2: User can expand an event to see its details**

- Given the user has not expanded an event element
- When the user is on the events page
- Then the user will be able to expand an event to see its details when clicking on the event

**Scenario 3: User can collapse an event to hide its details**

- Given the user has expanded an event element
- When the user is on the events page
- Then the user will be able to hide an event's details when clicking on the event

### FEATURE 3: SPECIFY NUMBER OF EVENTS

(As a user
I should be able to “see the number of events”
So that I can understand how many events are displayed at the moment)

**Scenario 1: When user hasn’t specified a number, 32 is the default number**

- Given the main page is open
- When the user looks at the number of the events displayed
- Then the number of events the user will be able to see is 32

**Scenario 2: User can change the number of events they want to see**

- Given the main page is open
- When the user selects a different number of events to be displayed at the top of the page
- Then the user will be able to see the selected number of events

### FEATURE 4: USE THE APP WHEN OFFLINE

(As a user
I should be able to “use the app when I am offline”
So that I can use the app at the time that suits me, even if I don't have internet at that moment)

**Scenario 1: Show cached data when there’s no internet connection**

- Given the data has been cached
- When the user has no internet connection
- Then the user will be able to see the cached data

**Scenario 2: Show error when user changes the settings (city, time range)**

- Given the user has no internet connection
- When the user is changing the filters for city/time range/etc.
- Then the user will be able to see the error message

### FEATURE 5: DATA VISUALIZATION

(As a user
I should be able to “see data visualization”
So that I can easily see all the relevant data represented conveniently in a chart)

**Scenario 1: Show a chart with the number of upcoming events in each city**

- Given the user is on the main page
- When the user is selecting a chart icon
- Then the user will be able to see a chart with the number of upcoming events in each city

## Technical Requirements

- The app must be a React application.
- The app must be built using the TDD technique.
- The app must use the Google Calendar API and OAuth2 authentication flow.
- The app must use serverless functions (AWS lambda is preferred) for the authorization
server instead of using a traditional server.
- The app’s code must be hosted in a Git repository on GitHub.
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera,
as well as on IE11.
- The app must display well on all screen sizes (including mobile and tablet) widths of
1920px and 320px.
- The app must pass Lighthouse’s PWA checklist.
- The app must work offline or in slow network conditions with the help of a service
worker.
- Users may be able to install the app on desktop and add the app to their home screen
on mobile.
- The app must be deployed on GitHub Pages.
- The API call must use React axios and async/await.
- The app must implement an alert system using an OOP approach to show information to
the user.
- The app must make use of data visualization (recharts preferred).
- The app must be covered by tests with a coverage rate >= 90%.
- The app must be monitored using an online monitoring tool.
