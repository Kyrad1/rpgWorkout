// Tab2.tsx
import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import { useWorkoutContext } from '../context/WorkoutContext';
import ExerciseCard from '../components/excerciseCard';
import { useCharacter } from '../context/CharacterContext';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Tab2: React.FC = () => {
  const { weeklyPlan } = useWorkoutContext();
  const [selectedDay, setSelectedDay] = useState<string>('Monday');



  // Obtén el plan de entrenamiento para el día seleccionado
  const exercises = weeklyPlan[selectedDay] || [];
  const { character, setCharacter } = useCharacter(); // Extraer character y setCharacter del contexto


  const sumastats = () => {
    if (character?.stats) {
      character.stats.agility += 3;
      character.stats.endurance += 4;
      character.stats.strength += 5;
    }
  };

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
          <ExerciseCard key={index} exerciseName={exercise.exerciseName} sets={exercise.sets}   showCheck= {true} onUpdateSets={(updatedSets) => {}} />
        ))}
      </IonContent>
      <IonButton color={'success'} onClick={sumastats} >complete routine</IonButton>
    </IonPage>
  );
};

export default Tab2;
