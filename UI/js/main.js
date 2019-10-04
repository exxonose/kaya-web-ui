//GET CONTACT

const url = 'http://localhost:8000/api/v1/counter';

fetch(url).then((resp) => resp.json())
.then((result) => {
   
    const arrayRecord =  result.data.length;
    for(let i=0; i < arrayRecord; i++){
        const mainContainer =  document.querySelector(".mainContainer");
        const parentColumn = document.querySelector(".parentColumn");
        const firstChildValue = document.querySelector(".firstChildValue")
       const secondChildDescription = document.querySelector(".secondChildDescription");
       const descriptor = document.querySelector(".descriptor");

        firstChildValue.textContent = result.data[i].amount;
        descriptor.textContent = result.data[i].name;
        mainContainer.appendChild(parentColumn);
        parentColumn.appendChild(firstChildValue); 
        parentColumn.appendChild(secondChildDescription);
        secondChildDescription.appendChild(descriptor); 
        
         
    }
  
})  
.catch(function(error) {
  console.log(error);
});   


//GET SITEAPP or MENUS

fetch('http://localhost:8000/api/v1/siteapp').then((resp) => resp.json())
.then((result) =>{
  const arrayRec = result.data.length;
for(let i=0; i < arrayRec; i++){
  const navbar = document.querySelector("#navbar");
  const ul = document.querySelector(".navbar-nav");
  const li = document.querySelector(".menu-list");
  
  

  li.textContent = result.data[i].name;
  navbar.appendChild(ul);
  ul.appendChild(li);

}


})

.catch(function(error) {
  console.log(error);
});
 

//GET SERVICES

fetch('http://localhost:8000/api/v1/service').then((resp) => resp.json())
.then((result) =>{
  const arrayData = result.data.length;
for(let i=0; i < arrayData; i++){
  const parentService = document.querySelector(".parentService");
  const serviceContainer = document.querySelector('.servicesContainer');
  const serviceTitle = document.querySelector(".serviceTitle");
  const bannerGrids = document.querySelector(".bannerGrids");
  const bottomGrids = document.querySelector(".bottomGrids");
  const serviceSection = document.querySelector(".serviceSection");
  const bannerIcon = document.querySelector(".bannerIcon");
  const serviceHeading = document.querySelector(".serviceHeading");
  const serviceDescription = document.querySelector(".serviceDescription");
 
  serviceTitle.textContent = result.data[i].title;
  bannerIcon.textContent = result.data[i].icon;
  serviceHeading.textContent = result.data[i].heading;
  serviceDescription.textContent = result.data[i].description;

  parentService.appendChild(serviceContainer);
  serviceContainer.appendChild(serviceTitle);
  serviceContainer.appendChild(bannerGrids);
  bannerGrids.appendChild(bottomGrids);
  bottomGrids.appendChild(serviceSection);
  serviceSection.appendChild(bannerIcon);
  serviceSection.appendChild(serviceHeading);
  serviceSection.appendChild(serviceDescription);


}


})

.catch(function(error) {
  console.log(error);
});
 


//GET TEMPLATE ITEMS

fetch('http://localhost:8000/api/v1/template').then((resp) => resp.json())
.then((result) =>{
  const dataRecords = result.data.length;
  for( let i=0; i < dataRecords; i++){
 const companyTel = document.querySelector(".companyTel");
  companyTel.textContent = result.data[i].phonenumber;

  const companyEmailAdd = document.querySelector(".companyEmailAdd .info");
  companyEmailAdd.textContent = result.data[i].email;

  const companyTele = document.querySelector(".companyTele");
  companyTele.textContent = result.data[i].phonenumber;

  const companyEmailAddy = document.querySelector(".companyEmailAddy");
  companyEmailAddy.textContent = result.data[i].email;

  const companyAdd = document.querySelector(".companyAdd");
  companyAdd.textContent = result.data[i].address;

  
  const aboutTitle = document.querySelector(".aboutTitle");
  aboutTitle.textContent = result.data[i].about_us_subheader;

  const serviceTitle = document.querySelector(".serviceTitle");
  serviceTitle.textContent = result.data[i].service_subheader;

  const copyRight = document.querySelector(".copyRight");
  copyRight.textContent = result.data[i].copyright;

  
  // const facebookIcon = document.querySelector(".facebookIcon");
  // facebookIcon.textContent = result.data[i].facebook;



   }
})

.catch(function(error) {
  console.log(error);
});
 

//POST CONTACT

document.getElementById('postData').addEventListener('submit', postData)

function postData(event){
    event.preventDefault();
   
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let message = document.getElementById('message').value;

    console.log('Posting request to Kaya API...');
    fetch('http://localhost:8000/api/v1/contact/', 
    {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      method: 'POST',
      body: JSON.stringify({firstName, lastName, email, phoneNumber, message})

    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('Contact added:', data);
    })
    .catch(function(error) {
        console.log('Request failure', error);
      }); 

 }
//POST CONTACT

document.getElementById('postData').addEventListener('submit', postData)

function postData(event){
    event.preventDefault();
   
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let message = document.getElementById('message').value;

    console.log('Posting request to Kaya API...');
    fetch('http://localhost:8000/api/v1/contact/', 
    {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    },
      method: 'POST',
      body: JSON.stringify({firstName, lastName, email, phoneNumber, message})

    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('Contact has been cadded', data);
    })
    .catch(function(error) {
        console.log('Request failure', error);
      }); 

 }
 

 //POST QUOTE

 //POST CONTACT

document.getElementById('postQuote').addEventListener('submit', postQuote)

function postQuote(event){
    event.preventDefault();
   
    let companyName = document.getElementById('companyName').value;
    let loadingSite = document.getElementById('loadingSite').value;
    let companyEmail = document.getElementById('companyEmail').value;
    let companyPhone = document.getElementById('companyPhone').value;
    let product = document.getElementById('product').value;
    let tonnage = document.getElementById('tonnage').value;
    let truckType = document.getElementById('truckType').value;

    console.log('Posting request to Kaya API...');
    fetch('http://localhost:8000/api/v1/quote/', 
    {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    },
      method: 'POST',
      body: JSON.stringify({companyName, loadingSite, companyEmail, companyPhone, product, tonnage, truckType})

    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('Quote sent', data);
    })
    .catch(function(error) {
        console.log('Request failure', error);
      }); 

 }