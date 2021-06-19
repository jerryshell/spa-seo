const puppeteer = require('puppeteer')

const ssr = async (url) => {
  console.log('url', url)

  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-gpu'
    ],
    headless: true,
  })
  const page = await browser.newPage()

  try {
    await page.goto(url, { waitUntil: 'networkidle0' })
  } catch (err) {
    console.error(err)
    throw new Error('page.goto() timed out.')
  }

  const html = await page.content()
  await browser.close()

  return html
}

module.exports = ssr
