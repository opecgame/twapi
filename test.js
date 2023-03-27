const twApi = require('./index')
setTimeout(async () => {
    a = await twApi('https://gift.truemoney.com/campaign/?v=aLpEVtmlZtgcSw1oah', '0644456556')
    console.log(a)
})