const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open'); 
}
let downButton = document.querySelector('.down');

downButton.addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah perilaku default tautan
    const targetId = this.getAttribute('href'); // Mendapatkan ID target
    const targetElement = document.querySelector(targetId); // Menemukan elemen target

    // Menggunakan scroll ke target
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth' // Efek scroll yang halus
        });
    }
});
