module.exports = class UnauthorizedError extends Error {
  constructor (paramName) {
    super(`Unauthorized: ${paramName}`)
    this.name = 'UnauthorizedError'
  }
}
