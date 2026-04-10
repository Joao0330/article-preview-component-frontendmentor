const cardBtn = document.getElementById('cardBtn');
const toastBtn = document.getElementById('toastBtn');
const shareToast = document.querySelector('.shareToast');

cardBtn.addEventListener('click', () => {
	shareToast.classList.toggle('active');
	cardBtn.classList.toggle('active');
});

toastBtn.addEventListener('click', () => {
	shareToast.classList.remove('active');
	cardBtn.classList.toggle('active');
});
