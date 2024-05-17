console.log( 'js' );

function getKoalas(){
  // console.log( 'in getKoalas' );
  // axios call to server to get koalas
  axios({
      method: 'GET',
      url: '/koalas'
  })
  .then((response) => {
    // console.log('get Koalas is running...', response.data)
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
    // console.log('addKoala() is working...', response.data)
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
  // console.log('koala object: ', koala)
  if (koala.age.length === 0 || koala.name.length === 0 || koala.favorite_color.length === 0 || koala.ready_for_transfer.length === 0 || koala.notes.length === 0){
    return
  }
  document.getElementById('nameIn').value = '';
  document.getElementById('ageIn').value = '';
  document.getElementById('colorIn').value = '';
  document.getElementById('readyForTransferIn').value = '';
  document.getElementById('notesIn').value = '';
  
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
    // console.log('koala is ', koala)
  
if (koala.ready_for_transfer === true){
    koalaZoo.innerHTML += `
      <tr>
      <td>${koala.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="editButton" onClick="editName(${koala.id},document.getElementById('nameIn').value)">Edit</button></td>  
      <td>${koala.age}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="editButton" onClick="editAge(${koala.id},document.getElementById('ageIn').value)">Edit</button></td>
      <td>${koala.favorite_color}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="editButton" onClick="editColor(${koala.id},document.getElementById('colorIn').value)">Edit</button></td>
      <td class="ready">✅&nbsp;&nbsp;&nbsp;  Ready! &nbsp;&nbsp;&nbsp; ✅</td>
      <td>${koala.notes}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="editButton" onClick="editNotes(${koala.id},document.getElementById('notesIn').value)">Edit</button></td>
      <td><button id="not_ready" class="not_ready" onClick="markReady(${koala.id},false)">Not Ready</button> </td>
      <td><button class="delete_button" onClick="deleteKoala(${koala.id})">Delete</button></td>
      
        
      </tr>
    `;
}
else {
  koalaZoo.innerHTML += `
      <tr>
      <td>${koala.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="editButton" onClick="editName(${koala.id},document.getElementById('nameIn').value)">Edit</button></td>  
      <td>${koala.age}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="editButton" onClick="editAge(${koala.id},document.getElementById('ageIn').value)">Edit</button></td>
      <td>${koala.favorite_color}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="editButton" onClick="editColor(${koala.id},document.getElementById('colorIn').value)">Edit</button></td>
      <td class="not_ready">❌ NOT Ready ❌</td>
      <td>${koala.notes}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="editButton" onClick="editNotes(${koala.id},document.getElementById('notesIn').value)">Edit</button></td>
      <td><button id="ready" class="ready" onClick="markReady(${koala.id},true)">Ready for Transfer</button></td>
      <td><button class="delete_button" onClick="deleteKoala(${koala.id})">Delete</button></td>
      
        
      </tr>
    `;
}

  }
}

function markReady(koalaId, isReady){
  console.log("Changing status of...", koalaId, isReady);
  axios({
   method: "PUT",
   url: "/koalas/ready/" + koalaId,
   data: {ready_for_transfer: isReady}
  })
  .then((response) => {
   getKoalas()
  })
  .catch((error) => {
   console.log('Error', error);
   alert('Something went wrong');
  });
  }

 function editNotes(koalaId, incNotes){
  if (incNotes.length === 0){
    return
  }
axios({
  method: "PUT",
  url: "/koalas/notes/" + koalaId,
  data: {notes: incNotes}
})

.then((response) => {
  console.log('Updating Koala: ',koalaId+ ": "+ incNotes)
  getKoalas()
  document.getElementById('notesIn').value = ''
 })
 .catch((error) => {
  console.log('Error', error);
  alert('Something went wrong');
 });
 }

 
 function editColor(koalaId, incColor){
  if (incColor.length === 0){
    return
  }
axios({
  method: "PUT",
  url: "/koalas/color/" + koalaId,
  data: {favorite_color: incColor}
})

.then((response) => {
  console.log('Updating Koala: ',koalaId+ ": "+ incColor)
  getKoalas()
  document.getElementById('colorIn').value = ''
 })
 .catch((error) => {
  console.log('Error', error);
  alert('Something went wrong');
 });
 }

 function editAge(koalaId, incAge){
  if (incAge.length === 0){
    return
  }
axios({
  method: "PUT",
  url: "/koalas/age/" + koalaId,
  data: {age: incAge}
})

.then((response) => {
  console.log('incoming age', incAge)
  getKoalas()
  document.getElementById('ageIn').value = ''
 })
 .catch((error) => {
  console.log('Error', error);
  alert('Something went wrong');
 });
 }

 function editName(koalaId, incName){
  if (incName.length === 0){
    return
  }
axios({
  method: "PUT",
  url: "/koalas/name/" + koalaId,
  data: {name: incName}
})

.then((response) => {
  console.log('incoming name', incName)
  getKoalas()
  document.getElementById('nameIn').value = ''
 })
 .catch((error) => {
  console.log('Error', error);
  alert('Something went wrong');
 });
 }



function deleteKoala(koalaId) {

  axios({
    method: "DELETE",
    url: `/koalas/${koalaId}`
  })
    .then((response) => {
      console.log('Deleting Koala: ',koalaId)
      getKoalas();
    })
    .catch((error) => {
      console.log('Error', error);
      alert('Something went wrong');
    });
}