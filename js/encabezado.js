function Encabezado(){
    document.addEventListener('DOM', function() {
        const openPopupButton = document.getElementById('openPopup');
        const popup = document.getElementById('popup');
    
        openPopupButton.addEventListener('click', function() {
            popup.style.display = 'block';
        });
    });
}

export { Encabezado }