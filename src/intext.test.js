const emailUnicos = require('./')

describe('emailUnicos', () => {
  test('Is returning 2 with the provided emails', () => {
    const emails = ['test.email+alex@hotmail.com',
    'test.e.mail+bob.cathy@hotmail.com',
    'testemail+david@hot.mail.com']
    const result = emailUnicos(emails)

    expect(result).toBe(2)
  })

})
