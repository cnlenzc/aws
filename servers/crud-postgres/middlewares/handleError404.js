module.exports = (req, res) => {
  res.status(404).json({
    error: {
      method: req.method,
      message: `url not found ${req.url}`
    }
  })
}
