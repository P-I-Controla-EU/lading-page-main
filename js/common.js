/**
 * Common JavaScript functionality for all pages
 */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
  const headerLeft = document.querySelector('.header-left')
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay')
  const navLinks = document.querySelectorAll('.nav-links a')

  if (mobileMenuToggle && headerLeft) {
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function () {
      this.classList.toggle('active')
      headerLeft.classList.toggle('active')

      // Toggle overlay
      if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.toggle('active')
      }

      // Prevent body scroll when menu is open
      if (headerLeft.classList.contains('active')) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    })

    // Close menu when clicking overlay
    if (mobileMenuOverlay) {
      mobileMenuOverlay.addEventListener('click', function () {
        mobileMenuToggle.classList.remove('active')
        headerLeft.classList.remove('active')
        mobileMenuOverlay.classList.remove('active')
        document.body.style.overflow = ''
      })
    }

    // Close menu when clicking on nav links
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
          mobileMenuToggle.classList.remove('active')
          headerLeft.classList.remove('active')
          if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('active')
          }
          document.body.style.overflow = ''
        }
      })
    })
  }

  // Close mobile menu on window resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      if (mobileMenuToggle) mobileMenuToggle.classList.remove('active')
      if (headerLeft) headerLeft.classList.remove('active')
      if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active')
      document.body.style.overflow = ''
    }
  })
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href')

    // Don't prevent default for # only links
    if (href === '#') return

    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  })
})
// Formulário de Cadastro - Redireciona para Login
const registerForm = document.querySelector('form')
if (registerForm && document.querySelector('#registerName')) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault()
    // Redireciona para a página de login após o cadastro
    window.location.href = 'login.html'
  })
}

// Formulário de Login - Redireciona para Página Inicial
if (registerForm && document.querySelector('#loginEmail')) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault()
    // Redireciona para a página inicial após o login
    window.location.href = 'index.html'
  })
}
