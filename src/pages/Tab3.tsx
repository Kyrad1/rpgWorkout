// pages/Tab3.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ReactECharts from 'echarts-for-react';
import { useCharacter } from '../context/CharacterContext';
import { useWorkoutContext } from '../context/WorkoutContext';

const Tab3: React.FC = () => {
  const { character } = useCharacter(); // Get the character from the context
  

  // Radar chart configuration
  const radarOptions = {
    radar: {
      indicator: [
        { name: 'Strength', max: 100 },
        { name: 'Endurance', max: 100 },
        { name: 'Agility', max: 100 }
        
      ],
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: character ? Object.values(character.stats) : [0, 0, 0],
            name: character ? character.name : 'No Character',
          },
        ],
      },
    ],
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Character Stats & Weekly Plan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {character ? (
          <div>
            <h2>{character.name}'s Stats</h2>
            <p><strong>Name:</strong> {character.name}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Class:</strong> {character.class}</p>
            <p><strong>Strength:</strong>{character.stats.strength}</p>
            <p><strong>Endurance:</strong>{character.stats.endurance}</p>
            <p><strong>Agility:</strong>{character.stats.agility}</p>

            <ReactECharts option={radarOptions} />
          </div>
        ) : (
          <div>No character selected</div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
