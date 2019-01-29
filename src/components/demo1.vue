<template>
  <div class="demo" v-html="demo1">
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { demo1 } from '../data.js';

@Component
export default class HelloWorld extends Vue {
  public demo1 = demo1;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.demo {
  position: relative;
}
</style>
