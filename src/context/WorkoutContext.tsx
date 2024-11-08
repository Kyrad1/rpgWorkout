import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definimos el tipo de un set de ejercicio
interface Set {
  series: number;
  reps: number;
  weight: number;
  completed: boolean;
}

// Definimos el tipo de un ejercicio
interface Exercise {
  exerciseName: string;
  sets: Set[];
}

// Definimos el tipo de los planes diarios, mapeados por día de la semana
type WeeklyPlan = {
  [day: string]: Exercise[];
};

// Creamos el contexto con tipo
interface WorkoutContextType {
  weeklyPlan: WeeklyPlan;
  updateWorkoutPlan: (day: string, exercises: Exercise[]) => void;
}

// Inicializamos el contexto
const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

// Hook personalizado para usar el contexto fácilmente
export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkoutContext must be used within a WorkoutProvider");
  }
  return context;
};

// Tipo de las props del proveedor, incluyendo `children`
interface WorkoutProviderProps {
  children: ReactNode;
}

// Proveedor del contexto
export const WorkoutProvider: React.FC<WorkoutProviderProps> = ({ children }) => {
  // Estado del plan semanal
  const [weeklyPlan, setWeeklyPlan] = useState<WeeklyPlan>({});

  // Función para actualizar el plan de entrenamiento de un día específico
  const updateWorkoutPlan = (day: string, exercises: Exercise[]) => {
    setWeeklyPlan((prevPlan) => ({
      ...prevPlan,
      [day]: exercises
    }));
  };

  return (
    <WorkoutContext.Provider value={{ weeklyPlan, updateWorkoutPlan }}>
      {children}
    </WorkoutContext.Provider>
  );
};
