import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './GameScene.css';
import {alertCircle,arrowBackCircle,barbell,checkmark,chevronDown,chevronUp, stopwatch, timer} from 'ionicons/icons'
import { useState, useEffect } from 'react';



const GameScene: React.FC = () => {
   const [showCoinPlus, setShowCoinPlus] = useState(false);
   

   useEffect(() => {

     const interval = setInterval(() => {
       setShowCoinPlus(true); 
       setTimeout(() => {
         setShowCoinPlus(false); 
       }, 3000); 
     }, 2000); 
 
    
     return () => clearInterval(interval);
   }, []);
  
  return (
    <IonPage>
    <IonContent color='bgcolor'>
      <div className='barraSuperior'>
        <p className='textStyle'>Game</p>
        <IonCard href='/home' className='backButton'>
          <IonIcon icon={arrowBackCircle} className='backIcon'></IonIcon>
        </IonCard>
      </div>
      <div className='battle'>
        <img
          className='playerImg'
          src='https://i.pinimg.com/originals/7c/52/d5/7c52d590b52375b1b52a00a294695a18.gif'
        />
        <img
          className='monsterImg'
          src='https://i.pinimg.com/originals/96/f5/7c/96f57c7ba8b597d19fdb252839a0fe86.gif'
        />
      </div>
      <div className='money'>
        <img
          className='coin'
          src='https://media.tenor.com/e7-iNWT9mvwAAAAi/erayklcoinflip.gif'
        />
        
        <p className={`coinPlus ${showCoinPlus ? 'show' : ''}`}>+ 1</p>
      </div>
    </IonContent>
  </IonPage>
  );
};

export default GameScene;