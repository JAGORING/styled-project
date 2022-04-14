import React, { useState } from 'react';

import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'react!', id: 'G1' },
    { text: 'finish the course', id: 'G2' },
  ]);

  const addGoalHandler = (newGoal) => {
    setCourseGoals((prevGoals) => {
      return [newGoal, ...prevGoals];
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id='goals'>{content}</section>
    </div>
  );
};

export default App;
