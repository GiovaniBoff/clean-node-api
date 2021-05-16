module.exports = class MissingParamError extends Error {
  constructor (paramName) {
    super(`MissingParamError: ${paramName}`)
    this.name = 'MissingParaError'
  }
}
