import { IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {person, play, settings} from 'ionicons/icons'
import './Home.css';

const Home: React.FC = () => {
  const audio = new Audio('/public/audio/compfireSound.mp3'); 
    audio.loop = true;
    audio.play()
    
    const audio2 = new Audio('/public/audio/determination.mp3'); 
    audio2.loop = true;
    audio2.volume = 0.05;
    audio2.play()

    

    
    
  
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
              <IonButtons slot='end'>
                <IonIcon icon={person} slot='end' ></IonIcon>
                <a href='/login'><p>Login/Register</p></a>
              </IonButtons>
            
          </IonToolbar>
        </IonHeader>
        
        <IonContent color="bgcolor">
        
        <div className='campfireImageDiv'>
          <div className="light-effect"></div>
          <img className='homeImage' src='https://media.tenor.com/drxH1lO9cfEAAAAi/dark-souls-bonfire.gif'/>
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
          <IonCard href='/status' color='btoncolor' className='cardButton'>
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
