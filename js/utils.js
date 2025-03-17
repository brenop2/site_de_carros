// Funções utilitárias

/**
 * Formata um número para o formato de moeda brasileira
 * @param {number} value - O valor a ser formatado
 * @returns {string} - O valor formatado como moeda brasileira
 */
function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

/**
 * Formata uma data para o formato brasileiro
 * @param {Date|string} date - A data a ser formatada
 * @returns {string} - A data formatada no padrão brasileiro
 */
function formatDate(date) {
  if (typeof date === "string") {
    date = new Date(date)
  }
  return date.toLocaleDateString("pt-BR")
}

/**
 * Valida um endereço de email
 * @param {string} email - O email a ser validado
 * @returns {boolean} - Verdadeiro se o email for válido
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

/**
 * Valida um número de telefone brasileiro
 * @param {string} phone - O número de telefone a ser validado
 * @returns {boolean} - Verdadeiro se o telefone for válido
 */
function validatePhone(phone) {
  // Remove caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, "")
  // Verifica se tem entre 10 e 11 dígitos (com ou sem DDD)
  return cleanPhone.length >= 10 && cleanPhone.length <= 11
}

/**
 * Formata um número de telefone brasileiro
 * @param {string} phone - O número de telefone a ser formatado
 * @returns {string} - O telefone formatado
 */
function formatPhone(phone) {
  // Remove caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, "")

  // Formata de acordo com o tamanho
  if (cleanPhone.length === 11) {
    return `(${cleanPhone.substring(0, 2)}) ${cleanPhone.substring(2, 7)}-${cleanPhone.substring(7)}`
  } else if (cleanPhone.length === 10) {
    return `(${cleanPhone.substring(0, 2)}) ${cleanPhone.substring(2, 6)}-${cleanPhone.substring(6)}`
  }

  // Retorna o original se não conseguir formatar
  return phone
}

