const callApi = async (i, url) => {
  let inic = new Date()
  const res = await fetch(url)
  const json = await res.json()
  console.log({ ...json, i, time: new Date() - inic })
}

const main = async () => {
  let inic = new Date()
  try {
    for (let i = 1; i <= 100; i++) {
      await Promise.all([
        callApi(i, 'http://localhost:3001'),
        callApi(i, 'http://localhost:3001')
      ])
    }
  } catch (error) {
    console.error({ ...error.cause })
    console.error(error.stack)
  }
  console.log('total elapsed time', new Date() - inic)
}

main()

