import { buscarHeroesAsync } from './promesas.js'

const heroesId = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async() => Promise.all(heroesId.map( buscarHeroesAsync ) );

export const obtenerHeroeAwait = async( id ) => {

    try{
        const heroe = await buscarHeroesAsync( id )
        return heroe
    }catch(err){
        return{
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }
    }

}
    
