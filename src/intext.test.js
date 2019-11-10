const emailUnicos = require('./')

describe('emailUnicos', () => {
  test('Is returning 2 with the provided emails', () => {

    const emails = ['test.email+alex@kavak.com',
    'test.e.mail+bob.cathy@kavak.com',
    'testemail+david@ka.vak.com']
    const result = emailUnicos(emails)

    expect(result).toBe(2)

  })

})
