# Nutrition Day Calendar
by: Jimmy Li

## Running the App
* `npm install`
* `npm start`

  or

* `webpack -w`
* then copy full path for index.html and paste into the browser

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


## Debugging and Testing

## Challenges


### Future Directions
* Make use of a nutrition API to get additional nutrition info
* Add calendar view
