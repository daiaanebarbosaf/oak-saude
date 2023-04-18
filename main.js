window.addEventListener('scroll', onScroll)

const navigation = document.getElementById('navigation')

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop

    const sectionHeight = section.offsetHeight

 
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

   
    const sectionEadAt = sectionTop + sectionHeight


    const sectionEndPassedTargetline = sectionEadAt <= targetLine
        sectionEndPassedTargetline

    const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline
    
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove ('active')
    if (sectionBoundaries) {
        menuElement.classList.add ('active')
    }
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
      navigation.classList.remove('scroll')
    }
}
 
function showBackToTopButtonOnScroll() {
    if(scrollY > 400) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 

    #about, 
    #about header, 
    #about .content
    #about-missao,
    #about-visao,

    #beneficios-teleatendimento,
    #beneficios-teleatendimento header,
    #beneficios-teleatendimento content,
    #beneficios-teleatendimento img,

    #services,
    #services header,
    #services .card,`)