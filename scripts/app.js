/* Get them elements */
//tabs
let productTab = document.querySelector('[aria-controls="product"]');
let reviewsTab = document.querySelector('[aria-controls="reviews"]');
let storyTab = document.querySelector('[aria-controls="our-story"]');
//content
let productArticle = document.getElementById('product');
let reviewsArticle = document.getElementById('reviews');
let storyArticle = document.getElementById('our-story');

/* toggle visible class on content */

////products article
productTab.addEventListener('click', function(){
    //hide previously selected content
    let isVisible = document.querySelector('.visible');
    if (isVisible === productArticle) {

    } else {
        isVisible.classList.remove('visible');


        //add visible class to product article
        productArticle.classList.toggle('visible');

        console.log(productArticle.classList);
    }
});
////reviews article
reviewsTab.addEventListener('click', function(){
    //hide previously selected content
    let isVisible = document.querySelector('.visible');
    if (isVisible === reviewsArticle) {

    } else {
        isVisible.classList.remove('visible');


        //add visible class to product article
        reviewsArticle.classList.toggle('visible');

        console.log(reviewsArticle.classList);
    }
});
////our story article
storyTab.addEventListener('click', function(){
    //hide previously selected content
    let isVisible = document.querySelector('.visible');
    if (isVisible === storyArticle) {

    } else {
        isVisible.classList.remove('visible');


        //add visible class to product article
        storyArticle.classList.toggle('visible');

        console.log(storyArticle.classList);
    }
});