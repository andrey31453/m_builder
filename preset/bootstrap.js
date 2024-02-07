import { setup } from './setup.js'
;(async () => {
  await new Promise((res, rej) => {
    try {
      setTimeout(() => {
        setup()
        res()
      }, 1000)
    } catch {
      rej('Не произвелась предзапись конфигурации')
    }
  })
})()
