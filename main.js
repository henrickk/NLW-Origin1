/* Abre e fecha o menu quando clicar no icone: hambúrguer e no X */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Mudar header da pag ao dar scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeigth) { 
    //'scrollY' quando der scroll vertical
    header.classList.add('scroll')
    //Se scroll é maior que a altura do header
  } else {
    //se não, menor que a altura do header
    header.classList.remove('scroll')
  }
})
