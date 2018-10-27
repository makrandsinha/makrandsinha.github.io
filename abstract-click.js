function toggle(id) {
    var e = document.getElementById(id);      
    var f = document.getElementById(id + '-plus');
    if(e.style.display == 'block') {
        e.style.display = 'none';
        f.innerHTML="[Abstract +]";
    }
    else {
        e.style.display = 'block'; 
        f.innerHTML="[-]";
    }
}         


