// nombre
// apellido
// curso
// edad
// correo
// sexo 

db.estudiantes.insertMany([
    {nombre: "Pedro", apellido: "Lopez", curso: "backend", correo: "micorreo@fgmail.com", edad: 25, sexo:"M"}, 
    {nombre: "Laura", apellido: "Suarez", curso: "marketing", correo: "micorreo@fgmail.com", edad: 27, sexo:"F"}, 
    {nombre: "German", apellido: "Caicedo", curso: "backend", correo: "micorreo@fgmail.com", edad: 22, sexo:"M"}, 
    {nombre: "Pedro", apellido: "David", curso: "backend", correo: "micorreo@fgmail.com", edad: 25, sexo:"M"}, 
    {nombre: "Pepino", apellido: "Spaghetti", curso: "react", correo: "micorreo@fgmail.com", edad: 32, sexo:"M"}
])
