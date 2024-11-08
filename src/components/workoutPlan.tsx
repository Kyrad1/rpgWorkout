// WorkoutPlan.tsx
import React from 'react';
import ExerciseCard from './excerciseCard';

const WorkoutPlan = () => {
  const exerciseSets = [
    { series: 1, reps: 15, weight: 32, completed: true }
    
  ];

  // Función vacía para cumplir con los props requeridos
  const handleUpdateSets = (updatedSets: { series: number; reps: number; weight: number; completed: boolean }[]) => {
    // Aquí puedes manejar el cambio si es necesario o dejarlo vacío
    console.log('Updated sets:', updatedSets);
  };

  return (
    <ExerciseCard exerciseName="Push-Ups" sets={exerciseSets} onUpdateSets={handleUpdateSets}  showCheck/>
  );
};

export default WorkoutPlan;
