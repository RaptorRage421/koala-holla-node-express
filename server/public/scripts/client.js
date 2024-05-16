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
    renderKoala(response.data)
  })
  .catch((err) => {
    console.error('Error in /GET koalas', err)
  })
} // end getKoalas



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

function submitKoala(event) {
  event.preventDefault();
  let warningText = document.querySelector('#required_field')
  console.log('Submit button clicked.');
  let koala = {};
 
  koala.name = document.getElementById('nameIn').value;
  koala.age = document.getElementById('ageIn').value;
  koala.favorite_color = document.getElementById('colorIn').value;
  koala.ready_for_transfer = document.getElementById('readyForTransferIn').value;
  koala.notes = document.getElementById('notesIn').value;
  console.log('koala object: ', koala)
    // document.getElementById('author').value = ''
    // document.getElementById('title').value = ''
    addKoala(koala)
    

}
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

function renderKoala(koalas) {
  const koalaZoo = document.getElementById('viewKoalas')
  koalaZoo.innerHTML = '';

  for (let i = 0; i < koalas.length; i += 1) {
    let koala = koalas[i];
    console.log('koala is ', koala)
  

    koalaZoo.innerHTML += `
      <tr>
      <td>${koala.name}</td>  
      <td>${koala.age}</td>
      <td>${koala.favorite_color}</td>
      <td>${koala.ready_for_transfer}</td>
      <td>${koala.notes}</td>
      <td><button class="delete_button" onClick="deleteKoala(${koala.id})">DELETE🗑️</button></td>
      
        
      </tr>
    `;

  }
}

function deleteKoala(koalaId) {

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