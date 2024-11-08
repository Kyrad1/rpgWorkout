// pages/CreateCharacter.tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonSelect, IonSelectOption, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useCharacter } from '../context/CharacterContext';

const CreateCharacter: React.FC = () => {
  const history = useHistory();
  const { setCharacter } = useCharacter(); // Use the context to store the character

  const [name, setName] = useState<string>('');
  const [selectedClass, setSelectedClass] = useState<'Warrior' | 'Mage' | 'Thief'>('Warrior');

  const getClassStats = (className: string) => {
    const stats: any = {
      Warrior: { strength: 80, endurance: 70, agility: 50, intelligence: 40, charisma: 50, luck: 30 },
      Mage: { strength: 40, endurance: 40, agility: 60, intelligence: 90, charisma: 60, luck: 50 },
      Thief: { strength: 50, endurance: 60, agility: 80, intelligence: 60, charisma: 50, luck: 80 },
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

        <IonLabel>Select your character's class:</IonLabel>
        <IonSelect value={selectedClass} onIonChange={(e) => setSelectedClass(e.detail.value)}>
          <IonSelectOption value="Warrior">Warrior</IonSelectOption>
          <IonSelectOption value="Mage">Mage</IonSelectOption>
          <IonSelectOption value="Thief">Thief</IonSelectOption>
        </IonSelect>

        <IonButton onClick={handleCreateCharacter} expand="full">Create Character</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CreateCharacter;
