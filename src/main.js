import { createApp } from 'vue'
import App from './App.vue'
import "./theme.css"

createApp(App)
//добавление глобальной директивы:
/*
.directive("focus",{
    
})              (в имени префикс "v-" писать не надо)
 */
// .directive('focus', {
//     mounted(el){//здесь el это элемент на который повешена директива
//         console.log(el);//выведет на экран элемент на который повешена директива
//         el.focus();//теперь элемент в фокусе по умолчанию
//     }
// })
.mount('#app')
