import { IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {settings} from 'ionicons/icons'
import './Home.css';

const Home: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader >
          <IonToolbar color="btoncolor">
            <IonTitle><p>Menú</p></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding" color="bgcolor">
          <IonList>
            <IonItem>
              <IonLabel><p>Perfil</p></IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel><p>Plan de entrenamiento</p></IonLabel>
            </IonItem>
            
            <IonItem>
              <IonLabel><p>Soporte</p></IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel><p>Configuracion</p></IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id = "main-content" >
        <IonHeader className='menuHeader'>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle><p>Menu</p></IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent color="bgcolor">
        
        <div className='campfireImageDiv'>
          <div className="light-effect"></div>
          <img  src='https://media.tenor.com/drxH1lO9cfEAAAAi/dark-souls-bonfire.gif'/>
        </div>    
        <div className="cardContainer" >
          <IonCard href='/quest'  color='btoncolor' className='cardButton'>
            <IonCardContent class='buttonMenuText'>
            <p className='text2'>QUEST!</p>
            </IonCardContent>
          </IonCard>
        </div>
        <div className="cardContainer">
          <IonCard color='btoncolor' className='cardButton'>
            <IonCardContent class='buttonMenuText'>
            <p className='text'>Crea tu plan de entrenamiento</p>
            </IonCardContent>
          </IonCard>
        </div>
        
        <div className="cardContainer">
          <IonCard color='btoncolor' className='cardButton'>
            <IonCardContent class='buttonMenuText'>
            <p className='text2'>Status</p>
            </IonCardContent>
          </IonCard>
        </div>
        
        </IonContent>
        
      </IonPage>
    </>
  );
};

export default Home;
