// landing background logic

let yesBtn = document.querySelector('.change-bg .yes')
let noBtn = document.querySelector('.change-bg .no')

let bgArr = ['00.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg']

let landing = document.querySelector('.landing')

function changeBg() {
    let bgInterval = setInterval(() => {
        let randomNum = Math.floor(Math.random() * bgArr.length)
        
        landing.style.backgroundImage = 'url(../imgs/' + bgArr[randomNum] + ')'
        if(noBtn.classList.contains('active')) {
            clearInterval(bgInterval)
        }
    }, 5000)
   
}


changeBg()



// yes / no background buttons
let btnsList =  document.querySelectorAll('.change-bg span')


btnsList.forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.parentElement.querySelectorAll('.active').forEach(e => e.classList.remove('active'))
        if(e.target.dataset.text == 'yes') {
            yesBtn.classList.add('active')
            changeBg()
        } else {
            noBtn.classList.add('active')       
        }
    })
})

// change root element color
let colorsLi = document.querySelectorAll('.colors-box div')
let colorOption = localStorage.getItem('color-option')
colorsLi.forEach(color => {
    color.addEventListener('click', e => {
        e.target.parentElement.querySelectorAll('.active').forEach(e => e.classList.remove('active'))
        e.target.classList.add('active')
        document.body.style.setProperty('--main-color', e.target.dataset.color)
        localStorage.setItem('color-option', e.target.dataset.color)
        
        })
    })

    if(colorOption !== null) {
        document.body.style.setProperty('--main-color', colorOption)
        colorsLi.forEach(li => {
            li.classList.remove('active')
            if (li.dataset.color == colorOption) {
                li.classList.add('active')
            }
    })
    }


// show / hide curtain
let toggle = document.querySelector('.toggle')
let curtain = document.querySelector('.curtain')

toggle.onclick = function () {
    if(toggle.classList.contains('fa-spin')) {
        toggle.classList.remove('fa-spin')
        curtain.style = 'left: -200px;'
    } else {
        toggle.classList.add('fa-spin')
        curtain.style = 'left: 0;'
    }
} 

// animate skills logic
let ourSkills = document.querySelector('.skills')
let skillBarz = document.querySelectorAll('.skills .skill-box .bar span')

window.onscroll = function () {

    // offset top
    let skillsOffsetTop = ourSkills.offsetTop

  
    // offset height
    let skillsOffsetHeight = this.outerHeight

   
    // window height
   let windowHeight = this.innerHeight


    // scroll top
    let windowScrollTop = this.pageYOffset
    // let windowScrollTop = this.scrollY
    
    if(windowScrollTop > (skillsOffsetTop + skillsOffsetHeight - windowHeight)) {

        skillBarz.forEach(bar => {
            bar.style.width = bar.dataset.width
        })
    } 



}

// gallery logic

let galleryImg = document.querySelectorAll('.gallery-content img')

galleryImg.forEach(img => {
    img.addEventListener('click', e => {
        let popUp = document.createElement('div')
        let imgNode = img.cloneNode()
        popUp.classList.add('pop-up')
        popUp.style = ' position: fixed; width: 600px; height: 450px; border: 10px solid white; top: 50%; left: 50%; transform: translate(-50%, -50%);'
        imgNode.style = 'max-width: 100%; height: 100%;'
        popUp.append(imgNode)
        let closeSpan = document.createElement('span')
        
        closeSpan.textContent = 'X'
        closeSpan.style = 'background-color: red; color: white; width: 25px; height: 25px; position: fixed; right: -20px; top: -20px; text-align: center; line-height: 25px; border-radius: 50%; font-weight: bold; cursor: pointer;'
        popUp.append(closeSpan)
        document.body.append(popUp)
        closeSpan.onclick = function () {
            popUp.remove()
        }
        if(img.alt !== '') {
            let imgHeading = document.createElement('h4')
            imgHeading.textContent = img.getAttribute('alt')
            imgHeading.style = 'text-align: center; margin: auto; width: fit-content; padding: 10px; background-color: white; position: absolute; top: 0; left: 0;  color: var(--main-color);'
            popUp.append(imgHeading)
        }
    })
})

// bullets logic
let allBullets = document.querySelector('.nav-bullets')
let showBullets = document.querySelectorAll('.show-bullets span')


showBullets.forEach(bullet => {
    bullet.addEventListener('click', e => {
        showBullets.forEach(bullet => bullet.classList.remove('active'))
        e.target.classList.add('active')
        if(e.target.dataset.show == 'yes') {
            allBullets.style = 'visibility: visible;'
            localStorage.setItem('bullets-option', e.target.dataset.show)        
        } else {
            allBullets.style = 'visibility: hidden;'
            localStorage.setItem('bullets-option', e.target.dataset.show)        

        }
        console.log(e.target.dataset.show)
    })
})

// bullets scroll logic
everyBullet = document.querySelectorAll('.nav-bullets .bullet')

everyBullet.forEach(bullet => {
    bullet.addEventListener('click', e => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        })
    })
})


let bulletOption = localStorage.getItem('bullets-option')


if(bulletOption != null) {

    if(bulletOption == 'yes') {
        showBullets.forEach(btn => btn.classList.remove('active'))
        document.querySelector('.show-bullets .yes').classList.add('active')
    } else {
        // showBtns.forEach(btn => btn.classList.remove('active'))
        document.querySelector('.show-bullets .no').classList.add('active')
        allBullets.style.display = 'none'
    }
}



// head links logic
let allLinks = document.querySelectorAll('.links a')

console.log(allLinks)

allLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        document.querySelector(e.target.dataset.section).scrollIntoView({behavior: 'smooth'})
    })
})

let burgerI = document.querySelector('.burger')
let linksCont = document.querySelector('.header .links')

burgerI.onclick = function () {
    linksCont.classList.toggle('clicked')
}

console.log(linksCont)