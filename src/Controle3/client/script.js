document.addEventListener("DOMContentLoaded", function() {
    const hamBurger = document.querySelector(".toggle-btn");

    if (hamBurger) {
        hamBurger.addEventListener("click", function () {
            const sidebar = document.querySelector("#sidebar");
            if (sidebar) {
                sidebar.classList.toggle("expand");
            } else {
                console.error("#sidebar not found");
            }
        });
    } else {
        console.error(".toggle-btn not found");
    }
});
