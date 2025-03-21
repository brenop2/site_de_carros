// Funções principais do site

// Sample car data (replace with actual data source)
const cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    mileage: 35000,
    price: 85000,
    fuelType: "Flex",
    transmission: "Automática",
    image: "https://source.unsplash.com/300x200/?car,toyota",
    featured: true,
    description: "Um sedan confiável e econômico, perfeito para o dia a dia.",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2023,
    mileage: 15000,
    price: 110000,
    fuelType: "Flex",
    transmission: "Automática",
    image: "https://source.unsplash.com/300x200/?car,honda",
    featured: false,
    description: "Um sedan esportivo e moderno, com tecnologia de ponta.",
  },
  {
    id: 3,
    make: "Fiat",
    model: "Pulse",
    year: 2023,
    mileage: 8000,
    price: 95000,
    fuelType: "Flex",
    transmission: "Automática",
    image: "https://source.unsplash.com/300x200/?car,fiat",
    featured: true,
    description: "Um SUV compacto e estiloso, ideal para a cidade.",
  },
  {
    id: 4,
    make: "Volkswagen",
    model: "Gol",
    year: 2021,
    mileage: 50000,
    price: 60000,
    fuelType: "Flex",
    transmission: "Manual",
    image: "https://source.unsplash.com/300x200/?car,volkswagen",
    featured: false,
    description: "Um hatch popular e econômico, perfeito para quem busca praticidade.",
  },
  {
    id: 5,
    make: "Chevrolet",
    model: "Onix",
    year: 2024,
    mileage: 2000,
    price: 75000,
    fuelType: "Flex",
    transmission: "Automática",
    image: "https://source.unsplash.com/300x200/?car,chevrolet",
    featured: true,
    description: "Um hatch moderno e conectado, com design arrojado.",
  },
  {
    id: 6,
    make: "Hyundai",
    model: "HB20",
    year: 2022,
    mileage: 40000,
    price: 70000,
    fuelType: "Flex",
    transmission: "Manual",
    image: "https://source.unsplash.com/300x200/?car,hyundai",
    featured: false,
    description: "Um hatch compacto e confortável, ideal para o uso urbano.",
  },
  {
    id: 7,
    make: "Jeep",
    model: "Compass",
    year: 2023,
    mileage: 12000,
    price: 150000,
    fuelType: "Flex",
    transmission: "Automática",
    image: "https://source.unsplash.com/300x200/?car,jeep",
    featured: true,
    description: "Um SUV robusto e elegante, perfeito para quem busca aventura.",
  },
  {
    id: 8,
    make: "Renault",
    model: "Kwid",
    year: 2021,
    mileage: 60000,
    price: 50000,
    fuelType: "Flex",
    transmission: "Manual",
    image: "https://source.unsplash.com/300x200/?car,renault",
    featured: false,
    description: "Um subcompacto econômico e prático, ideal para o dia a dia.",
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
    <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 ${isFeatured ? "glow" : ""}">
      <div class="relative">
        <img src="${car.image.replace("/0066ff/", "/7c3aed/")}" alt="${car.make} ${car.model}" class="w-full h-64 object-cover">
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

// Adicionar efeito de gradiente animado aos elementos destacados
document.addEventListener("DOMContentLoaded", () => {
  // Adicionar classe para elementos destacados
  const heroSection = document.querySelector("section:first-of-type")
  if (heroSection) {
    heroSection.classList.add("gradient-animation")
  }

  // Adicionar efeito de brilho aos cards em destaque
  const featuredCards = document.querySelectorAll(".glow")
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

