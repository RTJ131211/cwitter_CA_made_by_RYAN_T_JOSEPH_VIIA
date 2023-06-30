function addUser() {
user_name = document.getElementById("user_name").value ;
localStorage.setItem("user_name", user_name);
window.location = "cwitter_room.html";
}
