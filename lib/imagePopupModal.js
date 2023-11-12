// Image Popup Modal start
// Get the modal
var modal = $("#myModal");
var modalImg = modal.find('.modal-content');

// Get the image and insert it inside the modal - use its "alt" text as a caption
function imgPopupModal(e){
    console.log(e);
    modalImg.attr('src', $(e).attr('src'));
    modal.css('z-index',1000);
    modal.show();
}


// Get the elements that closes the modal
var modalCloser = $(".close");

// When the user clicks on the close element, close the modal
modalCloser.click(function() {
  modal.hide();
});

const image = document.querySelector('.image-clickable');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('close-modal');
const modalHeader = document.getElementById('modal-header'); // Add an ID for the header

let isDragging = false;
let initialX;
let initialY;

modalHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    initialX = e.clientX - modal.getBoundingClientRect().left;
    initialY = e.clientY - modal.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const offsetX = e.clientX - initialX;
    const offsetY = e.clientY - initialY;

    modal.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.src = image.src;
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.style.transform = ''; // Reset the modal's position
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        modal.style.transform = ''; // Reset the modal's position
    }
});

// Image Popup Modal end
