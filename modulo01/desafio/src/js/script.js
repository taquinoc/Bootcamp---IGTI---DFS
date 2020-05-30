console.log('running')
const url = 'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'

const fetchApi = fetch(url)

fetchApi.then(res => {
    res.json().then(data => {
        dataResult = data.results
        showData(dataResult)
    })
})
.catch(err =>{
    console.log(err)
})

function showData(data) {
    data.forEach(element =>{
        document.querySelector
    })
}