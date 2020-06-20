'use strict';

var fs = require('fs');
const statesJson = require('./files/Estados.json')
const citiesJson = require('./files/Cidades.json')


/**1.
 *  Implementar um método que irá criar um arquivo JSON para cada estado representado no arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve ser o UF do estado, por exemplo: MG.json. */

const statesCities = []
statesJson.forEach((state, index) => {
    statesCities.push({ id: state.ID, state: state.Sigla, cities: [] })
    citiesJson.forEach(city => {
        if (state.ID === city.Estado) {
            statesCities[index].cities.push(JSON.stringify(city))
        }
    })
})

// statesCities.forEach(element => {
//     fs.writeFile(`./states/${element.state}.json`, `[${element.cities}]`,  function(err){
//         if(err) throw err;
//         // console.log('complete')
//     })
// })

/**2.
 *  Criar um método que recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON correspondente e retorne a quantidade de cidades daquele estado. */

// const countCities = (stateName) => {

//     const stateData = fs.readFileSync(`./states/${stateName}.json`)
//     const stateJson = JSON.parse(stateData)
//     let totalCities = stateJson.length

//     return totalCities
// }

// console.log(countCities('MG'))

/**
 * 3.
 * Criar um método que imprima no console um array com o UF dos cinco estados que mais possuem cidades, seguidos da quantidade, em ordem decrescente. Utilize o método criado no tópico anterior. Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]
 */


// const countAllCities = (dataStates) => {
//     const allStates = []
//     dataStates.forEach(element => {
//         const stateData = fs.readFileSync(`./states/${element.Sigla}.json`)
//         const stateJson = JSON.parse(stateData)
//         let totalCities = stateJson.length

//         allStates.push({UF: `${element.Sigla}`, total: totalCities})
//     })

//     const sortedArray = allStates.sort(function(a,b) {
//         return b.total - a.total
//     })

//     const slicedArray = sortedArray.slice(0,5)

//     return slicedArray
// }

// console.log(countAllCities(statesJson))


/** 4. 
 * Criar um método que imprima no console um array com o UF dos cinco estados que menos possuem cidades, seguidos da quantidade, em ordem decrescente. Utilize o método criado no tópico anterior. Exemplo de impressão: [“UF - 30”, “UF - 27”, “UF - 25”, “UF - 23”, “UF - 21”] */

// const countAllCities = (dataStates) => {
//     const allStates = []
//     dataStates.forEach(element => {
//         const stateData = fs.readFileSync(`./states/${element.Sigla}.json`)
//         const stateJson = JSON.parse(stateData)
//         let totalCities = stateJson.length

//         allStates.push({UF: `${element.Sigla}`, total: totalCities})
//     })

//     const sortedArray = allStates.sort(function(a,b) {
//         return a.total - b.total
//     })

//     const slicedArray = sortedArray.slice(0,5)

//     return slicedArray
// }

// console.log(countAllCities(statesJson))

/**5.
 * Criar um método que imprima no console um array com a cidade de maior nome de cada estado, seguida de seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].
 */


const checkLengthNameAndOrderByAlphabetic = (dataStatesAndCities) => {
    const allCitiesAndName = []
    dataStatesAndCities.forEach((allCities, index) => {
        allCities.cities.forEach(eachCities => {
            let citiesParsed = JSON.parse(eachCities)

            allCitiesAndName.splice(index, 0, { UF: allCities.state, nameLength: citiesParsed.Nome.length, name: citiesParsed.Nome })
        })
    })

    const sortedCitiesName = allCitiesAndName.sort(function (a, b) {
        return b.nameLength - a.nameLength
    })


    return allCitiesAndName

    // sortedCitiesName.forEach(element =>{

    // })
    // return  sortedCitiesName
}

console.log(checkLengthNameAndOrderByAlphabetic(statesCities))