# Nutrition Day Calendar
by: Jimmy Li

## Running the App
* `npm install`
* `npm start`

  or
* `npm install`
* `webpack -w`
* then copy full path for index.html and paste into the browser or open index.html from the directory

## Challenge Overview
* Displays a list of foods that the user has eaten in a clear way. Include the calorie count.
* Display a calculation of the total nutrition values for the day.
* Add minimal support for adding and removing food items.
* Create a responsive interface.
* Use different meals to segment food (Breakfast, Lunch, Dinner, Snacks, etc).
* Handle more than 1 day.
* Include other nutrition info (macro/micro nutrients).
* Ability to track exercise.

## Functionality
* Navigate through dates
* Add foods to different meals of the day
* Calorie counter displayed at the top
* Add exercises
* Add/Remove items from the lists

## Component Hierarchy
* App
  * Nutrition Day Calendar
    * Date Header
    * Calorie Counter
      * Goal Calorie Form
    * Meal Tracker
      * Tracker List
        * Tracker List Item

## Tools
* React / ReactDOM
* Redux / React-Redux
* Redux Logger
* Webpack / Webpack Dev Server
* JavaScript
* Babel

## Notes
### Design
For the design of the app, I used Redux to keep track of a global state. Components who are subscribed to the store will receive updates and re-render accordingly.

As for the new food form, I decided to use an inline form rather than a modal. The reason behind this is so that it doesn't affect the flow of the app. It also allows the user the interact with the rest of the app while making changes.

For the color scheme of the app, I took some inspiration from MyFitnessPal's website and mobile app.

Flexbox was used liberally to space things out and make the UI look intuitive and pretty.

## Debugging and Testing
For debugging and testing, I made use of the React Dev Tools chrome extension that was available while using the debugger and logging to the console if needed. Redux-Logger also helped with keeping track of the current state of the store.

## Challenges
One of the challenges I ran into was deciding how the overall state shape should look like. It took me a while to settle on what I had, but I took into consideration where users added multiple food/exercise to each section (i.e. breakfast, lunch, etc) and the ability to add foods with the same name. That way when the user removes a food/exercise, it won't remove all the ones that has the same name.

### Future Directions
* Make use of a nutrition API to get additional nutrition info
* Add calendar view to easily select a date
