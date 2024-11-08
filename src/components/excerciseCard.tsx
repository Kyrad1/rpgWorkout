import { IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonCheckbox, IonIcon } from '@ionic/react';
import { barbellOutline } from 'ionicons/icons';

// Interfaz para cada serie en el arreglo de sets
interface Set {
  series: number;
  reps: number;
  weight: number;
  completed: boolean;
}

// Interfaz para las props del componente ExerciseCard
interface ExerciseCardProps {
  exerciseName: string;
  sets: Set[];
  showCheck: boolean;  // Nueva prop para controlar la visibilidad del checkbox
  onUpdateSets: (updatedSets: Set[]) => void;
}

// Componente ExerciseCard con tipado en las props
const ExerciseCard: React.FC<ExerciseCardProps> = ({ exerciseName, sets, showCheck }) => {
  return (
    <IonCard>
      <IonCardContent>
        <IonGrid>
          {/* Fila con el icono y el nombre del ejercicio */}
          <IonRow className="ion-align-items-center">
            <IonCol size="2">
              <IonIcon icon={barbellOutline} style={{ fontSize: '24px', color: 'white' }} />
            </IonCol>
            <IonCol size="10">
              <h3 style={{ margin: 0, color: 'white' }}>{exerciseName}</h3>
            </IonCol>
          </IonRow>

          {/* Fila de encabezado para los títulos de cada columna */}
          <IonRow>
            <IonCol>Series</IonCol>
            <IonCol>Reps</IonCol>
            <IonCol>Weight</IonCol>
            {showCheck && <IonCol>Check</IonCol>}
          </IonRow>

          {/* Mapeamos cada serie en una fila */}
          {sets.map((set, index) => (
            <IonRow key={index}>
              <IonCol>{set.series}</IonCol>
              <IonCol>{set.reps}</IonCol>
              <IonCol>{set.weight} KG</IonCol>
              {showCheck && (
                <IonCol>
                  <IonCheckbox checked={set.completed} />
                </IonCol>
              )}
            </IonRow>
          ))}
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default ExerciseCard;
