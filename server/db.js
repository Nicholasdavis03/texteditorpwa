// db.js

let db;
const dbName = 'myDatabase';
const dbVersion = 1;

const request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = function(event) {
  const db = event.target.result;
  const objectStore = db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
};

request.onsuccess = function(event) {
  db = event.target.result;
};

request.onerror = function(event) {
  console.error('Error opening database', event.target.error);
};

request.onblocked = function(event) {
  console.warn('Database upgrade blocked by another open connection');
};

request.onclose = function(event) {
  console.log('Database connection closed');
};

function addNote(note) {
  const transaction = db.transaction(['notes'], 'readwrite');
  const objectStore = transaction.objectStore('notes');
  const request = objectStore.add(note);
  
  request.onsuccess = function(event) {
    console.log('Note added successfully');
  };
  
  request.onerror = function(event) {
    console.error('Error adding note', event.target.error);
  };
}

function getNotes() {
  const transaction = db.transaction(['notes'], 'readonly');
  const objectStore = transaction.objectStore('notes');
  const request = objectStore.getAll();
  
  request.onsuccess = function(event) {
    const notes = event.target.result;
    console.log('All notes:', notes);
  };
  
  request.onerror = function(event) {
    console.error('Error getting notes', event.target.error);
  };
}

// Other database operations can be defined here

export { addNote, getNotes };
