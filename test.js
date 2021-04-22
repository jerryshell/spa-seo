const ssr = require('./ssr.js')
ssr(`https://example.com`).then(html => console.log(html))
