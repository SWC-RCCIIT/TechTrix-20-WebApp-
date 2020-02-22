import firebase from 'firebase'

const config={
    apiKey: "AIzaSyDNN8XJjkbtaz8buBNGlUHqoV1fOB1PC2k",
      authDomain: "techtrix-20.firebaseapp.com",
      databaseURL: "https://techtrix-20.firebaseio.com",
      projectId: "techtrix-20",
      storageBucket: "techtrix-20.appspot.com",
      messagingSenderId: "641239964053",
      appId: "1:641239964053:web:e3c280f7800e0afae3fe9c"
}
firebase.initializeApp(config);
export default firebase