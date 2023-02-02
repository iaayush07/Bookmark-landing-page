let emailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;


function emailVarification(){
    let emailID = document.getElementById('emailID');
    let emailerrmsg = document.getElementById('emailerrmsg');
    let emailwrapper = document.getElementById('emailwrapper');
    let erroricon = document.getElementById('erroricon');
    let btnprimary = document.getElementById('btn-primary');

    if(!emailID.value.match(emailRegex)){
        emailerrmsg.classList.remove(['invisible']);
        emailerrmsg.classList.add(['visible']);
        emailID.classList.remove(['border-dark']);
        emailwrapper.style.background="#f9575b";
        erroricon.classList.remove(['d-none']);
        erroricon.classList.add(['d-block']);
        btnprimary.classList.remove(['errorbtn']);
        btnprimary.classList.add(['errorTrue']);
    }
    else{
        emailerrmsg.classList.remove(['d-block']);
        emailerrmsg.classList.add(['d-none']);
        erroricon.classList.remove(['d-block']);
        erroricon.classList.add(['d-none']);
    }
}