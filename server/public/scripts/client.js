console.log( 'js' );

function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  axios({
      method: 'GET',
      url: '/koalas'
  })
  .then((response) => {
    console.log('get Koalas is running...', response.data)
    saveKoala(response.data)
  })
  .catch((err) => {
    console.error('Error in /GET koalas', err)
  })
} // end getKoalas

function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
}

getKoalas();

function addKoala(koalaToAdd){
axios({
  method: 'POST',
  url: '/koalas',
  data: koalaToAdd
})
.then((response) => {
  console.log('addKoala() is working...', response.data)
  getKoalas()
})
.catch((err) => {
  console.error('Error in POST', err)
    alert('Unable to add Koala at this time. Please try again later.');
})
}