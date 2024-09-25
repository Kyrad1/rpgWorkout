import { IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Quest.css';
import {alertCircle} from 'ionicons/icons'


const Quest: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        
      </IonHeader>
      <IonContent color='bgcolor' >
        <div className='barraSuperior'>
          <IonIcon icon={alertCircle} size='large' color='light' />
           <p className='textStyle'>Quest Info</p>
        </div>

            
      </IonContent>
    </IonPage>
  );
};

export default Quest;