// Vendor
import 'bootstrap';
import 'flickity';
import 'flickity-imagesloaded';
import 'flickity-as-nav-for';
import 'flickity-fade';
import 'jarallax';

// Theme
import './aos';
import './bigpicture';
import './bootstrap';
import './choices';
import './countup';
import './dropzone';
import './flickity';
import './highlight';
import './isotope';
import './jarallax';
import './map';
import './modal';
import './navbar-dropdown';
import './navbar';
import './popover';
import './pricing';
import './quill';
import './smooth-scroll';
import './tooltip';
import './typed';
// User
import './user.js';

// Affiche Alerts Toasts
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
    return new Toast(toastEl)
})
toastList.forEach(toast => {
    toast.show()
});