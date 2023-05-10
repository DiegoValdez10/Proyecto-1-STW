# Tecnologías Proyecto 1
1. Clonar repositorio `https://github.com/DiegoValdez10/Proyecto-1-STW`
2. Moverse al directorio: `cd proyecto1`.<br />
3. Correr `npm install` para instalar dependencias.<br />
4. Correr `npm start` para ver la página.

## Commands

- `npm start`
- `npm run build`
- `npm test`
- `npm run eject`
- `npm run webpack`

# Estructura
## Proyecto1 
Es la carpeta donde se encuentra la configuración (package.json, webpack y Babel)
## .Firebase
Esta carpeta fue donde firebase realizó su deploy y creo el hosting para el proyecto
## Dist_webpack_Babel
En esta carpeta fue donde webpack montó todo el proyecto y donde el bundle.js fue alojado
## Public
En la carpeta de public se encuentra el html del proyecto
## SRC
### Dentro de SRC se encuentran los siguientes componentes:
- Fonts
- Images
- App.js 
function App() {
  const ImagenesRef = useRef(null);
  const careerRef = useRef(null);
  const originsRef = useRef(null);
  const newsletterRef = useRef(null);
  const partnersRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
- Brand.js
- Carrusel.js
export default function VideoCarousel() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoProperties = [
    {
      id: 1,
      src: Sporting,
      text: "Sporting",
    },
    {
      id: 2,
      src: Manchester,
      text: "Manchester United",
    },
    {
      id: 3,
      src: REALMADRID,
      text: "RealMadrid",
    },
    {
      id: 4,
      src: Juve,
      text: "Juventus",
    },
    {
      id: 5,
      src: Portuga,
      text: "Portugal",
    },
  ];
- Imagenes.js
const Imagenes = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  const toggleGrayscale = (event) => {
    event.currentTarget.classList.toggle("grayscale");
  }
- index.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
- Origins.js
  const handleVideoClick = () => {
    if (!videoStarted) {
      setVideoStarted(true);
      preloadImage();
      const videoElement = document.querySelector(".reproductor");
      videoElement.play();
    }
    setPlaying(true);
  };

    return (
        <div className="conteiner">
            <div className="Tunned">
                <h1>STAY TUNED</h1>
            </div>
            <div className="texto"><p>Subscribe my newsletter and don’t miss any update on new products, promotions or even career events.</p></div>
            <div className="register-container">
                <div className="checkbox-container">
                    <div
                        className={`circle ${isChecked ? "clicked" : ""}`}
                        onClick={handleCircleClick}
                    ></div>
                    <p>I read and accept the privacy policy.</p>
                </div>
                <div className="input-container">
                    <input type="email" placeholder="Email" required />
                    <button type="submit">Subscribe to newsletter</button>
                </div>
            </div>
- Register.js
## React
Es una biblioteca de JavaScript de código abierto utilizada para construir interfaces de usuario interactivas y dinámicas.
## Firebase
Link a página web: https://proyecto-1-diego-valdez.web.app
## Webpack
Es una herramienta de construcción de módulos para aplicaciones web que permite agrupar y procesar archivos de código fuente en un único archivo JavaScript optimizado para la producción.
## Babel
Es una herramienta de transpilación de JavaScript que permite escribir código en una versión de JavaScript y convertirlo a una versión compatible con navegadores o entornos de ejecución más antiguos. 
## NodeJS
Es un entorno de tiempo de ejecución de JavaScript del lado del servidor que permite a los desarrolladores construir aplicaciones escalables y de alta performance usando JavaScript en el servidor.
## SCSS
Es una extensión de CSS que añade características adicionales como variables, anidamiento de selectores, mixins y funciones, entre otros. SCSS es un preprocesador CSS que permite a los desarrolladores escribir estilos más eficientemente y organizados en comparación con CSS puro.
## PostCSS
Es una herramienta de procesamiento de CSS que permite a los desarrolladores escribir CSS moderno y transformarlo en CSS compatible con navegadores antiguos. PostCSS es una alternativa a los preprocesadores de CSS como Sass o Less, y utiliza plugins para procesar y transformar el código CSS. 
## SASS
Es un preprocesador de CSS que permite a los desarrolladores escribir hojas de estilo CSS de manera más eficiente y organizada. Sass añade características adicionales a CSS, como variables, anidamiento de selectores, mixins, funciones, importaciones y herencia, entre otras. 
## Bootstrap
Es un framework de diseño web de código abierto que proporciona a los desarrolladores una amplia variedad de herramientas y componentes para crear sitios web y aplicaciones web con un diseño responsive y atractivo.


