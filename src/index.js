const emailUnicos = function(emails = []) {

  const clearEmails = emails.map(clearEmail)
  console.log(clearEmails)

  const uniqueItems = Array.from(new Set(clearEmails))
  console.log(uniqueItems)
  return uniqueItems.length
}

const clearEmail = function(email) {
  
  
  const [name,domain] = email.split('@') 

  return `${clearName(name)}@${clearDomain(domain)}`
}

const clearName = function(name) {
  return name
}

const clearDomain = function(domain) {
  return domain
}



module.exports = emailUnicos
