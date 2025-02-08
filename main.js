const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeButton = document.getElementById('close-btn');


galleryItems.forEach(item => {
    item.addEventListener('click', (event) => {
        modalImage.src = event.target.src;
        modal.style.display = 'flex';
    })
})

closeButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Сховуємо модальне вікно
});

modal.addEventListener('click',(event)=>{
    if (event.target === modal) {
        modal.style.display = 'none';
    }
})