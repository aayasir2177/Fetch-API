(async () => {

  // Fetching Data
  const res = await fetch("https://dummyjson.com/products");
  let data = await res.json();

  // Targeting Main Container
  let container = document.querySelector("[container]");
  
  // Populating Data
  data.products.forEach((product) => {

    // Card Template
    let template = document.createElement("div");
    template.innerHTML = `
    <div class="card m-3" card>
    <img
    src="${product.images[0]}"
    alt="product photo"
    class="img-fluid card-img-top"
    card-thumbnail
    />
    <div class="card-body">
    <h4 class="card-title text-center mb-4" card-title>${product.title}</h4>
    <div class="card-text">
    <p><strong>Price:</strong><br /></p>
    <p card-price>${product.price}</p>
    <p><strong>Description:</strong><br /></p>
    <p card-description>${product.description}</p>
    </div>
    </div>
    </div>
    `;

    container.appendChild(template);
  });
})();
