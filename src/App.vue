<template>
  <v-app id="inspire">
    <v-toolbar color="primary">
      <v-toolbar-title class="white--text">WordExport</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <workbench title="基本示例" @export="exportDemo1">
          <demo1 slot="demo" id="demo1"></demo1>
        </workbench>
      </v-container>
    </v-content>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import workbench from './components/workbench.vue';
import demo1 from './components/demo1.vue';
import Test from '../lib';

const html = `
<style>
h2{text-align:center;}
</style>
<h2>标题</h2>
<p>对齐</p>
`;

const style = `
p{
  text-align:center;
}
`;

@Component({
  components: {
    workbench,
    demo1,
  },
})
export default class App extends Vue {
  private exportDemo1() {
    const demo1El = document.querySelector('#demo1');
    if (demo1El) {
      const wordExport = new Test({
      name: 'test',
      content: demo1El.innerHTML,
      style,
    });
      wordExport.export();
    }
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
.title {
  font-size: 40px;
}
</style>
