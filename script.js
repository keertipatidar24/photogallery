const liItem = document.querySelectorAll('ul li');
const imgItem = document.querySelectorAll('.product img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxDesc = document.getElementById('lightbox-desc');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const closeBtn = document.getElementById('close');

let currentImgIndex;

liItem.forEach(li => {
    li.onclick = function(){
        liItem.forEach(li =>li.className= "");
        li.className= "active";
    
       const value = li.textContent.toLowerCase();
       // console.log(li.textContent);
        imgItem.forEach(img =>{
          img.style.display= 'none';
        //   console.log(img.getAttribute('data-filter'));
            if(img.getAttribute('data-filter') == value.toLowerCase() || value == "All-images"){
               img.style.display = 'block';
            }
        });
    };   

});

imgItem.forEach((img, index) => {
    img.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
        lightboxDesc.textContent = this.getAttribute('data-description');
        currentImgIndex = index;
    });
});

lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImg && e.target !== prevBtn && e.target !== nextBtn) {
        lightbox.style.display = 'none';
    }
});

closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        lightbox.style.display = 'none';
    }
});

function showImage(index) {
    if (index >= imgItem.length) {
        currentImgIndex = 0;
    } else if (index < 0) {
        currentImgIndex = imgItem.length - 1;
    } else {
        currentImgIndex = index;
    }
    lightboxImg.src = imgItem[currentImgIndex].src;
    lightboxDesc.textContent = imgItem[currentImgIndex].getAttribute('data-description');
}

prevBtn.addEventListener('click', function() {
    showImage(currentImgIndex - 1);
});

nextBtn.addEventListener('click', function() {
    showImage(currentImgIndex + 1);
});



















