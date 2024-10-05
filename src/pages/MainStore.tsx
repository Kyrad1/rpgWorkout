import React from 'react';
import { IonContent, IonPage, IonButton, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonBreadcrumbs, IonBreadcrumb, IonIcon } from '@ionic/react';
import './MainStore.css'; 


const MainStore: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding store-page" color="bgcolor">
        <IonGrid>

          
          <IonRow>
            <IonCol size="12">
              <IonBreadcrumbs>
                <IonBreadcrumb href="/home">
                  <p>Home</p>
                </IonBreadcrumb>
                <IonBreadcrumb href='/mainstore'><p>MainStore</p></IonBreadcrumb>
              </IonBreadcrumbs>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12" className="center-text">
              <IonCard className="store-card-header">
                <IonCardHeader>
                  <IonCardTitle className="store-title" color="btoncolor">STORE</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>

          
          <IonRow>
            <IonCol size="12">
              <IonCard className="store-card">
                <IonCardHeader>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="2" className="icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/1065/1065537.png" alt="armor" /> 
                      </IonCol>
                      <IonCol size="6" className="text-left">
                        <IonCardTitle className="store-item-title">ARMORS</IonCardTitle>
                      </IonCol>
                      <IonCol size="4" className="text-right">
                        <IonButton color="primary" fill="solid" href='store'>BUY</IonButton>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>

          
          <IonRow>
            <IonCol size="12">
              <IonCard className="store-card">
                <IonCardHeader>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="2" className="icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/4155/4155897.png" alt="weapon" /> 
                      </IonCol>
                      <IonCol size="6" className="text-left">
                        <IonCardTitle className="store-item-title">WEAPONS</IonCardTitle>
                      </IonCol>
                      <IonCol size="4" className="text-right">
                        <IonButton color="primary" fill="solid" href='store'>BUY</IonButton>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>

          
          <IonRow>
            <IonCol size="12">
              <IonCard className="store-card">
                <IonCardHeader>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="2" className="icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/8832/8832880.png" alt="abilities" /> 
                      </IonCol>
                      <IonCol size="6" className="text-left">
                        <IonCardTitle className="store-item-title">ABILITIES</IonCardTitle>
                      </IonCol>
                      <IonCol size="4" className="text-right">
                        <IonButton color="primary" fill="solid" href='store'>BUY</IonButton>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>

          
          <IonRow>
            <IonCol size="12" className="balance-container">
              <div className="balance-box">
                759$
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MainStore;
