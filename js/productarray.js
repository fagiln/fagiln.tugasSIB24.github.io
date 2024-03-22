let elementBody = document.getElementById("articles");

let data = [
  {
    id: "1",
    name: "Nasi Goreng",
    price: "20000",
    description: "Ini adalah deskripsi Nasi Goreng",
  },
  {
    id: "2",
    name: "Mie Goreng",
    price: "20000",
    description: "Ini adalah deskripsi Mie Goreng",
  },
  {
    id: "3",
    name: "Nasi Pecel",
    price: "8000",
    description: "Ini adalah deskripsi Nasi Pecel",
  },
  {
    id: "4",
    name: "Es Teh",
    price: "4000",
    description: "Ini adalah deskripsi Es Teh",
  },
  {
    id: "5",
    name: "Es Jeruk",
    price: "5000",
    description: "Ini adalah deskripsi Es Jeruk",
  },
  {
    id: "6",
    name: "Es Kelapa",
    price: "6000",
    description: "Ini adalah deskripsi Es Kelapa",
  },
];

function show() {
    console.log(data);
    data.forEach((element) => {
        elementBody.innerHTML += `
       <article id="${element.id}">
       <div class="article-wrapper">
         <figure>
           <img src="assets/img/${element.name}.png" alt="" />
         </figure>
         <div class="article-body">
           <h2>${element.name}</h2>
           <h3>Rp.${element.price}</h3>
           <p>
            ${element.description}
           </p>
           <div style = "display : flex; justify-content : space-between">
       
           </div>
         </div>
       </div>
     </article>
       `;
      });
}
show();
