const { Router } = require('express')
const router = Router()

router.use('/hello', (req, res) => {
  res.json({ message: 'Hello Nuxt With API!' })
})

module.exports = router
