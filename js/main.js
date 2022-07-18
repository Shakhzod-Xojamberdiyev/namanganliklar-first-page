var elOpenModalBtn = document.querySelector(".turn-on");
var elModal = document.querySelector(".modal");
var elCloseModalBtn = document.querySelector(".close-x-bt");

elOpenModalBtn.addEventListener("click" , function(){
    elModal.classList.add("modal-open");
});
elCloseModalBtn.addEventListener("click" , function(){
    elModal.classList.remove("modal-open");
});
