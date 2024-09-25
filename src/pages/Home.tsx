import { IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {settings} from 'ionicons/icons'
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        
      </IonHeader>
      <IonContent color='bgcolor' >
      <div className="cardContainer">
        <IonCard color='btoncolor' href='Quest'>
          <IonCardContent class='buttonMenuText'>
          <p className='text'>QUEST!</p>
          </IonCardContent>
        </IonCard>
      </div>
      <div className='nombreLvlClass'>
      <p>Kyrad/lvl 1/Guerrero</p>
      </div>
      
      <div className='imageContainer'>
        <img src='/public/img/warriorIdle.png' className="custom-image"/>
      </div>
      <div className="cardContainer">
        <IonCard color='btoncolor'>
          <IonCardContent class='buttonMenuText'>
          <p className='text'>WORKOUT PLAN</p>
          </IonCardContent>
        </IonCard>
      </div>
      <div className="cardSettingsContainer">
        <IonCard className='settingsCard' color='btoncolor'>
          <IonCardContent class='buttonMenuText'>
            <IonIcon icon={settings} size='large'/>
          </IonCardContent>
        </IonCard>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
