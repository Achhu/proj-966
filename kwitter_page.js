var firebaseConfig = {
    apiKey: "AIzaSyDKIVxq6cMzV0mJk-So1DFM5r_TvDb8bsY",
    authDomain: "lets-chat-1aa62.firebaseapp.com",
    databaseURL: "https://lets-chat-1aa62-default-rtdb.firebaseio.com",
    projectId: "lets-chat-1aa62",
    storageBucket: "lets-chat-1aa62.appspot.com",
    messagingSenderId: "659679300651",
    appId: "1:659679300651:web:db6765161573f73bf06e6e"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
  msg = document.getElementById("msq").value;
  firebase.database().ref(room_name).push({name:user_name , message:msg , like:0});
  document.getElementById("msq").value = "";
}



function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}
