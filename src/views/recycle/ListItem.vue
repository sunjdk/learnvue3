<script>
import { h } from 'vue'
export default{
  render(){
    return h("div",null,"hello world"),
    this.$slots.default? this.$slots.default({name:"coderwhy"}):h("span",null,'我是list-item 的默认值')
  }
}
</script>