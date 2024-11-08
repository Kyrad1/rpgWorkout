// ExerciseCard.tsx
import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonModal, IonButton, IonItem, IonLabel, IonInput, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

interface Set {
  series: number;
  reps: number;
  weight: number;
  completed: boolean;
}

interface ExerciseCardProps {
  exerciseName: string;
  sets: Set[];
  onUpdateSets: (updatedSets: Set[]) => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exerciseName, sets, onUpdateSets }) => {
  const [showModal, setShowModal] = useState(false);
  const [editableSets, setEditableSets] = useState<Set[]>([...sets]);

  const openModal = () => {
    setEditableSets([...sets]); // Clona los sets actuales cuando abre el modal
    setShowModal(true);
  };

  const handleSave = () => {
    onUpdateSets(editableSets); // Guarda los cambios al cerrar el modal
    setShowModal(false);
  };

  const updateSetField = (index: number, field: 'reps' | 'weight', value: number) => {
    const updatedSets = [...editableSets];
    updatedSets[index] = { ...updatedSets[index], [field]: value };
    setEditableSets(updatedSets);
  };

  return (
    <>
      {/* Card que el usuario pincha */}
      <IonCard onClick={openModal}>
        <IonCardHeader>
          <IonCardTitle>{exerciseName}</IonCardTitle>
        </IonCardHeader>
      </IonCard>

      {/* Modal de edición */}
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Edit {exerciseName}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {editableSets.map((set, index) => (
            <IonItem key={index}>
              <IonLabel>Set {index + 1}</IonLabel>

              {/* Campo de Repeticiones */}
              <IonInput
                type="number"
                value={set.reps}
                placeholder="Reps"
                onIonChange={(e) => updateSetField(index, 'reps', parseInt(e.detail.value!, 10))}
              />

              {/* Campo de Peso */}
              <IonInput
                type="number"
                value={set.weight}
                placeholder="Weight (kg)"
                onIonChange={(e) => updateSetField(index, 'weight', parseInt(e.detail.value!, 10))}
              />
            </IonItem>
          ))}

          {/* Botón para Guardar */}
          <IonButton expand="block" onClick={handleSave}>
            Save Changes
          </IonButton>

          {/* Botón para Cancelar */}
          <IonButton expand="block" color="medium" onClick={() => setShowModal(false)}>
            Cancel
          </IonButton>
        </IonContent>
      </IonModal>
    </>
  );
};

export default ExerciseCard;
