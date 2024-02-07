const { merge } = require('webpack-merge')

const template = require('webpack.config.template')
const generate = require('webpack.config.generate')
const local = require('webpack.config.local')

module.exports = merge(template, generate, local)
