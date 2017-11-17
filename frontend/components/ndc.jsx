import React from 'react';
import DateHeaderContainer from './date_header/date_header_container';
import CalorieCounterContainer from './calorie_counter/calorie_counter_container';
import MealTrackerContainer from './meal_tracker/meal_tracker_container';

const NutritionDayCalendar = () => {
  return (
    <div className="day-calendar">
      <h1>Nutrition Day Calendar</h1>
      <DateHeaderContainer />
      <CalorieCounterContainer />
      <MealTrackerContainer />
    </div>
  );
};

export default NutritionDayCalendar;
