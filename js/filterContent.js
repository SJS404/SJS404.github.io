document.addEventListener('DOMContentLoaded', function() {
    const filterItems = document.querySelectorAll('.filter-item');
    const proCards = document.querySelectorAll('.pro-card');
    const excludedFilters = ["Hardware", "Software", "Networking", "Coding"];

    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            const filter = item.getAttribute('data-filter');

            filterItems.forEach(fi => fi.classList.remove('selected'));

            item.classList.add('selected');

            proCards.forEach(card => {
                const tags = Array.from(card.querySelectorAll('ul li img')).map(img => img.getAttribute('title'));

                if (filter === 'All') {
                    card.style.display = 'flex';
                } else if (filter === 'Other') {
                    if (tags.every(tag => !excludedFilters.includes(tag))) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                } else {
                    if (tags.includes(filter)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});
