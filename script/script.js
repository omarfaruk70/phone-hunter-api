// collected data using fetch api
const loadPhone = async (searchText,isShowAll) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await response.json();
  // console.log(data)
  const phones = data.data;
  displayphones(phones, isShowAll);
  // console.log(phones) 
};

// display all data from loadphone function
const displayphones = (phones, isShowAll) => {
    const cardContainer = document.getElementById('phoneContainer');
    cardContainer.textContent = '';
    console.log(phones.length)
    const showAllContainer = document.getElementById('showAll-container');
    // display show all button if there are more than 20 phones.
    if(phones.length > 12 && !isShowAll){
      showAllContainer.classList.remove('hidden');
    }else{
      showAllContainer.classList.add('hidden');
    };
    if(!isShowAll){
      phones = phones.slice(0, 12) 

    }
    phones.forEach((phone) => {
    // console.log(phone)
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card mx-auto bg-red-100 shadow-xl`;
    phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>${phone.slug}</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;
    cardContainer.appendChild(phoneCard)    
  });
  toggleSpinner(false)
};
// handle search functionality
const handleSearch = (isShowAll) =>{
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // console.log(searchText)
  toggleSpinner(true)
  loadPhone(searchText, isShowAll);
}


// spinner functionality 
const toggleSpinner = (isLoading) =>{
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden');
  }else{
    loadingSpinner.classList.add('hidden')
  }
}

// handle show all Button
const handleShowAll = () =>{
  handleSearch(true)
}