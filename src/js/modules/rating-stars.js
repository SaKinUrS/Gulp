const starsList = document.querySelectorAll('.rating-star');
const starsArray = Array.prototype.slice.call(starsList)

starsArray.forEach(star =>
    star.addEventListener('click', () => {
        const { starValue } = star.dataset;
        star.parentNode.dataset.starTotal = starValue;
    }
    ))
