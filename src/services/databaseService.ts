import { initializeDatabase } from './database';

export const getExercisesFromDB = async () => {
    const db = await initializeDatabase();
    if (!db) throw new Error('Database not initialized');
  
  try {
    const query = `
      SELECT Exercise.id, Exercise.exerciseName, Statistics.strength, Statistics.endurance, Statistics.agility 
      FROM Exercise
      INNER JOIN Statistics ON Exercise.statisticsId = Statistics.id;
    `;
    const result = await db.query(query);

    // Asegúrate de que result.values sea un array, incluso si no hay resultados
    const rows = result.values ?? [];
    return rows.map((row: any) => ({
      id: row.id,
      exerciseName: row.exerciseName,
      stats: {
        strength: row.strength,
        endurance: row.endurance,
        agility: row.agility,
      },
      sets: [], // Puedes cargar sets en otra consulta si es necesario
    }));
  } catch (err) {
    console.error('Error fetching exercises from DB:', err);
    return []; // Devuelve un array vacío en caso de error
  }
};
