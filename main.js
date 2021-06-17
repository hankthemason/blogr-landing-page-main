var mobileMenutBtn = document.getElementById("mobile-menu")
var mobileNav = document.getElementById("mobile-nav")

mobileNav.style.left = "-100%"

mobileMenutBtn.onclick = function() {

  if(mobileNav.style.left === "-100%") {
    mobileNav.style.left = "50%"
    mobileMenutBtn.style.width = "5rem"
    mobileMenutBtn.src = "images/icon-close.svg"
  } else {
    mobileNav.style.left = "-100%"
    mobileMenutBtn.style.width = "6rem"
    mobileMenutBtn.src = "images/icon-hamburger.svg"
  }
}

let mobileDropdownButton = document.querySelectorAll('.mobile-dropdown-button')

mobileDropdownButton.forEach(e => {
  e.addEventListener('click', function(event) {
    if (event.target.nextElementSibling) {
      let arrow = event.target.firstElementChild
      let list = event.target.nextElementSibling
      
      if (list.style.display === 'none' || !list.style.display) {
        list.style.display = 'block'
        arrow.style.transform = 'rotate(-180deg)'
        arrow.style.transition = '.5s'
      } else {
        list.style.display = 'none'
        arrow.style.transform = 'rotate(0deg)'
        arrow.style.transition = '.5s'
      }
    } else if (event.target.parentElement.nextSibling) {
      let list = event.target.parentElement.nextElementSibling
      let arrow = event.target
      
      if (list.style.display === 'none' || !list.style.display) {
        list.style.display = 'block'
        arrow.style.transform = 'rotate(-180deg)'
        arrow.style.transition = '.5s'
      } else {
        list.style.display = 'none'
        arrow.style.transform = 'rotate(0deg)'
        arrow.style.transition = '.5s'
      } 
    }
  })
})

