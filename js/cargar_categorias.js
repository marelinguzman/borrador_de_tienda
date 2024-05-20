function Cargar_categorias(){

    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(categorias =>{
                imprimir_categorias(categorias);
            })
}

function imprimir_categorias(lista_categorias){

    let div_imformacion = document.querySelector("#div_summery_description");

    lista_categorias.forEach(element => {
        
        let div = document.createElement("div");
        div.innerHTML = `
            <input type="checkbox" id="${element}">
            <label for="${element}">${element}</label>
        `;
        div_imformacion.appendChild(div);
    });

}

export{Cargar_categorias}