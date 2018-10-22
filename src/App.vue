<template>
  <v-app id="inspire">
    <v-toolbar>
      <v-toolbar-title>WordExport</v-toolbar-title>
    </v-toolbar>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Test from '../lib';

const html =
`
<style>
h2{text-align:center;}
</style>
<h2>标题</h2>
`;

const style = `
h2{
  text-align:center;
}
`;

@Component({
  components: {
    HelloWorld,
  },
  methods: {
    download() {
      const wordExport = new Test({
        name: 'test',
        content: html,
        style,
      });
      wordExport.export();
    },
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,body{
  margin: 0;
  padding: 0;
}
#app {
  
}
</style>
