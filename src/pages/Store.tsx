import React, { useState } from 'react';
import { IonContent, IonPage, IonButton, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';
import { arrowBackCircle, chevronDownOutline } from 'ionicons/icons';
import './Store.css';

const Store: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const toggleDescription = (productId: number) => {
    
    setSelectedProductId(selectedProductId === productId ? null : productId);
  };

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
                <IonBreadcrumb href='/store'><p>Store</p></IonBreadcrumb>
              </IonBreadcrumbs>
            </IonCol>
          </IonRow>
          
          
          <IonRow>
            <IonCol size="12" className="center-text">
              <IonCard className="store-card-header">
                <IonCardHeader>
                    
                  <IonCardTitle className="store-title">STORE</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>

          
          <IonRow>
            <IonCol size="12">
              <IonCard className="store-card">
                <IonCardHeader className="store-card-header-inner">
                  <IonGrid>
                    <IonRow>
                      <IonCol size="2" className="icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/1065/1065537.png" alt="armor" />
                      </IonCol>
                      <IonCol size="7" className="text-left">
                        <IonCardTitle className="store-item-title">VINDICATOR</IonCardTitle>
                      </IonCol>
                      <IonCol size="3" className="text-right">
                        <IonIcon
                          icon={chevronDownOutline}
                          className="description-toggle"
                          onClick={() => toggleDescription(1)} 
                        />
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardHeader>

                {selectedProductId === 1 && (
                  <IonCardContent className="description-content">
                    <p className="description-text">
                      DESCRIPTION
                      <br />
                      This is the Vindicator armor. Perfect for close combat.
                      <br />
                      High durability and defense.
                    </p>
                    <IonRow>
                      <IonCol size="6">
                        <p className="price-text">759$</p>
                      </IonCol>
                      <IonCol size="6" className="text-right">
                        <IonButton color="primary" fill="solid">BUY</IonButton>
                      </IonCol>
                    </IonRow>
                  </IonCardContent>
                )}
              </IonCard>
            </IonCol>
          </IonRow>

          
          <IonRow>
            <IonCol size="12">
              <IonCard className="store-card">
                <IonCardHeader className="store-card-header-inner">
                  <IonGrid>
                    <IonRow>
                      <IonCol size="2" className="icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/1065/1065537.png" alt="armor" />
                      </IonCol>
                      <IonCol size="7" className="text-left">
                        <IonCardTitle className="store-item-title">TurtleDefense</IonCardTitle>
                      </IonCol>
                      <IonCol size="3" className="text-right">
                        <IonIcon
                          icon={chevronDownOutline}
                          className="description-toggle"
                          onClick={() => toggleDescription(2)} 
                        />
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardHeader>

                {selectedProductId === 2 && (
                  <IonCardContent className="description-content">
                    <p className="description-text">
                      DESCRIPTION
                      <br />
                      TurtleDefense armor is designed for long-range combat.
                      <br />
                      Maximum protection against projectiles.
                    </p>
                    <IonRow>
                      <IonCol size="6">
                        <p className="price-text">659$</p>
                      </IonCol>
                      <IonCol size="6" className="text-right">
                        <IonButton color="primary" fill="solid">BUY</IonButton>
                      </IonCol>
                    </IonRow>
                  </IonCardContent>
                )}
              </IonCard>
            </IonCol>
          </IonRow>

          
          <IonRow>
            <IonCol size="12">
              <IonCard className="store-card">
                <IonCardHeader className="store-card-header-inner">
                  <IonGrid>
                    <IonRow>
                      <IonCol size="2" className="icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/1065/1065537.png" alt="armor" />
                      </IonCol>
                      <IonCol size="7" className="text-left">
                        <IonCardTitle className="store-item-title">Armagedon</IonCardTitle>
                      </IonCol>
                      <IonCol size="3" className="text-right">
                        <IonIcon
                          icon={chevronDownOutline}
                          className="description-toggle"
                          onClick={() => toggleDescription(3)} 
                        />
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardHeader>

                {selectedProductId === 3 && (
                  <IonCardContent className="description-content">
                    <p className="description-text">
                      DESCRIPTION
                      <br />
                      The Armagedon suit offers the highest durability for extended battles.
                      <br />
                      Top-tier defense for experts.
                    </p>
                    <IonRow>
                      <IonCol size="6">
                        <p className="price-text">899$</p>
                      </IonCol>
                      <IonCol size="6" className="text-right">
                        <IonButton color="primary" fill="solid">BUY</IonButton>
                      </IonCol>
                    </IonRow>
                  </IonCardContent>
                )}
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

export default Store;
