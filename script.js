lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

  function toggleSidebar(){
    document.getElementById("sideNavbar").classList.toggle('activate');
    document.getElementById("mainContent").classList.toggle('activate');
}
function toggleProfileSidebar(){
  document.getElementById("nominee").classList.toggle('activate');
  document.getElementById("profile-sidebar").classList.toggle('activate');
}
function displayList(){
  document.getElementById("navbar").classList.toggle('activate');
  document.getElementById("profile-sidebar").classList.toggle('move');
  document.getElementById("nominee").classList.toggle('move');
}
