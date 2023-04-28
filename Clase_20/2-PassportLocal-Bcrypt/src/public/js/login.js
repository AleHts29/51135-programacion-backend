const form = document.getElementById('loginForm');

form.addEventListener('submit',e=>{
    e.preventDefault();
    const data = new FormData(form);
    console.log(data)
    const obj = {};
    data.forEach((value,key)=>obj[key]=value);
    fetch('/api/sessions/login',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(result=>{
        if(result.status===200){
            console.log(obj)
            window.location.replace('/users');
        }else if(result.status ===401){
            alert("Login invalido!!")
        }
    })
})