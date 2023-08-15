document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menuButton');
    var dropdownMenu = document.getElementById('dropdownMenu');
    
    menuButton.addEventListener('click', function() {
        dropdownMenu.classList.toggle('hidden');
    });
});
