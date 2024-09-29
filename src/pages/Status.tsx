import { IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Status.css';
import { arrowBackCircle, chevronUp, chevronUpOutline, person } from 'ionicons/icons';
const Status: React.FC = () => {
    return (
        <IonPage>
            <IonContent color="bgcolor">
            <div className='barraSuperior'>
                <IonIcon icon={person}className='alertIcon' />
                <p className='textStyle'>Status</p>
            <IonCard href='/home' className='backButton'><IonIcon icon={arrowBackCircle} className='backIcon'></IonIcon></IonCard>
        </div>
        <p className='statsStyle'>Name: Muhamed</p>
        <p className='stats2Style'>Level: 1</p>
        <p className='stats2Style'>Job: Hunter</p>
        <p className='stats2Style'>Money: 0 gold</p>
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
        <div><a href='/stats'><p>detalles</p></a><p className='statsStyleRight'> Extra Points: 1</p></div>
        
        
            </IonContent>
        </IonPage>
    )


}


export default Status;