class LoginRouter {
  route (httpRequest) {
    if (!httpRequest.body.email) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('Login Router', () => {
  test('should return 400 if no email is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'any-password'
      }
    }

    const httpReponse = sut.route(httpRequest)
    expect(httpReponse.statusCode).toBe(400)
  })
})
