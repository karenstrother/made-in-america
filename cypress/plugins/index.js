/// <reference types="cypress" />
const { initPlugin } = require('cypress-plugin-snapshots/plugin')
const { isFileExist } = require('cy-verify-downloads')

module.exports = (on, config) => {
  initPlugin(on, config)
  on('task', { isFileExist })
  return config
}
