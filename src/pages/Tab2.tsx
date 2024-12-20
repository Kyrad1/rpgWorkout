import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import { useWorkoutContext, excercises } from '../context/WorkoutContext';
import ExerciseCard from '../components/excerciseCard';
import { useCharacter } from '../context/CharacterContext';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Tab2: React.FC = () => {
  const { weeklyPlan } = useWorkoutContext();
  const [selectedDay, setSelectedDay] = useState<string>('Monday');

  // Obtén el plan de entrenamiento para el día seleccionado
  const exercises = weeklyPlan[selectedDay] || [];
  const { character, setCharacter } = useCharacter(); // Extraer character y setCharacter del contexto

  // Función para sumar las estadísticas de los ejercicios
  const sumastats = () => {
    if (character?.stats) {
      let totalStrength = 0;
      let totalEndurance = 0;
      let totalAgility = 0;

      // Recorrer los ejercicios del día seleccionado y sumar sus estadísticas
      exercises.forEach(exercise => {
        totalStrength += exercise.stats.strength;
        totalEndurance += exercise.stats.endurance;
        totalAgility += exercise.stats.agility;
      });

      // Actualizar las estadísticas del personaje
      const updatedStats = {
        strength: character.stats.strength + totalStrength,
        endurance: character.stats.endurance + totalEndurance,
        agility: character.stats.agility + totalAgility,
      };

      // Usar setCharacter para actualizar el contexto con las nuevas estadísticas
      setCharacter({
        ...character,
        stats: updatedStats,
      });
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
          <ExerciseCard key={index} exerciseName={exercise.exerciseName} sets={exercise.sets} showCheck={true} onUpdateSets={(updatedSets) => {}} />
        ))}
      </IonContent>
      <IonButton color={'success'} onClick={sumastats}>Complete Routine</IonButton>
    </IonPage>
  );
};

export default Tab2;
