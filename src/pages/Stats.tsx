import { IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Stats.css';
import { arrowBackCircle, chevronUp, chevronUpOutline, person } from 'ionicons/icons';
const Stats: React.FC = () => {
    return (
        <IonPage>
            <IonContent color="bgcolor">
            <div className='barraSuperior'>
                <p className='textStyle'>Strenght</p>
            <IonCard href='/status' className='backButton'><IonIcon icon={arrowBackCircle} className='backIcon'></IonIcon></IonCard>
            </div>

        <div className="container2">
        </div>
        <div className="container2">
            <p className='stats5Style'>Quadriceps</p>
            <p className='stats6Style'>1</p>
            <p className='stats4Style'>X0,2</p>
        </div>
        <div className="container2">
            <p className='stats5Style'>Stretching</p>
            <p className='stats6Style'>1</p>
            <p className='stats4Style'>X0,2</p>
        </div>
        <div className="container2">
            <p className='stats5Style'>Shoulders</p>
            <p className='stats6Style'>1</p>
            <p className='stats4Style'>X0,2</p>
        </div>
        <div className="container2">
            <p className='stats5Style'>Trapezius</p>
            <p className='stats6Style'>1</p>
            <p className='stats4Style'>X0,2</p>
        </div>
        <div className="container2">
            <p className='stats5Style'>Warm Up</p>
            <p className='stats6Style'>1</p>
            <p className='stats4Style'>X0,2</p>
        </div>
        <div className="container2">
            <p className='stats5Style'>Triceps</p>
            <p className='stats6Style'>1</p>
            <p className='stats4Style'>X0,2</p>
        </div>
        <div className="container2">
            <p className='stats5Style'>Glutes</p>
            <p className='stats6Style'>1</p>
            <p className='stats4Style'>X0,2</p>
        </div>
        <div className="container2">
            <p className='stats5Style'>Calves</p>
            <p className='stats6Style'>1</p>
            <p className='stats4Style'>X0,2</p>
        </div>
        <div className="container2">
            <p className='stats5Style'>Biceps</p>
            <p className='stats6Style'>1</p>
            <p className='stats4Style'>X0,2</p>
        </div>
        <div className="container2">
            <p className='stats5Style'>Chest</p>
            <p className='stats6Style'>1</p>
            <p className='stats4Style'>X0,2</p>
        </div>
        <div className="container2">
            <p className='stats5Style'>Back</p>
            <p className='stats6Style'>1</p>
            <p className='stats4Style'>X0,2</p>
        </div>
        <div className="container2">
            <p className='stats5Style'>Lats</p>
            <p className='stats6Style'>1</p>
            <p className='stats4Style'>X0,2</p>
        </div>
        <div className="container2">
            <p className='stats5Style'>Abs</p>
            <p className='stats6Style'>1</p>
            <p className='stats4Style'>X0,2</p>
        </div>
        <div className="container">
            <p className='stats5Style'>Muscle Points:</p>
            <p className='stats6Style'>7</p>
        </div>

            </IonContent>
        </IonPage>
    )


}


export default Stats;