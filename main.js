document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://fakestoreapi.com/products?limit=10';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayProducts(data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });

    function displayProducts(products) {
        const productsContainer = document.getElementById('products-container');

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productCard.appendChild(productImage);

            const productTitle = document.createElement('h2');
            productTitle.textContent = product.title;
            productCard.appendChild(productTitle);

            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;
            productCard.appendChild(productDescription);

            productsContainer.appendChild(productCard);
        });
    }
});
