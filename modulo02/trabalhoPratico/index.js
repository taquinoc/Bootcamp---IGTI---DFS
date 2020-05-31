'use strict';

var fs = require('fs');
const statesJson = require('./files/Estados.json')
const citiesJson = require('./files/Cidades.json')


/**1. Implementar um método que irá criar um arquivo JSON para cada estado representado no arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve ser o UF do estado, por exemplo: MG.json. */

const statesCities = []
statesJson.forEach((state, index) => {
    statesCities.push({id: state.ID, state: state.Sigla, cities: []})
    citiesJson.forEach(city => {
        if(state.ID === city.Estado){
            statesCities[index].cities.push(JSON.stringify(city))
        }
    })
})

statesCities.forEach(element => {
    fs.writeFile(`./states/${element.state}.json`, `[${element.cities}]`,  function(err){
        if(err) throw err;
        // console.log('complete')
    })
})

/**2. Criar um método que recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON correspondente e retorne a quantidade de cidades daquele estado. */

const countCities = (stateName) => {

    const stateData = fs.readFileSync(`./states/${stateName}.json`)
    const stateJson = JSON.parse(stateData)
    let totalCities = stateJson.length

    return totalCities
}

console.log(countCities('MG'))

/**
 * 3.
 * Criar um método que imprima no console um array com o UF dos cinco estados que mais possuem cidades, seguidos da quantidade, em ordem decrescente. Utilize o método criado no tópico anterior. Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]
 */

const countAllCities = () => {

    

    return totalCities
}
