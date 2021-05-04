import { buscarHeroes as  buscarHeroesCalbbak} from './js/callback.js';
import { buscarHeroes } from './js/promesas.js';
// import {  Promesa } from './js/promise.all';
import { buscarHeroes as buscarHeroesWidthPromises, buscarHeroesAsync} from './js/promesas';
import { obtenerHeroesArr, obtenerHeroeAwait } from './js/await'; 

import './css/componentes.css';
import './styles.css';

const heroesId = 'capi';
const heroesId2 = 'iron';

/* 
    Calbback
*/
buscarHeroesCalbbak( heroesId, ( err, heroe )=>{
    ( err ) ? console.error(err) : console.log(heroe)
});

/* 
    Premesas
*/
buscarHeroes( heroesId ).then( heroe => {
    console.log( `Enviando ${ heroe.nombre } al trabajo` )
});

Promise.all([ buscarHeroes(heroesId), buscarHeroes(heroesId2)  ])
    .then( heroe => {
        console.log(`Enviando a ${ heroe[0].nombre } y ${ heroe[1].nombre } a la misión`);
}).catch(err => {
    alert( err );
});

/* 
    Async
*/

buscarHeroesWidthPromises('spider').then(heroe => console.table(heroe));
buscarHeroesAsync('iron').then(console.table);

/*
    await
*/

obtenerHeroesArr().then(console.table);

obtenerHeroeAwait('capi3')
                .then( heroe => { console.log(heroe) })
                .catch(err =>{
                    console.log(err)
                });