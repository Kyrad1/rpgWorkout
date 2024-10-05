import React, { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonSearchbar, IonList, IonItem, IonLabel, IonIcon, IonModal, IonBreadcrumb, IonBreadcrumbs, IonCol, IonRow } from '@ionic/react';
import { refreshCircleOutline, checkmarkOutline } from 'ionicons/icons';
import './ExcercisePage.css'; 

const ExcercisePage: React.FC = () => {
  const [showEquipmentModal, setShowEquipmentModal] = useState(false);
  const [showMuscleModal, setShowMuscleModal] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState('Todo Equipamiento');
  const [selectedMuscle, setSelectedMuscle] = useState('Todos Músculos');



  const allExercises = [
    { name: 'Curl de Bíceps 21', muscle: 'Bíceps' },
    { name: 'Abdominales Tijera', muscle: 'Abdominales' },
    { name: 'Rueda Abdominal', muscle: 'Abdominales' },
    { name: 'Aerobics', muscle: 'Cardio' },
    { name: 'Air Bike', muscle: 'Cardio' },
    { name: 'Arnold Press (Mancuerna)', muscle: 'Hombros' },
  ];

  const equipmentCategories = [
    'Todo Equipamiento', 'Ninguno', 'Banda de Resistencia', 'Banda de Suspensión', 'Barra', 'Mancuerna', 'Máquina', 'Pesa Rusa', 'Placa de Peso', 'Otro'
  ];

  const muscleGroups = [
    'Todos Músculos', 'Pecho', 'Bíceps', 'Tríceps', 'Hombros', 'Espalda', 'Piernas', 'Abdominales', 'Cardio'
  ];

  return (
    <IonPage>
      <IonHeader>
      <IonRow>
            <IonCol size="12">
              <IonBreadcrumbs>
                <IonBreadcrumb href="/home">
                <p className='breadcrumbexcer'>Home</p>
                </IonBreadcrumb>
                <IonBreadcrumb href='/plan'><p className='breadcrumbexcer'>WorkCreator</p></IonBreadcrumb> 
                <IonBreadcrumb href='/excercisepage'><p className='breadcrumbexcer'>Excersice</p></IonBreadcrumb>
              </IonBreadcrumbs>
            </IonCol>
          </IonRow>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>Cancelar</IonButton>
          </IonButtons>
          <IonTitle>Agregar Ejercicio</IonTitle>
          <IonButtons slot="end">
            <IonButton>Crear</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="exercise-page-content" color="bgcolor">
        <IonSearchbar placeholder="Buscar ejercicio" />

        
        <IonList>
          <IonItem>
            <IonButton expand="block" onClick={() => setShowEquipmentModal(true)}>{selectedEquipment}</IonButton>
            <IonButton expand="block" onClick={() => setShowMuscleModal(true)}>{selectedMuscle}</IonButton>
          </IonItem>
        </IonList>

       

        
        <IonList>
          <IonLabel className="section-label">Todos los Ejercicios</IonLabel>
          {allExercises.map((exercise, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h2>{exercise.name}</h2>
                <p>{exercise.muscle}</p>
              </IonLabel>
              <IonIcon icon={refreshCircleOutline} slot="end" />
            </IonItem>
          ))}
        </IonList>

       
        <IonModal isOpen={showEquipmentModal} onDidDismiss={() => setShowEquipmentModal(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Tipo de Categoría</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowEquipmentModal(false)}>Cerrar</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent >
            <IonList>
              {equipmentCategories.map((category, index) => (
                <IonItem key={index} button onClick={() => {
                  setSelectedEquipment(category);
                  setShowEquipmentModal(false);
                }}>
                  <IonLabel>{category}</IonLabel>
                  {selectedEquipment === category && <IonIcon icon={checkmarkOutline} slot="end" />}
                </IonItem>
              ))}
            </IonList>
          </IonContent>
        </IonModal>

        
        <IonModal isOpen={showMuscleModal} onDidDismiss={() => setShowMuscleModal(false)}>
          <IonHeader>
            <IonToolbar >
              <IonTitle>Grupo Muscular</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowMuscleModal(false)}>Cerrar</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent >
            <IonList>
              {muscleGroups.map((muscle, index) => (
                <IonItem key={index} button onClick={() => {
                  setSelectedMuscle(muscle);
                  setShowMuscleModal(false);
                }}>
                  <IonLabel>{muscle}</IonLabel>
                  {selectedMuscle === muscle && <IonIcon icon={checkmarkOutline} slot="end" />}
                </IonItem>
              ))}
            </IonList>
          </IonContent>
        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default ExcercisePage;
