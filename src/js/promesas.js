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

export const buscarHeroes = (id) =>{
    const heroe = heroes[id];
    return new Promise( (resove, reject) => {
        ( heroe ) ? resove( heroe ) : reject(`No se encontró el héroe con el ${ id }`);
    });
}

export const buscarHeroesAsync = async(id) =>{
    const heroe = heroes[id];

 
    if(heroe){
        return heroe
    }else{
        throw `No se encontró el héroe con el ${ id }`
    }
  
   
}