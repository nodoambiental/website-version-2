# Características del Portal Gatsby

---

+ Preprocesamiento previo de todo lo posible en un sitio estático para ser servido desde un bucket S3
+ Estilos flexibles y poderosos para acomodar y modernizar la página como se desee, minimizando el tiempo de desarrollo
+ Sistema flexible y extensible que minimize el tiempo de desarrollo de características nuevas que se requieran en un futuro
+ Sistema de compilación automática tanto para archivos modificables por los editores como para el sitio completo
+ Integración con Git para proveer acceso de más bajo nivel a las partes modificables por los editores, y facilitar el trabajo en equipo
+ Health Endpoint y monitoreo con un panel de Grafana para evaluar el estado y evolución del sitio, así como para tener registros de lo que pueda suceder en distintos aspectos del sitio cuando algo no funcione de manera correcta
+ Integración con Mattermost y/o un sistema de administración de proyectos, de manera de mantener al equipo informado y al tanto del trabajo que se realice y los eventos que ocurran
+ Estructura de datos limpia, extensible y diseñada de manera adecuada para facilitar el desarrollo futuro e integración con sistemas externos
+ Sistema de visualización web nativa de datos, con la presentación adecuada e interactividad necesaria para proveer de mayor profundidad y accesibilidad a lo que haga la organización
+ Sistema de roles para limitar el acceso de editores, con el propósito de prevenir que rompan algo sin querer, así como para otorgar distintos poderes según el rol o jerarquía que corresponda
+ Sistema de precompilación basado en MathJax que permite incluir fórmulas y fragmentos de código LaTeX, con tal de poder exhibir con mayor detalle los métodos utilizados para realizar análisis, y poder mostrar aspectos de los datos de manera corercta
+ Sistema de presentación de tablas de datos crudos, para ofrecer los datasets utilizados en los análisis de manera directa, accesible, que permita búsquedas y discriminación, de manera que se facilita la replicabilidad o extensibilidad de los análisis realizados
+ Objetivo: minimizar todo lo posible el tamaño final de la página para los receptores, de manera que cargue más rápido y podamos tener un mayor impacto
