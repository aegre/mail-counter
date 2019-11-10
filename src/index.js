/**
 * This function will clear a list of provided items, removing the ignored parts and
 * the extra characters in the name to get the actual address
 * @param {string []} emails 
 */
const emailUnicos = function(emails = []) {

  const clearEmails = emails.map(clearEmail)
  /**
   * Use of set to clear the repeated items
   */
  const uniqueItems = Array.from(new Set(clearEmails))
  return uniqueItems.length
}

/**
 * Clear an email individually separating the name and domain
 * @param {string} email 
 */
const clearEmail = function(email) {
  const [name,domain] = email.split('@') 
  return `${clearName(name)}@${domain}`
}

/**
 * Call all the required functions to clear an name, 
 * removing the pints and the ignored part
 * @param {string} name 
 */
const clearName = function(name) {
  let cleanedName = name.toLowerCase()
  cleanedName = removePoints(cleanedName)
  cleanedName = removeIgnored(cleanedName)
  
  return cleanedName
}

/**
 * Function to remove the points from a provided string
 * @param {string} name 
 */
const removePoints = (name) => name.split('.').join('')

/**
 * Function to remove the ignored part of a name if required
 * @param {string} name 
 */
const removeIgnored = (name) => {
  const nameLimit = name.indexOf('+')
  return nameLimit > -1 
    ? name.substring(0, nameLimit)
    : name
}

module.exports = emailUnicos
