export async function init(database) {
  try {
    await database.execAsync(
      `PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        );`
    );
  } catch (error) {
    console.log(error);
  }
}

export async function insertPlace(place, database) {
  try {
    await database.runAsync(
      `INSERT INTO places (
        title,
        imageUri,
        address,
        lat,
        lng
        ) VALUES (? ,?, ?, ?, ?)`,

      place.title,
      place.imageUri,
      place.address,
      place.location.latitude,
      place.location.longitude
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPlaces(database) {
  try {
    const allRows = await database.getAllAsync(`SELECT * FROM places`);
    return allRows;
  } catch (error) {
    console.log(error);
  }
}

export async function getPlaceById(database, id) {
  try {
    const result = await database.getAllAsync(
      `SELECT * FROM places WHERE id = ?`,
      id
    );
    return result[0];
  } catch (error) {
    console.log(error);
  }
}

export async function deletePlaceById(database, id) {
  try {
    await database.runAsync(`DELETE FROM places WHERE id = $id`, { $id: id });
  } catch (error) {
    console.log(error);
  }
}
