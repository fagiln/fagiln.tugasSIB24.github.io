let elementBody = document.getElementById("articles");
let urlCrudcrud = "bf67e6a86502455f9f87a8809b7b9a8f";
let urlApi = " https://crudcrud.com/api/" + urlCrudcrud + "/products";

function postData() {
  let image = document.getElementById("image").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let description = document.getElementById("description").value;
  if (image != "" && name != "" && price != "" && description != "") {
    let data = {
      image: image,
      name: name,
      price: price,
      description: description,
    };

    fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Produk berhasil dibuat, silahkan refresh browser !!");
        console.log(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  } else {
    alert("input tidak boleh kosong !");
  }
}

function refreshData() {
  fetch(urlApi)
    .then((res) => res.json())
    .then((response) => {
      response.forEach((element) => {
        elementBody.innerHTML += `
       <article id="${element._id}">
       <div class="article-wrapper">
         <figure>
           <img src="${element.image}" alt="" />
         </figure>
         <div class="article-body">
           <h2>${element.name}</h2>
           <h3>Rp.${element.price}</h3>
           <p>
            ${element.description}
           </p>
           <div style = "display : flex; justify-content : space-between">
           <button onclick="deleteData('${element._id}')">Hapus</button>
           <button onclick="updateData('${element._id}')">Update</button>
           </div>
         </div>
       </div>
     </article>
       `;
      });
    });
}
refreshData();
// resetInput();

function updateData(id) {
  let url = urlApi + `/${id}`;
  let image = document.getElementById("image").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let description = document.getElementById("description").value;
  if (image != "" && name != "" && price != "" && description != "") {
    let data = {
      image: image,
      name: name,
      price: price,
      description: description,
    };

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => {
        alert("Produk berhasil diupdate, silahkan refresh browser !!");
        console.log(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  } else {
    alert("input tidak boleh kosong !");
  }
}
// function updateData(id) {
//   let image = document.getElementById("image").value;
//   let name = document.getElementById("name").value;
//   let price = document.getElementById("price").value;
//   let description = document.getElementById("description").value;

//   // Membuat objek data yang akan diperbarui
//   let data = {
//     image: image,
//     name: name,
//     price: price,
//     description: description,
//   };

//   // Mengirim permintaan PUT ke endpoint API dengan ID yang sesuai
//   let url = urlApi + `/${id}`;
//   fetch(url, {
//     method: "PUT", // Menggunakan metode PUT untuk pembaruan data
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to update data");
//       }
//       // Menampilkan pesan sukses atau melakukan tindak lanjut lainnya jika perlu
//       console.log("Data updated successfully");
//     })
//     .catch((error) => {
//       console.error("Error", error);
//     });
// }

function deleteData(id) {
  let url = urlApi + `/${id}`;
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed");
      }
      let deletedElement = document.getElementById(id);
      if (deletedElement) {
        deletedElement.remove();
      }
    })
    .catch((error) => {
      console.error("Error", error);
    });
}

// function resetInput() {
//   document.querySelectorAll("input").value = "";
// }
