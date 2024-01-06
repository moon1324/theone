document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const menuId = this.dataset.menu;
        const nav = document.getElementById(menuId);

        document.querySelectorAll('.side-navigation').forEach(nav => {
            if (nav.id !== menuId) {
                nav.style.left = '-280px';
            }
        });

        if (nav.style.left === '0px') {
            nav.style.left = '-280px';
        } else {
            nav.style.left = '0px';
        }
    });
});

document.addEventListener('click', function(e) {
    document.querySelectorAll('.side-navigation').forEach(nav => {
        nav.style.left = '-280px';
    });
});