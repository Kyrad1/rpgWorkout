// Tab2.tsx
import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonSelect, IonSelectOption } from '@ionic/react';
import { useWorkoutContext } from '../context/WorkoutContext';
import ExerciseCard from '../components/excerciseCard';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Tab2: React.FC = () => {
  const { weeklyPlan } = useWorkoutContext();
  const [selectedDay, setSelectedDay] = useState<string>('Monday');

  // Obtén el plan de entrenamiento para el día seleccionado
  const exercises = weeklyPlan[selectedDay] || [];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Workout View</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSelect value={selectedDay} onIonChange={(e) => setSelectedDay(e.detail.value)}>
          {daysOfWeek.map(day => (
            <IonSelectOption key={day} value={day}>{day}</IonSelectOption>
          ))}
        </IonSelect>

        {/* Muestra cada ejercicio programado para el día seleccionado */}
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exerciseName={exercise.exerciseName} sets={exercise.sets} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
