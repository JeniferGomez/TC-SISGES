# <center>Aplicativo Web para la Gestión de Procesos Administrativos y de Reservas del Hotel Campestre Marquesa de Pinares de la Ciudad de Tibasosa</center>

El propósito de la creación del aplicativo web para la gestión de procesos administrativos y de reservas del Hotel campestre Marquesa de Pinares de la ciudad de Tibasosa es brindarle al hotel una herramienta eficiente, rápida, moderna y funcional para optimizar sus procesos internos, tener una mejor experiencia para todos los stakeholders y modernizar desde el aplicativo web todo el funcionamiento interno del hotel haciéndolo sí no uno de los más tecnológicos de la ciudad.

## Status 
<p align="center">:construction: Proyecto en construcción :construction:</p>

## :hammer:Funcionalidades del proyecto

- `Funcionalidad 1`: El sistema permite realizar una reservación en el hotel.
- `Funcionalidad 2`: El sistema permite gestionar las reservas realizadas.
- `Funcionalidad 2a`: Permite a los usuarios gestionar las reservas sin iniciar sesión, basta un código de seguridad.
- `Funcionalidad 3`: El sistema permite a los usuarios administradores o empleados gestionar el inventario del hotel.
- `Funcionalidad 4`: El sistema permite a los administradores o empleados tener un modulo de facturación.

## 👩‍💻 Equipo del proyecto

- `SCRUM MASTER`: Camila Valderrama 💜
- `Analista`: Gabriela Parada
- `QA`: Andrea Gómez
- `Dev`: Diego Corredor
- `Docente`: Nini Johana Diaz Martinez

## 📁 Acceso al proyecto

**El proyecto está estructurado en 2 carpetas, en la primera está lo necesario para el Frontend y la segunda todo para el Backend.**

## 🛠️ Abre y ejecuta el proyecto

**Para la ejecución local del proyecto es necesario:**
_Para trabajar con React Native, deberá comprender los fundamentos de JavaScript. Si es nuevo en JavaScript o necesita una actualización, puede sumergirse o repasar en Mozilla Developer Network._

**Importante tener instalado node.js**
* Para instalarlo dirijase a [NodeJs official site](https://nodejs.org/es/download/)

Para comprobar que se instaló bien, abra un cmd y ecriba
```
node --version
```

Para obtener todos los modulos ubiquese en la carpeta **Client** y digite en una terminal:
```
npm install
```

Luego para iniciar el proyecto en esa misma terminal puede digitar:
```
npm start
```

Para construir el proyecto en la terminal puede digitar:
```
npm run build 
```

Y para iniciar el despligue en local puede usar 2 comandos, primero realizar la instalación de serve:
```
npm install -g serve
```
```
serve -s build 
```

Y si desea desplegarlo en otro puerto diferente:
```
serve -s build -l 4000
```
## Carga del servidor local

Lo primero será dirigirse a la carpeta **Server** y en una consola realizar los siguiente:

```
npm install
```

Una vez realizado esto ya se puede iniciar el servidor con el siguiente comando:

```
npm run dev
```

## Puertos por defecto:

- Local server: **http://localhost:4000**
- Local client: **http://localhost:3000**

## :wrench:Tecnologias utilizadas

- `Front-end`: React v18.2.
- `NodeJs`: NodeJs v18.12.1.
- `Gestor de paquetes`: Npm v8.19.2.
- `Base de datos`: MySQL v8.1 
- `Tipografia`: Google Font API. 
- `Framework javascript`: PRIMEREACT como componentes nativos para React. 
- `Back-end`: TypeScript.

## Comandos utiles para actualizar todos los paquetes via NPM

Debe realizarse en el siguiente orden de comandos (preferiblemente en una shell con permisos de administrador), recuerde estar en la carpeta client
```
npm outdated
```
```
npm install -g npm-check-updates
```
```
ncu -u
```
```
npm install
```

# Sitios web utiles
- [Iconos disponibles de PrimeReact](https://primereact.org/icons/)
- [Componentes disponibles de PrimeReact](https://primereact.org/message/)
- [CSS configurado para PrimeReact](https://www.primefaces.org/primeflex/fontsize)
- [Google Fonts](https://fonts.google.com/)
- [Google Icons](https://fonts.google.com/icons)
- [Web Tokens TypeScript](https://jwt.io/)
- [Node Mailer](https://nodemailer.com/about/)
