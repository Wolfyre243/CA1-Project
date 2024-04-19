

function openSidebar() {
    let sideBar = document.getElementById("main-sidebar");
    let mainContent = document.getElementById("main-content");  
    sideBar.style.width = "250px";
    mainContent.style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeSidebar() {
  document.getElementById("main-sidebar").style.width = "0";
  document.getElementById("main-content").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}