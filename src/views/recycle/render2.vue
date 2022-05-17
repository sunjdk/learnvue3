<script >
import { h, ref } from "vue"
import ListItemVue from '../ListItem.vue'
export default{
  render(){
    return h(ListItemVue,null,{
      default:props=>h('span',null,`app传入到hello world 中的内容${props.name}`)
    })
  }
}

</script>

