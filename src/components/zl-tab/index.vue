<template>
    <div>
        <transition name="component-fade" mode="out-in">
            <component v-bind:is="view"></component>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            view: 'v-a'
        }
    },
    components: {
        'v-a': {
        template: '<div>Component A</div>'
        },
        'v-b': {
        template: '<div>Component B</div>'
        },
        'v-c': {
        template: '<div>Component C</div>'
        }
    }
}
</script>

<style lang="less" scoped>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
/* .component-fade-leave-active for below version 2.1.8 */ 
  opacity: 0;
}
</style>



new Vue({
  el: '#transition-components-demo'
})

