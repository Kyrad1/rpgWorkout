import { IonCard, IonInput, IonItem, IonCardContent, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Perfil.css';
import {chevronBackCircle, chevronUp, person, arrowBackCircle} from 'ionicons/icons'

const Perfil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      
      </IonHeader>
      <IonContent color='bgcolor' >
        <div className='barraSuperior'>
        <IonCard href='/tutorial' className='backButton'><IonIcon icon={arrowBackCircle} className='backIcon'></IonIcon></IonCard>
        </div>
        <div className='barraSuperior2'>
        <IonIcon icon={person}className='alertIcon' />
        </div>
        <div className='barraSuperior2'>
        </div>
      <IonItem color='bgcolor'>
        <IonInput className='holderStyle' label="Name" placeholder="Enter your name">
        </IonInput>
      </IonItem>
      <IonItem color='bgcolor'>
        <IonInput className='holderStyle' label="Class" placeholder="Enter class name">
        </IonInput>
      </IonItem>
      <div className="container">
            <p className="stats7Style">Stat Points Destribution:</p>
            </div>
      <div className="container">
            <p className="stats2Style">Agility:</p>
            <p className='stats3Style'>1</p>
            <div className="plus3Button">
            <IonIcon icon={chevronUp} size="large"></IonIcon>
            </div>
            
        </div>
      <div className="container">
            <p className='stats2Style'>Strenght:</p>
            <p className='stats3Style'>1</p>
            <div className="plus3Button">
            <IonIcon icon={chevronUp} size="large"></IonIcon>
            </div>
        </div>
        <div className="container">
            <p className='stats2Style'>Dexterity:</p>
            <p className='stats3Style'>1</p>
            <div className="plus3Button">
            <IonIcon icon={chevronUp} size="large"></IonIcon>
            </div>
        </div>
        <div className="container">
            <p className='stats2Style'>Intelligence:</p>
            <p className='stats3Style'>1</p>
            <div className="plus3Button">
            <IonIcon icon={chevronUp} size="large"></IonIcon>
            </div>
        </div>
        
        <p className='statsStyleRight2'> Remaining Points: 5</p>
        <p className='statsStyleRight3'> <a href='/home'>Finalize Creation</a></p>
        
      </IonContent>
    </IonPage>
  );
};

export default Perfil;