import { serviceProducts } from "../services/product-services.js";
const cardContainer = document.querySelector("[data-card]");
const form = document.querySelector("[data-form]");



function createCard({ name, price, img, id }) {
    const card = document.createElement("div");
    card.classList.add("card")
    card.innerHTML = `       
        <img class="card-img" src="${img}" alt="${name} ${id}" />
        <div class="card-name">
            <p>${name}</p>
        </div>
        <div class="card-info">        
            <p>$${price}</p>
            <button id="boton-borrar"><img src="./Assets/trash.png" alt="Eliminar" /></button>
            </div>
                
    `
    const deleteButton = card.querySelector("#boton-borrar");
    deleteButton.addEventListener("click",(e)=>{
        console.log(id);
        serviceProducts.deleteProducts(id); 
    })

    cardContainer.appendChild(card);
    return card;
}

const renderCard = async () => {
    try {
        const listProducts = await serviceProducts.productList();
        console.log(listProducts);
        listProducts.forEach(prod => {
            cardContainer.appendChild(
                createCard({
                    name: prod.name,
                    price: prod.price,
                    img: prod.img,
                    id: prod.id
                })
            )
            
        });
        /* listProducts.forEach(product => {
            cardContainer.appendChild(createCard(product.name, product.price, product.img, product.id));
        }); */
    } catch (error) {
        console.log(error);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const img = document.querySelector("[data-img]").value;
    serviceProducts
        .createProducts(name, price, img)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    
    renderCard();
})



renderCard();
