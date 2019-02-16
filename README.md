# zl-vue-ui

> 公司实际项目中编写的一些组件，后续会持续更新，有不足的地方希望大家提出宝贵意见，大家共同进步, 主要组件如下

### 全局引用方法
> main.js 中引入

```
import zlVueUi from 'zl-vue-ui'
Vue.use(zlVueUi)
```
## 以下是主要组件
**目前内部的组件**
- zlCalendar 日历组件，仿照美团酒店编写的日历组件，支持单选和双选
- zlRange 价格滑块，双向滑动


### zlCalendar
> 仿照美团酒店编写的日历组件，展示选中区间
###### 使用方法

> html
```
<button @click="calendarShow"></button>
<zl-calendar ref="zlCalendar" @change="calendarChange"/>
```
> js

```
data:{
    selectedData:[]
}
calendarShow(){
  this.$refs.zlCalendar.show()
},
calendarChange(val){
    this.selectedData = val
}
```
> props

```
close:{ // 关闭文字
  type: String,
  default:'×'
},
color:{ //选中的背景色
  type: String,
  default:'rgb(17,55,160)'
},
lightColor:{ // 开始结束之间的背景色
  type: String,
  default: `rgb(17,55,160,.15)`
},
title:{ //标题文字
  type: String,
  default:'选择日期'
},
months:{ // 月份长度
  type: [Number,String],
  default:6
},
type:{ // 选择类型 // start 开始, end 结束, double 双选
  type: String,
  default: 'double', 
},
selectedDate:{ // 默认选中日期
  type: Array,
  default(){
    return [
      moment().format('YYYY-MM-DD'),
      moment().add(1, 'd').format('YYYY-MM-DD')
    ]
  }
},
selectedText:{ //选中的文字，顺序不可颠倒
  type:Array,
  default(){
    return ['入店','离店']
  }
}
```
> events

```
change
返回值：Array selectedDate
```

### zlRange
> 价格滑块，双向滑动，开发人员可以自定义最大值和最小值
###### 使用方法

> html
```
<v-range
  :max="rangeOptions.max"
  :min="rangeOptions.min"
  :space="150"
  :step="50"
  :point="3"
  :min-value="storeRange.minValue"
  :max-value="storeRange.maxValue"
  :status="showFlag"
  @min-move="minMove"
  @max-move="maxMove">
</v-range>
```
> js

```
data:{
    rangeOptions: {
        min: 0,
        max: 1050,
    },
    storeRange:{
        minValue:0,
        maxValue:1050
    },
    showFlag: false,
    
}
methods:{
    minMove (val) {
        this.storeRange.minValue = val
    },
    maxMove (val) {
        this.storeRange.maxValue = val
    },
}
```
> props

```
step:{ //步长，默认是1像素
  type:[String, Number],
  default:1
},
min:{ // 可选的最小值
  type:[String, Number],
  default:0
},
max:{ // 可选的最大值
  type:[String, Number],
  default:100
},
minValue:{ // 选中的最小值
  type:[String, Number],
  default:0
},
maxValue:{// 选中的最大值
  type:[String, Number]
},
space:{ // 每步滑动的像素
  type:[String, Number],
  default:10
},
point:{// 一共滑几次到头
  type:[String, Number],
  default:10
},
status:{// 显示状态
  type:Boolean,
  default:true
}
```
> events

```
minMove
返回值：String // 最小值
maxMove
返回值：String // 最大值
```

### zlSlideDelete
> 左滑删除，可以自定义滑动或不滑动，主要内容需根据组件需求而定义
###### 使用方法

> html
```
<zl-slide-delete 
  :options="dataList"
  @delete-item="deleteFn" 
  @editor="editorFn"/>
```
> js

```
data:{
dataList:[
    {
      id:1,
      title:'他大舅',
      content:[
        12,
        '臻旅科技你们的超级旅伴，机票酒店火车票火车票抢票景点'
      ]
    },
    {
      id:2,
      title:'他二舅',
      content:[
        15,
        '臻旅科技你们的超级旅伴，机票酒店火车票火车票抢票景点，臻旅科技你们的超级旅伴，机票酒店火车票火车票抢票景点'
      ]
    },
    {
      id:3,
      title:'都是他舅',
      content:[
        19,
        '臻旅科技你们的超级旅伴，机票酒店火车票火车票抢票景点'
      ]
    }
],// 数组里的content必须存在
}
methods:{
    editorFn(item){
      console.log(1,item)
    },
    deleteFn(index){
      this.dataList2.splice(index, 1)
    },
}
```
> props

```
options:{
  type:Array
},
left:{ //左侧编辑，删除选项
  type:String,
  default: 'none', //目前可选 'none', 'editor'
},
right:{
  type:String, //右侧选中，编辑选项
  default: 'none', //目前可选 'none', 'editor'
},
slideDelete:{ //true 可以左滑删除， false 不可以左滑删除， 默认true
  type:Boolean,
  default:true
},
editor:{ // 列表是否可编辑
  type:Boolean,
  default:true
},
leftImgOptions:{ // 左侧内容， 当left不为none显示
  type:Object,
  default(){
    return {
      img: require('./img/editor.png'),
      width: '20px',
      height: '20px'
    }
  }
},
rightImgOptions:{ // 右侧内容， 当right不为none显示
  type:Object,
  default(){
    return {
      img: require('./img/editor.png'),
      width: '20px',
      height: '20px'
    }
  }
}
```
> events

```
delete-item
返回值：
    index, Number // 删除的索引，
    item, Object //数组中的某一项
editor
返回值：
    item, Object // 数组中的某一项, 开发人员可以根据item 做编辑删除操作
```





