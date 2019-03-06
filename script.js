const work = document.querySelector("#work");
const contact = document.querySelector("#contact");
const illustration = document.querySelector("#illustration");
const graphicDesign = document.querySelector("#graphicDesign");
const webDesign = document.querySelector("#webDesign");
const contactInfo = document.querySelector("#contactInfo");
const works = document.querySelectorAll('.work')
const lightBox = document.querySelector('.lightBox')
const lightBoxItem = document.querySelector('.lightBox .item')
const cross = document.querySelector('#cross')
const left = document.querySelector('#left')
const right = document.querySelector('#right')

let posValue = 30;
let pos = posValue;
let call;
let currentIndex;

const scroll = (target) => {

    if(target == 'work'){
        target = illustration.offsetTop
    }else{
        posValue = 90;
        target = contactInfo.offsetTop
    }

    if (pos > target) {
        clearInterval(call);
        pos = posValue;
    } else {
        window.scrollTo(0, pos);
        pos += posValue;
    }
}

const setScroll = target => {
    call = setInterval(() => scroll(target), 10);
};

const showImage = image => {

  lightBox.classList.add('showImage')
  lightBoxItem.innerHTML = image
}

works.forEach(() => {
    let images = document.querySelectorAll('.image')

    images.forEach((image, index) => {
        image.onclick = () => {
            showImage(image.innerHTML)
            currentIndex = index
        }
    })

    right.onclick = () => {
        if(currentIndex != 16){
            currentIndex += 1
            lightBoxItem.innerHTML = images[currentIndex].innerHTML
        }
    }

    left.onclick = () => {
        if(currentIndex != 0){
            currentIndex -= 1
            lightBoxItem.innerHTML = images[currentIndex].innerHTML
        }
    }
})

work.onclick = () => setScroll("work");
contact.onclick = () => setScroll("contact");
cross.onclick = () => lightBox.classList.remove('showImage')

window.onscroll = () => {
    const height = window.innerHeight
    const scrollTop = document.documentElement.scrollTop
    
    if(scrollTop >= illustration.offsetTop - height/2){
        illustration.classList.add('rise')
    }
    if(scrollTop >= graphicDesign.offsetTop - height/2){
        graphicDesign.classList.add('rise')
    }
    if(scrollTop >= webDesign.offsetTop - height/2){
        webDesign.classList.add('rise')
    }
}






