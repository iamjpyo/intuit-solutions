function clickHandle(evt, tabName) {
    let i, tabcontent, tablinks;
  
    //clearing the previous clicked content.
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Setting the tab to be "active".
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Displaying the clicked tab and set it to active.
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  //Search alert function
    function searchAlert() {
    let searchVal = document.getElementById('search').value;
    alert(searchVal);
}

