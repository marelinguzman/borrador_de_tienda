function Cargar_productos(products_list){
    let div_product_list = document.querySelector("#div_product_list");

    products_list.forEach(product => {
        
        let div = document.createElement("div");
        div.classList = "item_product";

        let short_text = product.title.split(' ').slice(0, 5).join(' ');

        div.innerHTML = `
            <div class="box_img">
                <img src="${product.image}" alt="">
            </div>
            <div class="box_description">
                <div class="buy_btn">+ Agregar</div>
                <span class="price"><b>Q ${product.price}   </b></span>
                <span class="name">${short_text}</span>
            </div>
        `;
        div_product_list.appendChild(div);
    });
}

export { Cargar_productos } 