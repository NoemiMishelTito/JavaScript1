const usuariosText=`{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
const usuarioObjeto= JSON.parse(usuariosText)
console.log(usuarioObjeto);
console.log(typeof usuarioObjeto);
let cadenaUsuario= JSON.stringify(usuarioObjeto)
console.log(cadenaUsuario);
console.log(typeof cadenaUsuario);

