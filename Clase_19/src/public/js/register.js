const form = document.getElementById('registerForm');

form.addEventListener('submit',e=>{
    e.preventDefault();
    const data = new FormData(form);
    console.log(data);
    const obj = {};
    data.forEach((value,key)=>obj[key]=value);
    console.log("Objeto formado:");
    console.log(obj);
    fetch('/api/sessions/register',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(result=>result.json()).then(json=>console.log(json));
})

