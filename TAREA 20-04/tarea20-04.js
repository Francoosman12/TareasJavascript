/* Ejercicio con arreglo de objetos:
------

- Generar un arreglo de películas (3), donde cada película deberá contener las propiedades (título, género, año, sinopsis). 
- Crear una función que recorra toda las películas imprimiendo la información de las películas por pantalla (incluir un título que diga **CARTELERA**).
*/

let peliculas = [

    {
        titulo: 'Titanic',
        genero: 'Drama',
        año: 1997,
        sinopsis: 'Jack es un joven artista que gana un pasaje para viajar a América en el Titanic, el transatlántico más grande y seguro jamás construido. A bordo del buque conoce a Rose, una chica de clase alta que viaja con su madre y su prometido Cal, un millonario engreído a quien solo interesa el prestigio de la familia de su prometida. Jack y Rose se enamoran a pesar de las trabas que ponen la madre de ella y Cal en su relación. Mientras, el lujoso transatlántico se acerca a un inmenso iceberg.',
    },

    {
        titulo: 'La vida es bella',
        genero: 'Drama',
        año: 1997,
        sinopsis: 'En 1939, a punto de estallar la Segunda Guerra Mundial, Guido llega a Arezzo con la intención de abrir una librería. Allí conoce a Dora y, a pesar de que está prometida con el fascista Rodolfo, acaba casándose con ella y tienen un hijo. Poco después de estallar la guerra, las tropas nazis llegan a Italia y los tres son internados en un campo de concentración. Allí, Guido construye una elaborada fantasía para proteger a su hijo y hacerle creer que la situación es tan solo un juego.',
    },

    {
        titulo: 'Rocky',
        genero:'Acción',
        año: 1976,
        sinopsis:'Rocky Balboa es un desconocido boxeador de Philadelphia a quien se le ofrece la posibilidad de alcanzar la fama y ganar el título mundial de los pesos pesados enfrentándose al actual campeón, Apollo Creed. Con una gran fuerza de voluntad, Rocky se prepara concienzudamente para el combate y también para los cambios que acabarán produciéndose en su vida.',
    },
];

function cartelera() {

    peliculas.forEach(function (presentacion) {
        document.write(
            '<strong>-.-.-.-Cartelera-.-.-.-</strong><br/><br/><br/>'
        );
        document.write(
            `<b>Titulo:</b> ${presentacion.titulo}. <br/><br/>`
        );
        document.write(
            `<b>Genero:</b> ${presentacion.genero}. <br/><br/>`
        );
        document.write(
            `<b>Año:</b> ${presentacion.año}. <br/><br/>`
        );
        document.write(
            `<b>Sinopsis:</b> ${presentacion.sinopsis}. <br/><br/>`
        );
    });
};
