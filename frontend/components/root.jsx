import React from 'react';
import { Provider } from 'react-redux';
import NutritionDayCalendar from './ndc';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <NutritionDayCalendar />
    </Provider>
  );
};

export default Root;
