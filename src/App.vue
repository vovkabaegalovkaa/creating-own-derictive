<template>
  <div class="container">
    <h2 v-color:[type].blink="myColor">Директивы</h2>
    <!-- [] используются дле передачи динамических параметров -->
    <div class="form-control">
      <label for="inp">Активный</label>
      <input type="text" id="inp" v-focus>
    </div>
    <button class="btn" @click="myColor = 'darkblue'">Сделать синим!</button>
    <button class="btn" @click="type = type == 'color' ? 'backgroundColor' : 'color'">Переключить тип</button>
  </div>
</template>

<script>

export default {
  data(){
    return {
      myColor: "darkred",
      type: "color"
    }
  },
  // Здесь мы будет создавать директиву которая будет вешать фокус на элемент, к которому она применена
  directives: {
    focus: {
      mounted(el, binding){//binding – объект, в котором дохера всякой шняги
        el.focus();
      }
    },
    //более тонкая настройка кастомной директивы
    color: {
      //переданные параметры хранятяс в массиве binding.arg
      //переданные модификаторы хранятся в объекте binding.modifiers где ключ это имя модификатора, а значение просто true
      mounted(el, binding){//вызывается как известно только при создании элемента
        console.log(el);//выведет инфу про заголовок h2
        el.style.color = binding.value;
        if(binding.modifiers.blink){
          let flag = true;
          setInterval(() => {
            el.style.color = flag ? '#fff' : binding.value;
            flag =! flag;
          }, 100);
        }
      },
      updated(el, binding){
        console.log(binding);
        el.style[binding.arg] = binding.value//здесь мы выбираем что конкретно поменять через параметр, переданный в директиве
      },
      unmponted(){

      }
    }
  }
}
</script>
