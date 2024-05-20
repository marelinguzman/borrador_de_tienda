import { Cargar_productos } from "./cargar_productos.js";
import { Cargar_categorias } from "./cargar_categorias.js";
import { Encabezado } from "./encabezado.js";

let DOM = document.querySelector("#root");
DOM.innerHTML = `
    <header>
       <div class="header-content">
          <h1>Sheinco GO</h1>
          <button id="openPopup"><b>¡Haz tu compra! 💲</b></button>
            <div id="popup" class="popup">
                <h2>Pop-up</h2>
                <input type="text" placeholder="Busca tu compra">
            </div>
        </div>
    </header>

    <main class="body">
        <section id="div_product_list"></section>
        <section id="div_summery_description"></section>
    </main>
    <footer></footer>
`;


    async function obtenerProductos(){
        try{ 
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          Cargar_productos(data);
        } catch (error) { 
          console.error('Error al obtener los productos:' , error); 
        }
    }

obtenerProductos();

Cargar_categorias();