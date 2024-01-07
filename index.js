// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

document.addEventListener('DOMContentLoaded', function () {
      
    function showModal(imageUrl) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');

        modalImage.src = imageUrl;
        modal.style.display = 'flex';
    }

    
    function closeModal() {
        const modal = document.getElementById('imageModal');
        modal.style.display = 'none';
    }

    document.querySelector('.card1').addEventListener('click', function () {
        showModal('images/poster2015.jpg');
    });

    document.querySelector('.card2').addEventListener('click', function () {
        showModal('images/poster2016.jpg');
    });

    document.querySelector('.card3').addEventListener('click', function () {
        showModal('images/poster2017.jpg');
    });

    document.querySelector('.card4').addEventListener('click', function () {
        showModal('images/silicon.jpg');
    });

   
    document.getElementById('imageModal').addEventListener('click', function (event) {
        if (event.target === this) {
            closeModal();
        }
    });


    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

