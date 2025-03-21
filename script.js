// Sample car data
const cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2023,
    price: 125999,
    mileage: 12500,
    fuelType: "Híbrido",
    transmission: "Automático",
    image: "https://placehold.co/600x400/0066ff/FFFFFF?text=Toyota+Camry",
    featured: true,
    description: "O Toyota Camry é um sedan confiável e econômico com recursos modernos e interior confortável.",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2022,
    price: 112500,
    mileage: 15000,
    fuelType: "Gasolina",
    transmission: "Automático",
    image: "https://placehold.co/600x400/0066ff/FFFFFF?text=Honda+Civic",
    featured: false,
    description:
      "O Honda Civic oferece excelente economia de combustível, interior espaçoso e recursos avançados de segurança.",
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2023,
    price: 245000,
    mileage: 5000,
    fuelType: "Gasolina",
    transmission: "Manual",
    image: "https://placehold.co/600x400/0066ff/FFFFFF?text=Ford+Mustang",
    featured: true,
    description: "O Ford Mustang oferece desempenho emocionante com seu motor potente e design icônico.",
  },
  {
    id: 4,
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 242990,
    mileage: 1000,
    fuelType: "Elétrico",
    transmission: "Automático",
    image: "https://placehold.co/600x400/0066ff/FFFFFF?text=Tesla+Model+3",
    featured: false,
    description:
      "O Tesla Model 3 é um sedan totalmente elétrico com autonomia impressionante, tecnologia de ponta e design minimalista.",
  },
  {
    id: 5,
    make: "BMW",
    model: "X5",
    year: 2022,
    price: 362500,
    mileage: 18000,
    fuelType: "Híbrido",
    transmission: "Automático",
    image: "https://placehold.co/600x400/0066ff/FFFFFF?text=BMW+X5",
    featured: false,
    description: "O BMW X5 combina luxo, desempenho e versatilidade em um pacote SUV premium.",
  },
  {
    id: 6,
    make: "Chevrolet",
    model: "Silverado",
    year: 2023,
    price: 238500,
    mileage: 8000,
    fuelType: "Gasolina",
    transmission: "Automático",
    image: "https://placehold.co/600x400/0066ff/FFFFFF?text=Chevrolet+Silverado",
    featured: false,
    description: "O Chevrolet Silverado é uma picape capaz e durável com impressionante capacidade de reboque.",
  },
]

// DOM Elements
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const closeMenuBtn = document.getElementById("close-menu-btn")
const mobileMenu = document.getElementById("mobile-menu")
const tabButtons = document.querySelectorAll(".tab-btn")
const tabContents = document.querySelectorAll(".tab-content")

// Toggle Mobile Menu
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full")
  document.body.style.overflow = "hidden"
})

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full")
  document.body.style.overflow = ""
})

// Tab Functionality
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    tabButtons.forEach((btn) => {
      btn.classList.remove("active", "text-primary-600", "border-primary-600")
      btn.classList.add("text-gray-600", "border-transparent")
    })

    // Add active class to clicked button
    button.classList.add("active", "text-primary-600", "border-primary-600")
    button.classList.remove("text-gray-600", "border-transparent")

    // Hide all tab contents
    tabContents.forEach((content) => {
      content.classList.add("hidden")
      content.classList.remove("active")
    })

    // Show corresponding tab content
    const tabId = `tab-${button.dataset.tab}`
    const activeTab = document.getElementById(tabId)
    activeTab.classList.remove("hidden")
    activeTab.classList.add("active")
  })
})

// Format price to Brazilian currency
function formatPrice(price) {
  return `R$ ${price.toLocaleString("pt-BR")}`
}

// Create car card HTML with Tailwind classes
function createCarCard(car, isFeatured = false) {
  return `
    <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 ${isFeatured ? "featured-card glow" : ""}">
      <div class="relative">
        <img src="${car.image}" alt="${car.make} ${car.model}" class="w-full h-64 object-cover">
        ${car.featured ? '<span class="absolute top-2 right-2 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded">Destaque</span>' : ""}
      </div>
      <div class="p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-semibold">${car.make} ${car.model}</h3>
          <span class="text-xl font-bold text-primary-600">${formatPrice(car.price)}</span>
        </div>
        ${isFeatured ? `<p class="text-gray-600 mb-4 text-sm">${car.description}</p>` : ""}
        <div class="grid grid-cols-2 gap-3 mb-6">
          <div class="flex items-center text-sm text-gray-600">
            <i class="fas fa-calendar-alt text-primary-600 mr-2"></i>
            <span>${car.year}</span>
          </div>
          <div class="flex items-center text-sm text-gray-600">
            <i class="fas fa-road text-primary-600 mr-2"></i>
            <span>${car.mileage.toLocaleString()} km</span>
          </div>
          <div class="flex items-center text-sm text-gray-600">
            <i class="fas fa-gas-pump text-primary-600 mr-2"></i>
            <span>${car.fuelType}</span>
          </div>
          <div class="flex items-center text-sm text-gray-600">
            <i class="fas fa-cog text-primary-600 mr-2"></i>
            <span>${car.transmission}</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <a href="car-details.html?id=${car.id}" class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-2 px-4 rounded-md transition duration-300 text-center">Ver Detalhes</a>
          ${
            isFeatured
              ? '<a href="#" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 text-center">Agendar Test Drive</a>'
              : '<a href="#" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 text-center">Contatar Vendedor</a>'
          }
        </div>
      </div>
    </div>
  `
}

// Populate featured cars
const featuredCarsContainer = document.getElementById("featured-cars")
const featuredCars = cars.filter((car) => car.featured)

if (featuredCarsContainer) {
  featuredCarsContainer.innerHTML = featuredCars.map((car) => createCarCard(car, true)).join("")
}

// Populate all cars
const allCarsContainer = document.getElementById("all-cars")
if (allCarsContainer) {
  allCarsContainer.innerHTML = cars.map((car) => createCarCard(car)).join("")
}

// Populate new cars (2023 and newer)
const newCarsContainer = document.getElementById("new-cars")
if (newCarsContainer) {
  const newCars = cars.filter((car) => car.year >= 2023)
  newCarsContainer.innerHTML = newCars.map((car) => createCarCard(car)).join("")
}

// Populate used cars (older than 2023)
const usedCarsContainer = document.getElementById("used-cars")
if (usedCarsContainer) {
  const usedCars = cars.filter((car) => car.year < 2023)
  usedCarsContainer.innerHTML = usedCars.map((car) => createCarCard(car)).join("")
}

// Populate certified cars (2022 or newer with less than 20,000 km)
const certifiedCarsContainer = document.getElementById("certified-cars")
if (certifiedCarsContainer) {
  const certifiedCars = cars.filter((car) => car.year >= 2022 && car.mileage < 20000)
  certifiedCarsContainer.innerHTML = certifiedCars.map((car) => createCarCard(car)).join("")
}

// Newsletter form submission
const newsletterForm = document.querySelector(".newsletter-form")
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = e.target.querySelector('input[type="email"]').value
    alert(`Obrigado por se inscrever com o email: ${email}. Você receberá nossas atualizações em breve!`)
    e.target.reset()
  })
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Adicionar efeito de gradiente animado aos elementos destacados
  document.addEventListener("DOMContentLoaded", () => {
    // Adicionar classe para elementos destacados
    const heroSection = document.querySelector("section:first-of-type")
    if (heroSection) {
      heroSection.classList.add("gradient-animation")
    }

    // Adicionar efeito de brilho aos cards em destaque
    const featuredCards = document.querySelectorAll(".featured-card")
    featuredCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.classList.add("shadow-lg")
      })
      card.addEventListener("mouseleave", () => {
        card.classList.remove("shadow-lg")
      })
    })

    console.log("CarHub website loaded successfully!")
  })
  console.log("CarHub website loaded successfully!")
})

