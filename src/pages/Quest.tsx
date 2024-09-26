import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Quest.css';
import {alertCircle,arrowBackCircle,barbell,checkmark,chevronDown,chevronUp, stopwatch, timer} from 'ionicons/icons'



const Quest: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        
      </IonHeader>
      <IonContent color='bgcolor' >
        <div className='barraSuperior'>
          <IonIcon icon={alertCircle}className='alertIcon' />
           <p className='textStyle'>Quest Info</p>
            <IonCard href='/home' className='backButton'><IonIcon icon={arrowBackCircle} className='backIcon'></IonIcon></IonCard>
        </div>
        <div className='quest1Message'>  
          <p>DAILY QUEST -</p> 
        </div>
        <div className='quest2Message'>  
          <p>Recuerda: cada sentadilla te acerca un paso más al Super Saiyajin.</p> 
        </div>

        <div className='barraGoals'>
          <IonIcon icon={barbell} className='dumbbellIcon'></IonIcon>
          <p className='textStyleGoals'>goals</p>
          <IonIcon icon={barbell} className='dumbbellIcon2'></IonIcon>
        </div>
        <div className='excerciseBarra'>
          <p className='excerciseText'>Flexiones</p>
          <p className='excerciseSetNumber'>3/3</p>
          <div className='plusButton'><IonIcon icon={chevronUp} size='large'></IonIcon></div>
          <div className='minusButton'><IonIcon icon={chevronDown} size='large'></IonIcon></div>
          <div className='checkButton'><IonIcon className='checkIcon' icon={checkmark} size='large'></IonIcon></div>
        </div>
        <div className='excerciseBarra'>
          <p className='excerciseText'>Sentadillas</p>
          <p className='excerciseSetNumber'>3/3</p>
          <div className='plusButton'><IonIcon icon={chevronUp} size='large'></IonIcon></div>
          <div className='minusButton'><IonIcon icon={chevronDown} size='large'></IonIcon></div>
          <div className='checkButton'><IonIcon className='checkIcon' icon={checkmark} size='large'></IonIcon></div>
        </div>
        <div className='excerciseBarra'>
          <p className='excerciseText'>Abdominales</p>
          <p className='excerciseSetNumber'>2/3</p>
          <div className='plusButton'><IonIcon icon={chevronUp} size='large'></IonIcon></div>
          <div className='minusButton'><IonIcon icon={chevronDown} size='large'></IonIcon></div>
          <div className='checkButton'><IonIcon className='checkIcon' icon={checkmark} size='large'></IonIcon></div>
        </div>
        <div>  
          <p className='caution'>CAUTION!</p> 
          <p className='cautionMessage'>Si fallas en completar la mision krillin morira</p>
        </div>
        <div className='restTime'><p className='time'>Rest Time: 60</p></div>
        <div className='restTimeIcon'><IonIcon className='timerIcon' icon={stopwatch}></IonIcon></div>



        
            
      </IonContent>
    </IonPage>
  );
};

export default Quest;