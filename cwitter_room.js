var firebaseConfig = {
      apiKey: "AIzaSyAMkn3PtffZxh1uGBdeg6LCNpk50s8ZkgE",
      authDomain: "kwitter-adb9f.firebaseapp.com",
      databaseURL: "https://kwitter-adb9f-default-rtdb.firebaseio.com",
      projectId: "kwitter-adb9f",
      storageBucket: "kwitter-adb9f.appspot.com",
      messagingSenderId: "48874512578",
      appId: "1:48874512578:web:319d2be53e26bdcdf89b5b"
    };  
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;
function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
localStorage.setItem("room_name" , room_name);
window.location = "cwitter_room.html";
}
function getData(){
firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
});});}
getData();
function redirectToRoomName(name){
localStorage.setItem("room_name" ,name);
window.location = "cwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}