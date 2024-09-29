window.onload = function() {
    // Get the modals
    const orderModal = document.getElementById("orderModal");
    const searchModal = document.getElementById("searchModal");
    const cartModal = document.getElementById("cartModal");

    // Get the buttons that open the modals
    const orderBtn = document.getElementById("orderBtn");  // Order Now button
    const searchBtn = document.getElementById("searchBtn");
    const cartBtn = document.getElementById("cartBtn");

    // Get the close elements (if they exist)
    const closeOrderModal = document.querySelector("#orderModal .close");
    const closeSearchModal = document.querySelector("#searchModal .close");
    const closeCartModal = document.querySelector("#cartModal .close");

    // Open the Order modal when clicking Order Now button
    if (orderBtn && orderModal) {
        orderBtn.onclick = function() {
            orderModal.style.display = "block";
        }
    }

    // Open the search modal when clicking search icon
    if (searchBtn && searchModal) {
        searchBtn.onclick = function() {
            searchModal.style.display = "block";
        }
    }

    // Open the cart modal when clicking cart icon
    if (cartBtn && cartModal) {
        cartBtn.onclick = function() {
            cartModal.style.display = "block";
        }
    }

    // Close the Order modal when clicking on <span> (x)
    if (closeOrderModal) {
        closeOrderModal.onclick = function() {
            orderModal.style.display = "none";
        }
    }

    // Close the Search modal when clicking on <span> (x)
    if (closeSearchModal) {
        closeSearchModal.onclick = function() {
            searchModal.style.display = "none";
        }
    }

    // Close the Cart modal when clicking on <span> (x)
    if (closeCartModal) {
        closeCartModal.onclick = function() {
            cartModal.style.display = "none";
        }
    }

    // Close the modal when clicking anywhere outside of it
    window.onclick = function(event) {
        if (event.target == orderModal) {
            orderModal.style.display = "none";
        } else if (event.target == searchModal) {
            searchModal.style.display = "none";
        } else if (event.target == cartModal) {
            cartModal.style.display = "none";
        }
    }

    // Handle form submission for the order form
    const orderForm = document.getElementById("orderForm");
    if (orderForm) {
        orderForm.onsubmit = function(event) {
            event.preventDefault(); // Prevent page reload on form submission
            const coffeeType = document.getElementById("coffeeType").value;
            const quantity = document.getElementById("quantity").value;

            // Simple alert to show the order details
            if (coffeeType && quantity > 0) {
                alert(`Thank you for your order!\nYou ordered ${quantity} ${coffeeType}(s).\nYour order will be ready soon!`);
                orderModal.style.display = "none";  // Close modal after submission
            } else {
                alert("Please select a coffee type and quantity.");
            }
        }
    }

    // Handle search submission (if search modal exists)
    const searchSubmit = document.getElementById("searchSubmit");
    if (searchSubmit) {
        searchSubmit.onclick = function() {
            const searchQuery = document.getElementById("searchInput").value;
            alert(`You searched for: ${searchQuery}`);
            searchModal.style.display = "none"; // Close search modal after submission
        }
    }

    // Handle form submission for the review form
    const reviewForm = document.getElementById("reviewForm");
    if (reviewForm) {
        reviewForm.onsubmit = function(event) {
            event.preventDefault(); // Prevent page reload on form submission

            const name = document.getElementById("name").value;
            const rating = document.getElementById("rating").value;
            const message = document.getElementById("message").value;

            // Simple alert to show the review details
            if (name && rating && message) {
                alert(`Thank you for your review, ${name}!\nRating: ${rating}\nReview: ${message}`);
                reviewForm.reset(); // Reset the form after submission
            } else {
                alert("Please fill in all fields.");
            }
        }
    }
};
