```js
javascript:fetch('https://cdn.jsdelivr.net/gh/RuralAnemone/vid@master/script.js').then(res=>res.text().then(text=>eval(text))).catch(e=>alert(e))
```