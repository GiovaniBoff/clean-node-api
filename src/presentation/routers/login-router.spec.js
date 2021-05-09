const LoginRouter = require('../routers/login-router')
const MissingParamError = require('../helpers/missing-param-error')

const makeSut = () => {
  return new LoginRouter()
}

describe('Login Router', () => {
  test('should return 400 if no email is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        password: 'any-password'
      }
    }
    const httpReponse = sut.route(httpRequest)
    expect(httpReponse.statusCode).toBe(400)
    expect(httpReponse.body).toEqual(new MissingParamError('email'))
  })

  test('should return 400 if no password is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com'
      }
    }

    const httpReponse = sut.route(httpRequest)
    expect(httpReponse.statusCode).toBe(400)
    expect(httpReponse.body).toEqual(new MissingParamError('password'))
  })

  test('should return 500 if no httpRequest is provided', () => {
    const sut = makeSut()

    const httpReponse = sut.route()
    expect(httpReponse.statusCode).toBe(500)
  })
  test('should return 500 if no body is provided', () => {
    const sut = makeSut()
    const httpRequest = {}
    const httpReponse = sut.route(httpRequest)
    expect(httpReponse.statusCode).toBe(500)
  })
})
