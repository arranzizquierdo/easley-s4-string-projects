![Logo We](/src/images/We..png)

## Aplicación de mensajería para empresas

Proyecto desarrollado para la empresa String-Projects.

El proyecto se basa en el desarrollo de una aplicación de mensajería para la
comunicación entre los integrantes de canales o grupos privados. Esta aplicación nos
permitirá logearnos como usuarios, acceder a un grupo privado en el que poder mandar
mensajes en general o como respuesta a otro mensaje, generando hilos.

### Autoras:

- **Aroa Tato** => [aroatdlt](https://github.com/aroatdlt)
- **Laura Arranz** => [arranzizquierdo](https://github.com/arranzizquierdo)
- **Laura Santiago** => [laurasanra](https://github.com/laurasanra)
- **Raquel Dacosta** => [rdfornieles](https://github.com/rdfornieles)


## ESTRUCTURA

El proyecta ha sido desarrollado con las siguientes herramientas:
  1. JavaScript
  2. React
  3. HTML5
  4. SASS
  5. Consumo de datos a través de una API REST

La estrucutura del proyecto se basa en componentes englobados en dos grandes bloques:

  ### Público

  Página inicial en la que el usuario debe meter sus credenciales (nombre y contraseña) para poder acceder a su zona privada.
  Tiene la opción de recordar sus credenciales (serán almacenadas en el local storage de su dispositivo) para que en sus siguientes visitas no sea necesario introducirlas de nuevo.

![Público](/src/images/Public.png)

  ### Privado

  Una vez el usuario ha metido sus credenciales y han sido autenticadas accede a su zona privada. En ella dispondrá de un listado de grupos a los que pertenece, a los cuales puede acceder clickando en ellos para visualizar todos los mensajes que se han enviado a dicho grupo.

![Converasción de grupo](/src/images/Page-conversation.png)

  Existe una segunda página a la que el usuario accede cuando clicka en un mensaja para contestar sobre ese mismo; se abre la página del hilo de ese mensaje.

![Converasción de hilo](/src/images/Page-thread.png)

  El usuario puede cerrar su sesión en cualquiera de las páginas a través de un menu en la esquina superior derecha.

  ![modal-logOut](/src/images/Modal.png)

**Componentes:**

![componentes](/src/images/Components.png)


## TRABAJAR CON EL PROYECTO - CONTRIBUIR

Para poder trabajar en el proyecto deberás:
  1. Clonar el repositorio en tu local
  2. Instalar los paquetes necesarios: ejecutar *npm install*
  3. Arrancar el proyecto para visualizarlo: ejecutar *npm start*
  4. Subir proyecto a producción: ejecutar *npm run deploy*

  Puedes consultar la documentación completa en [página principal de React](https://reactjs.org/).


Cualquier mejora o modificación que se te ocurra no dudes en abrirnos una pull requests a cualquiera de las autoras, estaremos encantadas!








