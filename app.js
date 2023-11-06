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
// Image Popup Modal end
