import ExerciseCard from './excerciseCard';

const WorkoutPlan = () => {
  const exerciseSets = [
    { series: 1, reps: 10, weight: 32, completed: false },
    { series: 2, reps: 10, weight: 32, completed: false},
    { series: 3, reps: 10, weight: 32, completed: false }
  ];

  return (
    <ExerciseCard exerciseName="Push-Ups" sets={exerciseSets} />
  );
};

export default WorkoutPlan;
