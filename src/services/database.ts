import { CapacitorSQLite, SQLiteConnection, capSQLiteSet } from '@capacitor-community/sqlite';
import { Capacitor } from '@capacitor/core';

const sqliteConnection = new SQLiteConnection(CapacitorSQLite);

export const initializeDatabase = async () => {
  try {
    const db = await sqliteConnection.createConnection(
      'rpgworkoutDB',
      false,
      'no-encryption',
      1,
      false
    );

    await db.open();

    // Crear tablas
    await db.execute(`
      CREATE TABLE IF NOT EXISTS Statistics (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        strength INTEGER NOT NULL,
        endurance INTEGER NOT NULL,
        agility INTEGER NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS Exercise (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        exerciseName TEXT NOT NULL UNIQUE,
        statisticsId INTEGER NOT NULL,
        FOREIGN KEY (statisticsId) REFERENCES Statistics (id)
      );

      CREATE TABLE IF NOT EXISTS Set (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        exerciseId INTEGER NOT NULL,
        reps INTEGER NOT NULL,
        weight REAL,
        FOREIGN KEY (exerciseId) REFERENCES Exercise (id)
      );
    `);

    console.log('Database initialized successfully');
    return db;
  } catch (err) {
    console.error('Error initializing the database:', err);
  }
};



export const getExercisesFromDB = async () => {
  const db = await sqliteConnection.createConnection(
    'rpgworkoutDB',
    false,
    'no-encryption',
    1,
    false
  );

  const query = 'SELECT * FROM exercises'; // Aquí puedes ajustar la consulta según el esquema de tu base de datos
  const result = await db.query(query);

  return result.values ? result.values.map((row: any) => ({
    id: row.id,
    exerciseName: row.exerciseName,
    stats: {
      strength: row.strength,
      endurance: row.endurance,
      agility: row.agility,
    },
  })) : [];
};


export const insertInitialData = async (db: any) => {
    const insertStats = `
      INSERT INTO Statistics (strength, endurance, agility) VALUES 
      (4, 5, 1),  -- Plank
      (5, 4, 1),  -- Push-Ups
      (5, 3, 2),  -- Chin-Ups
      (5, 4, 1),  -- Pull-Ups
      (5, 3, 2),  -- Dips
      (4, 4, 2),  -- Australian Push-Ups
      (4, 3, 2),  -- Squats
      (1, 4, 5),  -- Jumping Rope
      (3, 5, 2);  -- Burpee
    `;
  
    const insertExercises = `
      INSERT INTO Exercise (exerciseName, statisticsId) VALUES 
      ('Plank', 1),
      ('Push-Ups', 2),
      ('Chin-Ups', 3),
      ('Pull-Ups', 4),
      ('Dips', 5),
      ('Australian Push-Ups', 6),
      ('Squats', 7),
      ('Jumping Rope', 8),
      ('Burpee', 9);
    `;
  
    try {
      await db.execute(insertStats);
      await db.execute(insertExercises);
      console.log('Initial data inserted successfully');
    } catch (err) {
      console.error('Error inserting initial data:', err);
    }
  };
  
