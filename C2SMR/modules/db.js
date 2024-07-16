import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('app.db');

export const initDB = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS city_cache (id INTEGER PRIMARY KEY AUTOINCREMENT, city TEXT);'
    );
  });
};

export const insertCity = (city) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO city_cache (city) VALUES (?);',
        [city],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const getCity = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT city FROM city_cache;',
        [],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => reject(error)
      );
    });
  });
};

export const clearCity = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM city_cache;',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    }); 
  });
};
