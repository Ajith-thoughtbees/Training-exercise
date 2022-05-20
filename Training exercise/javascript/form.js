function check(form){
    if(form.userid.value == 'myuserid' && form.pswrd.value == 'password')
    {
        window.open('about.html')
    }
    else{
        alert('Error on username or password')
    }
}

