import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? 'red' : 'black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
    background: ${(props) => (props.invalid ? '#ffd7d7' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {
  const [goalValue, setGoalValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setGoalValue(event.target.value);
  };

  const goalSubmitHandler = (event) => {
    event.preventDefault();
    if (goalValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const newGoal = { text: goalValue, id: Math.random().toString() };
    props.onAddGoal(newGoal);
  };

  return (
    <form onSubmit={goalSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label className='label'>Course Goal</label>
        <input type='text' className='input' onChange={goalChangeHandler} />
      </FormControl>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
