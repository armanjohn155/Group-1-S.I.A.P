$(document).ready(function() {

    $(".heart").on("click", function() {
        $(this).toggleClass("is-active");
    });


   const filterButtons = document.querySelectorAll('.btn-filter');
    const products = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterValue = button.dataset.filter;

        // Highlight active button
        filterButtons.forEach(btn => btn.classList.remove('mixitup-control-active'));
        button.classList.add('mixitup-control-active');

        // Filter products
        products.forEach(product => {
          const category = product.dataset.category;
          if (filterValue === 'all' || category === filterValue) {
            product.style.display = 'flex';
            product.style.animation = 'fadeIn 0.4s ease';
          } else {
            product.style.display = 'none';
          }
        });
      });
    });

    // Heart toggle functionality
    document.querySelectorAll('.heart').forEach(heart => {
      heart.addEventListener('click', () => {
        heart.classList.toggle('is-active');
      });
    });


})