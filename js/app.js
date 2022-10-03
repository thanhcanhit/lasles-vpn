$(".customer__list").slick({
	dots: true,
	infinite: true,
	speed: 500,
	autoplay: true,
	autoplaySpeed: 4000,
	slidesToShow: 3,
	slideToScroll: 1,
	variableWidth: true,
	nextArrow: '<button class="btn-next"><i class="fa-solid fa-arrow-right"></i></button>',
	prevArrow: '<button class="btn-prev"><i class="fa-solid fa-arrow-left"></i></button>',
});

let isOpen = false;
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.header__list');
const layer = document.querySelector('.layer');

const handleMenuToggle = () => {
	isOpen = !isOpen;
	menuBtn.classList.toggle('active', isOpen);
	menuList.classList.toggle('active', isOpen);
	layer.classList.toggle('active', isOpen);
}

menuBtn.onclick = handleMenuToggle;
layer.onclick = menuBtn.onclick;