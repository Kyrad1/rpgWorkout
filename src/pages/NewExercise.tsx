// pages/NewExercise.tsx
import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonInput, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const availableExercises = ['Push-Ups', 'Pull-Ups', 'Squats'];

const NewExercise: React.FC = () => {
  const history = useHistory();
  const [selectedExercise, setSelectedExercise] = useState<string | undefined>(undefined);
  const [reps, setReps] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const handleAddExercise = () => {
    // Aquí podrías agregar lógica para guardar el ejercicio en algún contexto o estado global
    console.log("Ejercicio:", selectedExercise, "Reps:", reps, "Peso:", weight);

    // Navegar de regreso a la pantalla principal
    history.push('/tab1');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Exercise</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
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
        
        <IonInput
          type="number"
          value={reps}
          onIonChange={(e) => setReps(Number(e.detail.value))}
          placeholder="Reps"
        />
        <IonInput
          type="number"
          value={weight}
          onIonChange={(e) => setWeight(Number(e.detail.value))}
          placeholder="Weight"
        />
        
        <IonButton expand="block" onClick={handleAddExercise} disabled={!selectedExercise}>
          Add Exercise
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default NewExercise;
