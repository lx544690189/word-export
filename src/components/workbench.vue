<template>
  <div>
    <p class="text-xs-center title">{{title}}</p>
    <v-tabs
      color="cyan"
      dark
      slider-color="yellow"
    >
      <v-tab ripple>
        demo
      </v-tab>
      <v-tab ripple>
        code
      </v-tab>
      <v-tab-item>
        <v-card>
          <v-card-title>
            <slot name="demo"></slot>
          </v-card-title>
          <v-card-actions style="background: #fafafa;">
            <v-btn color="info" @click="exportDoc">导出word文档</v-btn>
          </v-card-actions>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card>
          <v-card-title>
            <pre>
              <code class="html" ref="code">
                {{html}}
              </code>
            </pre>
          </v-card-title>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

@Component
export default class Workbench extends Vue {
  private html = '<p>对齐</p>';
  @Prop()
  private title!: string;
  private exportDoc() {
    this.$emit('export');
  }
  private mounted() {
    // hljs.initHighlighting();
  }
}
</script>

<style lang="scss">
pre{
display: block;
width: 100%;
}
code{
  display: block;
  min-height: 100px;
}
</style>