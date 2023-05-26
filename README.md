## vue-pithy-calendar package重构

### vue-pithy-calendar@0.1.2 发现在vue3中使用不了，因为是2年前编写的组件库，使用webpack进行打包构建，可能一些构建上的语法不兼容vue3，这次重构就用了rollup进行打包构建，进测试，兼容vue2和vue3，且包体积减少了。

### vue-pithy-calendar@0.1.2

**下载**

```bash
npm i vue-pithy-calendar@0.1.2 -D
```

**引入**
```js
//main.js
import VuePithyCalendar from 'vue-pithy-calendar'
import 'vue-pithy-calendar/dist/vue-pithy-calendar.css'
Vue.use(VuePithyCalendar)
```

**使用**
```js
<template>
  <div id="app">
  <vue-pithy-calendar @chooseDay="getChooseDay"/> 
  </div>
</template>
<script>
export default {
  name: 'App',
   methods: {
   getChooseDay(msg){
     console.log(msg);
   } 
  },
}
</script>
```


## 重构版本

### vue-pithy-calendar@latest

**下载**

```bash
npm i vue-pithy-calendar@latest -D
```

**使用**
```js
//vue2
<template>
    <div>
        <vue-calendar @chooseDay="getChooseDay"/>
    </div>
</template>
<script>
import VueCalendar from 'vue-calendar/dist/vue2/esm'
export default({
    components:{VueCalendar},
    methods:{
      getChooseDay(msg){
      console.log(msg);
    }
})
</script>

```

```js
//vue3
<template>
    <div>
        <vue-pithy-calendar @chooseDay="getChooseDay"/>
    </div>
</template>
<script setup lang="ts">
import VuePithyCalendar from 'vue-pithy-calendar'
const getChooseDay = (msg:any)=>{
  console.log(msg)
}
</script>
```

**效果展示**

![](https://i.loli.net/2021/05/10/BpDkq5WRfTtgZlP.png)

**参数**

|   方法    | 是否必写 |        说明        |    返回结果     |
| :-------: | :------: | :----------------: | :-------------: |
| chooseDay |    否    | 获取点击选中的日期 | 例如：2021-5-10 |