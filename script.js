alert("Welcome to Mirai's World 💞");

const button =
document.getElementById("miraibutton");

const message = 
document.getElementById("message");

button.addEventListener("click",function() {
    message.textContent = "Mirai is watching you... 💞"
});

const judul =
document.getElementById("judul");

judul.addEventListener("click", function(){
    alert("Mirai Gallery!");
});

const menuBtn =
document.getElementById("menuBtn");

const sidebar =
document.getElementById("sidebar");

const closeBtn =
document.getElementById("closeBtn");

const overlay =
document.getElementById("overlay");

menuBtn.addEventListener("click", function() {

    sidebar.classList.add("active");
    overlay.classList.add("active");
    menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", function(){
    
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    menuBtn.style.display = "block";
});

overlay.addEventListener("click", function(){

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    menuBtn.style.display = "block";
});