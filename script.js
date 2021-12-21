const hour = document.querySelector('.h'),
min = document.querySelector('.m'),
sec = document.querySelector('.s'),
hoursNumber = document.querySelector('.hours'),
minutesNumber = document.querySelector('.minutes')


function clock() {
    let time = new Date(),
    second = time.getSeconds() * 6,
    minutes = time.getMinutes() * 6,
    hours = time.getHours() * 30;
    
    
    
    hour.style = `transform: rotate(${hours}deg)`;
    sec.style = `transform: rotate(${second}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    
    
 
}


clock()


const links = document.querySelectorAll('.tabsItem'),
tabs = document.querySelectorAll('.tabsContentItem');

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function (e){
        e.preventDefault();
        removeActiveClass()
        addActiveClass(this, tabs[i])
    })
}

function removeActiveClass() {
    links.forEach(link => {
        link.classList.remove('active')
    })
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })
}go


function addActiveClass(element,arr){
    element.classList.add('active')
    arr.classList.add('active')
}
