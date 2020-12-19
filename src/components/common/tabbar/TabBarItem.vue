<template>
   
    <div class="tab-bar-item" @click='itemClick'>
        <slot name="itemicon"></slot>
        <slot name="itemtext"></slot>
    </div>
      
</template>
<script>
export default {
  name:'TabBarItem' ,
  props:{
     path:String
  },
  methods:{
      itemClick(){
          this.$router.replace(this.path)
      }
  }
}
</script>