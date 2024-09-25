import { IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import {chevronBackCircle} from 'ionicons/icons'

const Quest: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        
      </IonHeader>
      <IonContent color='bgcolor' >
    
            <IonCard href='Home'><IonIcon icon={chevronBackCircle} size='large'/></IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Quest;