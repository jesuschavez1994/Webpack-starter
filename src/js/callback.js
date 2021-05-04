import '../css/componentes.css';

const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar golpes sin morir'
    },
    iron: {
        nombre: 'Iroman',
        poder: 'Mucho dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Telaraña'
    }
}

export const buscarHeroes = (id, callback) =>{

    const heroe = heroes[id];

    callback =  ( heroe  ) ? callback(null, heroe) : 
                callback(`No se encontró el héroe con el ${ id }`);

}