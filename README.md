# Api-TrueWallet-NodeJS-Module
Wallet coupon clipping with NodeJs and callbacks for easier separation.

+ 📦 เบากว่าขนนก (625 bytes)
+ ✔️ ฟีเจอร์ครบรองรับทั้งโค๊ดอังเปาและ URL

## Installation
```sh
npm i @opecgame/twapi
```

How To Use

```js
const twApi = require('@opecgame/twapi')
function getWallet(code) {
      const tw = await twApi(code, '[เบอร์โทร]')
      console.log(tw)
}

getWallet()
```

Example Code
```js
const twApi = require('@opecgame/twapi')
function getWallet(code) {
      const tw = await twApi(code, '[เบอร์โทร]')
      switch (tw.status.code) {
            case "SUCCESS":
                  console.log('ไดรับเงินแล้วจำนวน'+tw.data.my_ticket.amount_baht)
                  break;
            case "CANNOT_GET_OWN_VOUCHER":
                  console.log('รับซองตัวเองไม่ได้')
                  break;
            case "TARGET_USER_NOT_FOUND":
                  console.log('ไม่พบเบอร์นี้ในระบบ')
                  break;
            case "INTERNAL_ERROR":
                  console.log('ไม่ซองนี้ในระบบ หรือ URL ผิด')
                  break;
            case "VOUCHER_OUT_OF_STOCK":
                  console.log('มีคนรับไปแล้ว')
                  break;
            case "VOUCHER_NOT_FOUND":
                  console.log('ไม่พบซองในระบบ')
                  break;
            case "VOUCHER_EXPIRED":
                  console.log('ซองวอเลทนี้หมดอายุแล้ว')
                  break;
            default:
                  break;
      }
}
```
