// context/CharacterContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';

// Definir la interfaz del personaje
interface Character {
  name: string;
  class: string;
  gender: string;
  stats: {
    strength: number;
    endurance: number;
    agility: number;
  };
}

// Crear el contexto
interface CharacterContextType {
  character: Character | null;
  setCharacter: (character: Character) => void;
}

// Valor por defecto del contexto
const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

// Proveedor del contexto
export const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [character, setCharacter] = useState<Character | null>(null);

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};

// Hook para usar el contexto
export const useCharacter = (): CharacterContextType => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
};
