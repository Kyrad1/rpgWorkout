import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonButton, IonIcon, IonInput } from '@ionic/react';
import { useWorkoutContext } from '../context/WorkoutContext';
import ExerciseCard from '../components/excerciseCard';
import './Tab1.css';
import { saveSharp } from 'ionicons/icons';
import '../context/CharacterContext';
import {excercises,Exercise} from  '../context/WorkoutContext';


const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const availableExercises = excercises.map((exercise) => exercise.exerciseName);



const Tab1: React.FC = () => {
  const { updateWorkoutPlan } = useWorkoutContext();
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [exercises, setExercises] = useState<{ exerciseName: string; sets: { series: number; reps: number; weight: number; completed: boolean }[] }[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<string | undefined>(undefined);
  const [selectedSeries, setSelectedSeries] = useState<number>(1);
  const [reps, setReps] = useState<number>(0); // Estado para reps
  const [weight, setWeight] = useState<number>(0); // Estado para weight

  // Funciones para manejar los cambios en los inputs de reps y weight
  const handleRepsChange = (e: CustomEvent) => {
    const value = e.detail.value ? parseInt(e.detail.value, 10) : 0;
    setReps(value);
  };

  const handleWeightChange = (e: CustomEvent) => {
    const value = e.detail.value ? parseInt(e.detail.value, 10) : 0;
    setWeight(value);
  };

  // Función para agregar un ejercicio
  const handleAddExercise = () => {
    if (selectedExercise) {
      const newSets = Array.from({ length: selectedSeries }, (_, i) => ({
        series: i + 1,
        reps: reps,        // Utiliza el valor de reps del input
        weight: weight,    // Utiliza el valor de weight del input
        completed: false,
      }));

      setExercises([
        ...exercises,
        {
          exerciseName: selectedExercise,
          sets: newSets,
        },
      ]);

      // Limpia los campos después de agregar el ejercicio
      setSelectedExercise(undefined);
      setSelectedSeries(1);
      setReps(0);
      setWeight(0);
    }
  };

  const handleSaveWorkout = () => {
    const updatedExercises: Exercise[] = exercises.map(exercise => {
      const foundExercise = excercises.find(e => e.exerciseName === exercise.exerciseName);
  
      if (foundExercise) {
        return {
          exerciseName: foundExercise.exerciseName,
          stats: foundExercise.stats, // Usamos las estadísticas del ejercicio
          sets: exercise.sets,        // Usamos las series seleccionadas
        };
      }
  
      return {
        exerciseName: exercise.exerciseName,
        stats: { strength: 0, endurance: 0, agility: 0 }, // Valor predeterminado
        sets: exercise.sets,
      };
    });
  
    updateWorkoutPlan(selectedDay, updatedExercises);
  };

  // Función para eliminar un ejercicio
  const handleDeleteExercise = (index: number) => {
    const updatedExercises = exercises.filter((_, i) => i !== index);
    setExercises(updatedExercises);
  };

  // Función para actualizar las series de un ejercicio
  const updateExerciseSets = (index: number, updatedSets: { series: number; reps: number; weight: number; completed: boolean }[]) => {
    const updatedExercises = [...exercises];
    updatedExercises[index].sets = updatedSets;
    setExercises(updatedExercises);
  };

   // Función para agregar un set con los mismos reps y weight que el primer set
    const addSet = (index: number) => {
    const updatedExercises = [...exercises];
    const newSeriesNumber = updatedExercises[index].sets.length + 1;
    
    // Añade un set con los valores de reps y weight del primer set
    updatedExercises[index].sets.push({
      series: newSeriesNumber,
      reps: updatedExercises[index].sets[0].reps, // Toma reps del primer set
      weight: updatedExercises[index].sets[0].weight, // Toma weight del primer set
      completed: false,
    });
    
    setExercises(updatedExercises);
  };

  const removeSet = (index: number) => {
    const updatedExercises = [...exercises];
    if (updatedExercises[index].sets.length > 1) {
      updatedExercises[index].sets.pop();
      setExercises(updatedExercises);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='Titulo'>
          <IonTitle>Workout Planner</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='selectEx'>
          <IonSelect value={selectedDay} onIonChange={(e) => setSelectedDay(e.detail.value)}>
            {daysOfWeek.map(day => (
              <IonSelectOption key={day} value={day}>{day}</IonSelectOption>
            ))}
          </IonSelect>
          
        </div>
        <div className='selectEx'>
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
        </div>
        
        {/* Inputs para reps y weight */}
        
        <div className='selectEx'>
          <p>Reps</p>
          <IonInput
            type="number"
            value={reps}
            onIonChange={handleRepsChange}
            placeholder="Reps"
          />
          <p>Weight</p>
          <IonInput
            type="number"
            value={weight}
            onIonChange={handleWeightChange}
            placeholder="Weight"
          />
        </div>
        <IonButton onClick={handleAddExercise} disabled={!selectedExercise}>
            Add Exercise
          </IonButton>

        {/* Lista de ejercicios agregados */}
        {exercises.map((exercise, index) => (
          <div key={index}>
            <ExerciseCard
              exerciseName={exercise.exerciseName}
              sets={exercise.sets}
              showCheck={false}
              onUpdateSets={(updatedSets) => updateExerciseSets(index, updatedSets)}
            />
            <div className='selectEx'>
              <IonButton color="danger" onClick={() => handleDeleteExercise(index)}>
                Delete
              </IonButton>
              <IonButton onClick={() => addSet(index)}>+ Series</IonButton>
              <IonButton onClick={() => removeSet(index)} disabled={exercise.sets.length <= 1}>
                - Series
              </IonButton>
            </div>
          </div>
        ))}
      </IonContent>
      <IonButton onClick={handleSaveWorkout} color='success'><IonIcon icon={saveSharp}></IonIcon>save</IonButton>
    </IonPage>
  );
};

export default Tab1;