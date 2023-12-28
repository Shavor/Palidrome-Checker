'use strict'

const btn = document.querySelector('.btn'),
    result = document.querySelector('.result');

// MADAM
const palidrome = () => {
    const world = document.querySelector('.input-text').value;
    const lenWorld = world.length;

    const start = world.substring(0, Math.floor(lenWorld / 2)).toLowerCase();
    const end = world.substring(lenWorld - Math.floor(lenWorld / 2)).toLowerCase();

    const flip = [...end].reverse().join('');
    console.log(flip);

    if(start == flip) {
        result.innerHTML = `${world.toUpperCase()} это полифил`
    } else {
        result.innerHTML = `${world.toUpperCase()} не это полифил`
    }
}

btn.addEventListener('click', palidrome);

