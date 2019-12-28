import x from './x.js'
import './x.scss'
import './y.less'
import './f.styl'
import png from './assets/原型链.png'
console.log(png)
const div = document.getElementById('app')
div.innerHTML = `<img src=${png}>`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module) => {
        module.default()
    }, () => {
        console.log('模块加载错误')
    })
}
document.body.appendChild(button)