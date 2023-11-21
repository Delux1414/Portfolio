document.addEventListener('DOMContentLoaded', function () {

    var ratingInput = document.getElementById('ratingInput');
    var calificarBtn = document.getElementById('calificarBtn');
    var stars = document.querySelectorAll('.stars i');


    calificarBtn.addEventListener('click', function () {

        const ratingValue = parseFloat(ratingInput.value);
        const fullStars = Math.floor(ratingValue);

        

        stars.forEach((star, index) => {
            star.className = 'fa-regular fa-star';

            if (index < fullStars) {
                star.className = 'fa-solid fa-star';
            } else if (index === fullStars) {
                const remainder = ratingValue - fullStars;

                if (remainder > 0.2 && remainder <= 0.7) {
                    star.className = 'fa-solid fa-star-half-stroke';
                } else if (remainder > 0.7) {
                    star.className = 'fa-solid fa-star';
                }
            }
        });
    });
});
