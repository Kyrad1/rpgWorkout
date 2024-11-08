// Tab3.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ReactECharts from 'echarts-for-react';
import { useState } from 'react';

const Tab3: React.FC = () => {
  // Define las estadísticas iniciales del personaje
  const [characterStats, setCharacterStats] = useState({
    strength: 60,
    endurance: 70,
    agility: 50,
    intelligence: 40,
    charisma: 30,
    luck: 50,
  });

  // Configuración para el gráfico de radar
  const radarOptions = {
    title: {
      text: 'Character Stats',
    },
    tooltip: {},
    radar: {
      // Define las áreas y los ejes del radar
      indicator: [
        { name: 'Strength', max: 100 },
        { name: 'Endurance', max: 100 },
        { name: 'Agility', max: 100 },
        { name: 'Intelligence', max: 100 },
        { name: 'Charisma', max: 100 },
        { name: 'Luck', max: 100 },
      ],
    },
    series: [
      {
        name: 'Stats',
        type: 'radar',
        data: [
          {
            value: [
              characterStats.strength,
              characterStats.endurance,
              characterStats.agility,
              characterStats.intelligence,
              characterStats.charisma,
              characterStats.luck,
            ],
            name: 'Character Stats',
          },
        ],
      },
    ],
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Character Stats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Render del gráfico radar usando ReactECharts */}
        <ReactECharts option={radarOptions} style={{ height: '400px', width: '100%' }} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
