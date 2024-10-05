import React, { useState } from 'react';
import {IonCard,IonContent,IonHeader,IonPage,IonTitle,IonToolbar,
} from '@ionic/react';
import './tutorial.css';


const Tutorial: React.FC = () => {
 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="btoncolor">
        <IonTitle>Bienvenida</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent color="bgcolor">
        <div className='divFantasma'></div>
        <div className='textoInicio'>
            <p className='mensajeTutorial'>¡Bienvenid@, (variable)! En esta app de entrenamiento  
                podrás forjar tus propios planes de entrenamiento, 
                rastrear tu progreso en cada misión diaria y 
                dominar el arte del entrenamiento.</p>
        </div>
        <div className='textoInicio'>
            <IonCard href='/perfil' className='createNew'><p className='mensajeTutorial'>Create New</p></IonCard>
        </div>
        <div className='textoinicio'>
            <img className='imagenTutorial' src='https://i.pinimg.com/originals/b6/97/5f/b6975f69b722722acaa9a906c9fe731a.jpg' />
        </div>
        
        
      </IonContent>
    </IonPage>
  );
};

export default Tutorial;
