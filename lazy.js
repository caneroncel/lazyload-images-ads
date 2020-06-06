/* 
  Lazy load images and add ad boxes
  Author: Caner ÖNCEL 
  https://www.isinuzmani.com
*/

/* Create Ad Element */
function createAd() {

    let adbox = document.createElement('div');
        adbox.innerHTML = "Advertisement!";
        adbox.className = "ad";

    return adbox;
}

/* Lazy Actions */
let images = [...document.querySelectorAll('.lazyimg')];

function lazyActions() {

    images.forEach(image => {

        if (image.offsetTop < window.innerHeight + window.pageYOffset + 300) {
            if(image.classList.contains("loaded") === false) {

                image.src = image.dataset.src;

                image.onload = function(){
                    image.classList.add('loaded');
                    image.parentElement.after(createAd());
                };

            }

        }

    })

}

lazyActions();

window.addEventListener('scroll', lazyActions);
window.addEventListener('resize', lazyActions);
