var firebaseConfig = {                              
    apiKey:              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain:          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    projectId:           "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    storageBucket:       "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    messagingSenderId:   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    appId:               "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    };

firebase.initializeApp()

const db = firebase.firestore();

db.settings({ timestampInSnapshots: true })

db.collection('collecion').doc('id').update({
    name: 'new name',
    city: 'another city'
});

// Update kan ikke overwrite data, 
// hvis man tilføjer et nyt dokument til kollektionen
// (kan ikke add en kulonne til en tabel)