// Tab1.tsx
import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import { useWorkoutContext } from '../context/WorkoutContext';
import ExerciseCard from '../components/excerciseCard';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const availableExercises = ['Push-Ups', 'Pull-Ups', 'Squats'];

const Tab1: React.FC = () => {
  const { updateWorkoutPlan } = useWorkoutContext();
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [exercises, setExercises] = useState<{ exerciseName: string; sets: { series: number; reps: number; weight: number; completed: boolean }[] }[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<string | undefined>(undefined);

  const handleAddExercise = () => {
    if (selectedExercise) {
      setExercises([
        ...exercises,
        {
          exerciseName: selectedExercise,
          sets: [{ series: 1, reps: 10, weight: 0, completed: false }],
        },
      ]);
      setSelectedExercise(undefined);
    }
  };

  const handleSaveWorkout = () => {
    updateWorkoutPlan(selectedDay, exercises);
  };

  const updateExerciseSets = (index: number, updatedSets: { series: number; reps: number; weight: number; completed: boolean }[]) => {
    const updatedExercises = [...exercises];
    updatedExercises[index].sets = updatedSets;
    setExercises(updatedExercises);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Workout Planner</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSelect value={selectedDay} onIonChange={(e) => setSelectedDay(e.detail.value)}>
          {daysOfWeek.map(day => (
            <IonSelectOption key={day} value={day}>{day}</IonSelectOption>
          ))}
        </IonSelect>

        <IonSelect
          placeholder="Select Exercise"
          value={selectedExercise}
          onIonChange={(e) => setSelectedExercise(e.detail.value)}
        >
          {availableExercises.map((exercise) => (
            <IonSelectOption key={exercise} value={exercise}>
              {exercise}
            </IonSelectOption>
          ))}
        </IonSelect>

        <IonButton onClick={handleAddExercise} disabled={!selectedExercise}>
          Add Exercise
        </IonButton>

        {exercises.map((exercise, index) => (
          <ExerciseCard
            key={index}
            exerciseName={exercise.exerciseName}
            sets={exercise.sets}
            onUpdateSets={(updatedSets) => updateExerciseSets(index, updatedSets)}
          />
        ))}

        <IonButton onClick={handleSaveWorkout}>Save Workout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
