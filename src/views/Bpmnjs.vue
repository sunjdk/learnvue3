<template>
  <div class="container">
    <h2>流程引擎设计器</h2>
    <div ref="canvas" class="canves"></div>
  </div>
</template>

<script>
import Modeler from 'bpmn-js/lib/NavigatedViewer'
import { BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from 'bpmn-js-properties-panel';
import 'bpmn-js/dist/assets/diagram-js.css' // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
import { xmlStr } from './xmlData.js'

export default {
  data() {
    return {
      bpmnModeler: null
    }
  },

  async mounted() {
    this.bpmnModeler = new Modeler({
      container: this.$refs.canvas
    })

    try {
      const { warnings } = await this.bpmnModeler.importXML(xmlStr)
      // 调整在正中间
      this.bpmnModeler.get('canvas').zoom('fit-viewport', 'auto')
      console.log('rendered')
    } catch (err) {
      console.log('error rendering', err)
    }
  }
}
</script>

<style>
.canves {
  width: 100%;
  height: calc(100vh - 100px);
}
</style>