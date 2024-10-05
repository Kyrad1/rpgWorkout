import React, { useState } from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon, IonChip, IonBreadcrumbs, IonBreadcrumb } from '@ionic/react';
import { arrowBackCircle, chevronDownOutline } from 'ionicons/icons';
import './Inventory.css';

const Inventory: React.FC = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const toggleDescription = (itemId: number) => {
    setSelectedItemId(selectedItemId === itemId ? null : itemId);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding inventory-page" color="bgcolor">
        <IonGrid>
          
          <IonCard href='/home' className='backButton'><IonIcon icon={arrowBackCircle} className='backIcon'></IonIcon></IonCard>
          <IonRow>
            <IonCol size="12" className="center-text">
              <IonCard className="inventory-card-header">
                <IonCardHeader>
                  <IonCardTitle className="inventory-title">INVENTORY</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>

          

          
          <IonRow className="ion-justify-content-center chip-row">
            <IonChip outline={false} color="primary"><p>Weapons</p></IonChip>
            <IonChip outline={true} color="primary"><p>Armors</p></IonChip>
          </IonRow>

          
          <IonRow>
            <IonCol size="12">
              <IonCard className="inventory-card">
                <IonCardHeader className="inventory-card-header-inner">
                  <IonGrid>
                    <IonRow>
                      <IonCol size="2" className="icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/1065/1065537.png" alt="armor" />
                      </IonCol>
                      <IonCol size="7" className="text-left">
                        <IonCardTitle className="inventory-item-title">Vindicator</IonCardTitle>
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

                {selectedItemId === 1 && (
                  <IonCardContent className="description-content">
                    <p className="description-text">
                      DESCRIPTION
                      <br />
                      SDFSDF SDF ASDF ASDF
                      <br />
                      ASDF ASDFRAGREERS
                      <br />
                      YSDRYU DTYUJ
                    </p>
                    <IonButton color="warning" expand="block">EQUIP</IonButton>
                  </IonCardContent>
                )}
              </IonCard>
            </IonCol>
          </IonRow>

          
          <IonRow>
            <IonCol size="12">
              <IonCard className="inventory-card">
                <IonCardHeader className="inventory-card-header-inner">
                  <IonGrid>
                    <IonRow>
                      <IonCol size="2" className="icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/1065/1065537.png" alt="armor" />
                      </IonCol>
                      <IonCol size="7" className="text-left">
                        <IonCardTitle className="inventory-item-title">TurtleDefense</IonCardTitle>
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

                {selectedItemId === 2 && (
                  <IonCardContent className="description-content">
                    <p className="description-text">
                      DESCRIPTION
                      <br />
                      SDFSDF SDF ASDF ASDF
                      <br />
                      ASDF ASDFRAGREERS
                      <br />
                      YSDRYU DTYUJ
                    </p>
                    <IonButton color="warning" expand="block">EQUIP</IonButton>
                  </IonCardContent>
                )}
              </IonCard>
            </IonCol>
          </IonRow>

        
          <IonRow>
            <IonCol size="12">
              <IonCard className="inventory-card">
                <IonCardHeader className="inventory-card-header-inner">
                  <IonGrid>
                    <IonRow>
                      <IonCol size="2" className="icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/1065/1065537.png" alt="armor" />
                      </IonCol>
                      <IonCol size="7" className="text-left">
                        <IonCardTitle className="inventory-item-title">Armagedon</IonCardTitle>
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

                {selectedItemId === 3 && (
                  <IonCardContent className="description-content">
                    <p className="description-text">
                      DESCRIPTION
                      <br />
                      SDFSDF SDF ASDF ASDF
                      <br />
                      ASDF ASDFRAGREERS
                      <br />
                      YSDRYU DTYUJ
                    </p>
                    <IonButton color="warning" expand="block">EQUIP</IonButton>
                  </IonCardContent>
                )}
              </IonCard>
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Inventory;
