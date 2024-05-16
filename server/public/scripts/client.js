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
  method: 'POST'
})
}