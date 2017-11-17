# Nutrition Day Calendar
by: Jimmy Li

## Challenge Overview
* Displays a list of foods that the user has eaten in a clear way. Include the calorie count.
* Display a calculation of the total nutrition values for the day.
* Add minimal support for adding and removing food items.
* Create a responsive interface.
* Use different meals to segment food (Breakfast, Lunch, Dinner, Snacks, etc).
* Handle more than 1 day.
* Include other nutrition info (macro/micro nutrients).
* Ability to track exercise.

### Example State Shape
```
{
  currentDate: '11-18-2017',
  goal: 1800,
  calendar: {
    '11-17-2017': {
      breakfast: {
        "chicken": 200,
        "pizza": 100
      },
      lunch: {
        "salad": 200,
        "pepsi": 100
      },
      dinner: {
        "ramen": 200,
        "beer": 150
      },
      snacks: {
        "chips": 100
      },
      exercise: {
        "running": 100,
        "push ups": 200
      }
    },
    '11-18-2017': {
      breakfast: ...
      lunch: ...
      dinner: ...
      exercise: ...
    }
  }
}```
