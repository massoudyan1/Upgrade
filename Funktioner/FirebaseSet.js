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

db.collection('collection').doc('id').set({
    heigth: 'new height'
});


// Set overwriter data, så man kan lave nye documenter, som f.eks height