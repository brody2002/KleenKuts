/* POP UP FUNCTIONS FOR DONATE */
function openPopup() {
    document.getElementById("popupDonate").style.display = "block";
    document.getElementById("confettis").style.display = "block";
    setTimeout(function() {
      closePopup();
    }, 4000);
  }
  
  function closePopup() {
    document.getElementById("popupDonate").style.display = "none";
    document.getElementById("confettis").style.display = "none";
  }
  
  /********************************/
  