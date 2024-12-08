import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definimos el tipo de un set de ejercicio
interface Set {
  series: number;
  reps: number;
  weight: number;
  completed: boolean;
}

// Definimos el tipo de un ejercicio
export interface Exercise {
  exerciseName: string;
  stats: Estadisticas; 
  sets: Set[]; 
}

interface Estadisticas {
  strength: number;
  endurance: number;
  agility: number;
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
interface Estadisticas {
  strength: number;
  endurance: number;
  agility: number;
}






export const excercises: Exercise[] = [
  {
    
    exerciseName: "Plank",
    stats: {
      strength: 4,
      endurance: 5,
      agility: 1
    },
    sets: [], // Inicialmente no tiene sets
  },
  {
    
    exerciseName: "Push-Ups",
    stats: {
      strength: 5,
      endurance: 4,
      agility: 1
    },
    sets: [],
  },
  {
  
    exerciseName: "Chin-Ups",
    stats: {
      strength: 5,
      endurance: 3,
      agility: 2
    },
    sets: [],
  },
  {
   
    exerciseName: "Pull-Ups",
    stats: {
      strength: 5,
      endurance: 4,
      agility: 1
    },
    sets: [],
  },
  {
   
    exerciseName: "Dips",
    stats: {
      strength: 5,
      endurance: 3,
      agility: 2
    },
    sets: [],
  },
  {
    
    exerciseName: "Australian Push-Ups",
    stats: {
      strength: 4,
      endurance: 4,
      agility: 2
    },
    sets: [],
  },
  {
    
    exerciseName: "Squats",
    stats: {
      strength: 4,
      endurance: 3,
      agility: 2
    },
    sets: [],
  },
  {
    
    exerciseName: "Jumping Rope",
    stats: {
      strength: 1,
      endurance: 4,
      agility: 5
    },
    sets: [],
  },
  {
    
    exerciseName: "Burpee",
    stats: {
      strength: 3,
      endurance: 5,
      agility: 2
    },
    sets: [],
  }
];


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
