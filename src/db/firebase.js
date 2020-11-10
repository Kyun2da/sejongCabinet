import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 파이어베이스 세팅
const firebaseConfig = {
  apiKey: 'AIzaSyDSYQ9oxZR65J8sPSxl1xAXZ1B1SQRYaGg',
  authDomain: 'sjswcabinet-ea577.firebaseapp.com',
  databaseURL: 'https://sjswcabinet-ea577.firebaseio.com',
  projectId: 'sjswcabinet-ea577',
  storageBucket: 'sjswcabinet-ea577.appspot.com',
  messagingSenderId: '194660072088',
  appId: '1:194660072088:web:9a8d1f1fd6441882a2eeed',
  measurementId: 'G-N9PJT20N9C',
};

firebase.initializeApp(firebaseConfig);
