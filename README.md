Agrego un poco de info sobre los test que considero relevante:

Intente buscar practicidad para crear los test a modo de ejemplo. Si fuera una suite real se podria haber creado un archivo para almacenar variables en comun como un archivo para contener los locators de la pagina. Esto haria que dentro del test se hace un llamado
a la pagina de locators y no se hace la propia definicion dentro del test. 
Tambien se podrian haber tenido algunas consideraciones de seguridad como encriptar el usuario y contraseña en caso de ser un proyecto publico.

Login.spec.js : ##### IMPORTANTE

Para este test es necesario tener creado el usuario: Alex3 con la contraseña: 123456&

LoginLogout.spec.js:  ##### IMPORTANTE

Para este test es necesario tener creado el mismo usuario, Alex3.

Register.spec.js:

Este test puede hacer un registro por ejecucion. Los usuarios en PUSHING IT se almacenan por poco tiempo. Parece tener un clean up en su BD o quizas los usuarios creados se almacenan temporalmente. 
Por esta razon permito crear un usuario por ejecucion. 
Si fuese un valor que se guarda permanentemente se optaria por trabajar con una cuenta preparada para testing o crear y borrar el usuario luego de la ejecucion porque se entiende del riesgo de ejecutar este test infinitas veces. 

GRACIAS POR LEER! 
