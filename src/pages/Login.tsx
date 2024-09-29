import React, { useState } from 'react';
import {IonButton,IonCheckbox,IonContent,IonHeader,IonIcon,IonInput,IonItem,IonLabel,IonList,IonPage,IonText,IonTitle,IonToolbar,
} from '@ionic/react';
import './Login.css';
import { arrowBackCircle } from 'ionicons/icons';

const Login: React.FC = () => {

    return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="btoncolor">
          <IonTitle><p>Login</p></IonTitle>
          <IonIcon icon={arrowBackCircle} slot='end' size='large'></IonIcon>
          <a href='/home' slot='end'><p>Volver</p></a>
        </IonToolbar>
      </IonHeader>

      <IonContent color="bgcolor">
        <div className='divFantasma'></div>
        <div className='loginContainer'>
            <div>
                <p className='loginTitle'>Login</p>
                <IonItem> 
                    <IonInput className='input' label='Mail :' placeholder='example@gmail.com' type='email'></IonInput>
                </IonItem>
                <IonItem> 
                    <IonInput className='input' label='Password :' placeholder='********' type='password'></IonInput>
                </IonItem>
                <div className='loginContainer'>
                    <IonCheckbox><p>Remember me</p></IonCheckbox>
                    <a className='forgotPassword'>Olvidaste la contraseña?</a>
                </div>
                <div className='noCuenta'>
                  <p>no tienes una cuenta ?</p>
                  <a><p>crear una cuenta</p></a>
                </div>
                
            </div>
        </div>
        <div className='buttonLogin'>
            <IonButton >
            <a href='/home'><p>Iniciar sesión</p></a>
            </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
