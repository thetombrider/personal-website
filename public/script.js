const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('#main-nav')
const themeToggle = document.querySelector('.theme-toggle')

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open')
  menuToggle.setAttribute('aria-expanded', String(isOpen))
  menuToggle.firstChild.textContent = isOpen ? 'Close ' : 'Menu '
})

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open')
    menuToggle?.setAttribute('aria-expanded', 'false')
    if (menuToggle) menuToggle.firstChild.textContent = 'Menu '
  })
})

themeToggle?.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark')
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
  themeToggle.textContent = isDark ? '☼' : '◐'
})

if (localStorage.getItem('theme') === 'dark') {
  themeToggle.textContent = '☼'
}

document.querySelector('#year').textContent = new Date().getFullYear()
