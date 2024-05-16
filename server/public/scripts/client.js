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

function saveKoala(koala) {
  const koalaZoo = document.getElementById('viewKoalas')
  viewKoalas.innerHTML = '';

  for (let i = 0; i < koalas.length; i += 1) {
    let koala = koalas[i];
  

    viewKoalas.innerHTML += `
      <tr>
      <td>${koala.name}</td>  
      <td>${koala.age}</td>
      <td>${koala.favorite_color}</td>
      <td>${koala.ready_for_transfer}</td>
      <td><button class="delete_button" onClick="deleteKoala(${koala.id})">DELETE🗑️</button></td>
      
        
      </tr>
    `;

  }
}

function deleteKoala(bookId) {

  axios({
    method: "DELETE",
    url: `/koalas/${koalaId}`
  })
    .then((response) => {
      getKoalas();
    })
    .catch((error) => {
      console.log('Error', error);
      alert('Something went wrong');
    });
}