document.addEventListener('DOMContentLoaded', function() {
    const filterItems = document.querySelectorAll('.filter-item');
    const proCards = document.querySelectorAll('.pro-card');

    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            const filter = item.getAttribute('data-filter');

            // Remove 'selected' class from all filter items
            filterItems.forEach(fi => {
                fi.classList.remove('selected');
            });

            // Add 'selected' class to the clicked filter item
            item.classList.add('selected');

            proCards.forEach(card => {
                const tags = Array.from(card.querySelectorAll('ul li img')).map(img => img.getAttribute('title'));
                
                if (filter === 'All' || tags.includes(filter)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
