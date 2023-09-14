// PHONE

const phoneInput = document.querySelector('#phone_input')
const phoneCheck = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')


const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneCheck.onclick = () => {
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'True'
        phoneResult.style.color='green'
    }else{
        phoneResult.innerHTML = 'NOT true pls try again!'
        phoneResult.style.color='yellow'
    }

}

//TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) =>{
        item.classList.remove('tab_content_item_active')
    })
}
const showTabContent = (index=0) => {
        tabContent[index].style.display = 'block'
        tabs[index].classList.add('tab_content_item_active')
    }
hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if(event.target.classList.contains('tab_content_item')){
        tabs.forEach((item, i) =>{
            if(item === event.target){
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}

  const slideItems = document.querySelectorAll('.tab_content_block');
  const tabContentItems = document.querySelectorAll('.tab_content_item');

  let currentSlideIndex = 0;

  function showSlide(index) {
    slideItems.forEach(item => item.style.display = 'none');
    tabContentItems.forEach(item => item.classList.remove('tab_content_item_active'));
    slideItems[index].style.display = 'block';
    tabContentItems[index].classList.add('tab_content_item_active');
  }

  function nextSlide() {
    currentSlideIndex++
    showSlide(currentSlideIndex);
    if(currentSlideIndex===4){
        currentSlideIndex=-1
    }
  }
  setInterval(nextSlide, 4000);


