import { ref, watch } from "vue";

export default function(title="默认的title"){
  // document.title="呵呵呵"
  const titleRef=ref(title)

  watch(titleRef,(newValue,oldValue)=>{
    console.log('oldValue',oldValue);
    document.title=newValue
  },{
    immediate:true
  })

  // document.title=title

  return titleRef
}