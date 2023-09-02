const loadPhone = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=samsung"
  );
  const data = await response.json();
  const phones = data.data;
  displayphones(phones);
  // console.log(phones)
};

const displayphones = (phones) => {
    const cardContainer = document.getElementById('phoneContainer')
  phones.forEach((phone) => {
    console.log(phone)
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card mx-auto bg-orange-100 shadow-xl`;
    phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>${phone.slug}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;
    cardContainer.appendChild(phoneCard)    
  });
};
loadPhone();
