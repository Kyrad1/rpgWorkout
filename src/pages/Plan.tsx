import { IonCard, IonInput, IonLabel, IonSegment, IonSegmentButton,  IonCardContent, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Plan.css';
import {chevronBackCircle, arrowBackCircle} from 'ionicons/icons'

const Plan: React.FC = () => {
    return (
        <IonPage>
            <IonContent color="bgcolor">
                <div className="container2">
                <IonCard href='/home' className='backButton'><IonIcon icon={arrowBackCircle} className='backIcon'></IonIcon></IonCard>
                </div>
                <div className='barraSuperior'>
                <IonSegment scrollable={true} value="default">
                    <IonSegmentButton value="first">
                    <IonLabel>
                        <p className='textStyle'>Lunes</p>
                    </IonLabel>
                    
                    </IonSegmentButton>
                    <IonSegmentButton value="second">
                    <IonLabel>
                        <p className='textStyle'>Martes</p>
                    </IonLabel>
                        
                    </IonSegmentButton>
                    <IonSegmentButton value="third">
                    <IonLabel>
                        <p className='textStyle'>Miercoles</p>
                    </IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="fourth">
                    <IonLabel>
                        <p className='textStyle'>Jueves</p>
                    </IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="fifth">
                    <IonLabel>
                        <p className='textStyle'>Viernes</p>
                    </IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="sixth">
                    <IonLabel>
                        <p className='textStyle'>Sabado</p>
                    </IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="seventh">
                    <IonLabel>
                        <p className='textStyle'>Domingo</p>
                    </IonLabel>
                    </IonSegmentButton>
                </IonSegment>
                </div>

                <div className='ExerciseContainer'>
                <IonCard color='btoncolor' >
                    <IonCardContent class='buttonMenuText'>
                        <p className='textExcercise'>Excercise!</p>
                    </IonCardContent>
                </IonCard>
                
                <IonCard className='smallCard' color='btoncolor'>
                    <IonInput   placeholder="KG">
                    </IonInput>
                </IonCard>
                <IonCard className='smallCard' color='btoncolor'>
                    <IonInput   placeholder="SETS">
                    </IonInput>
                </IonCard>
                <IonCard className='smallCard' color='btoncolor'>
                    <IonInput   placeholder="REPS">
                    </IonInput>
                </IonCard>
                </div>

                <div className='ExerciseContainer'>
                <IonCard color='btoncolor'>
                    <IonCardContent class='buttonMenuText'>
                        <p className='textExcercise'>Excercise!</p>
                    </IonCardContent>
                </IonCard>
                
                <IonCard className='smallCard' color='btoncolor'>
                    <IonInput   placeholder="KG">
                    </IonInput>
                </IonCard>
                <IonCard className='smallCard' color='btoncolor'>
                    <IonInput   placeholder="SETS">
                    </IonInput>
                </IonCard>
                <IonCard className='smallCard' color='btoncolor'>
                    <IonInput   placeholder="REPS">
                    </IonInput>
                </IonCard>
                </div>

                <div className="cardContainerCenter">
                <IonCard color='btoncolor' className='mediumCard'>
                
                <p className='textCenter'>+</p>

                </IonCard>
                </div>

                
                
            </IonContent>
        </IonPage>
    )


}

export default Plan;