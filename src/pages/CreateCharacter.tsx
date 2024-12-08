// pages/CreateCharacter.tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonSelect, IonSelectOption, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useCharacter } from '../context/CharacterContext';

const CreateCharacter: React.FC = () => {
  const history = useHistory();
  const { setCharacter } = useCharacter(); // Use the context to store the character

  const [name, setName] = useState<string>('');
  const [selectedClass, setSelectedClass] = useState<'Warrior' | 'Tank' | 'Thief'>('Warrior');
  const [selectedGender, setSelectedGender] = useState<'Male' | 'Female' | 'Other'>('Male'); // New gender state

  const getClassStats = (className: string) => {
    const stats: any = {
      Warrior: { strength: 10, endurance: 5, agility:2 },
      Tank: { strength: 5, endurance: 10, agility: 2 },
      Thief: { strength: 5, endurance: 2, agility: 10},
    };
    return stats[className];
  };

  const handleCreateCharacter = () => {
    if (name.trim() === '') {
      alert('Please enter a name!');
      return;
    }

    const newCharacter = {
      name,
      class: selectedClass,
      gender: selectedGender, // Include gender in the character object
      stats: getClassStats(selectedClass),
    };

    setCharacter(newCharacter); // Save the character to the context
    history.push('/tab3'); // Navigate to the Tab 3 where the stats will be shown
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Your Character</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonLabel>Enter your character's name:</IonLabel>
        <IonInput value={name} onIonChange={(e) => setName(e.detail.value!)} placeholder="Character Name" />

        <IonLabel>Select your starter character's class:</IonLabel>
        <IonSelect value={selectedClass} onIonChange={(e) => setSelectedClass(e.detail.value)}>
          <IonSelectOption value="Warrior">Warrior</IonSelectOption>
          <IonSelectOption value="Tank">Tank</IonSelectOption>
          <IonSelectOption value="Thief">Thief</IonSelectOption>
        </IonSelect>

        <IonLabel>Select your character's gender:</IonLabel>
        <IonSelect value={selectedGender} onIonChange={(e) => setSelectedGender(e.detail.value)}>
          <IonSelectOption value="Male">Male</IonSelectOption>
          <IonSelectOption value="Female">Female</IonSelectOption>
          <IonSelectOption value="Other">Other</IonSelectOption>
        </IonSelect>

        <IonButton onClick={handleCreateCharacter} expand="full">Create Character</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CreateCharacter;
