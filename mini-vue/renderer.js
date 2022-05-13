const h=(tag,props,children)=>{
  return {
    tag,
    props,
    children
  }
}

const mount=(vnode,container)=>{
  const el=vnode.el=document.createElement(vnode.tag);
  if(vnode.props){
    for(const key in vnode.props){
      const value=vnode.props[key];
      if(key.startsWith('on')){
        el.addEventListener(key.slice(2).toLowerCase(),value);
      }else{
        el.setAttribute(key,value);
      }
    }
  }
  if(vnode.children){
    if(typeof vnode.children==='string'){
      el.textContent=vnode.children;
    }else{
      vnode.children.forEach(child=>{
        mount(child,el);
      })
    }
  }
  container.appendChild(el);
}

const patch=(n1,n2)=>{
  if(n1.tag!==n2.tag){
    const n1ElParent=n1.el.parentElement;
    n1ElParent.removeChild(n1.el);
    mount(n2,n1ElParent)
  }else{
    const el=n2.el=n1.el;
    // 处理props
    //props
    const oldProps=n1.props || {};
    const newProps=n2.props || {};
    //  2.1.获取所有的newProps添加到el
    for(const key in newProps){
      const oldValue=oldProps[key]
      const newValue=newProps[key]
      if(newValue!==oldValue){
        if(key.startsWith("on")){
          el.addEventListener(key.slice(2).toLowerCase(),newValue)
        }else{
          el.setAttribute(key,newValue)
        }
      }
    }
    // 2.2.删除旧的props
    for(const key in oldProps){
      if(key.startsWith("on")){
        const value=oldProps[key]
        el.removeEventListener(key.slice(2).toLowerCase(),value)
      }
      if(!(key in newProps)){
        el.removeAttribute(key);
      }
    }

    //children
    const oldChildren=n1.children || [];
    const newChildren=n2.children || [];

    if(typeof newChildren==="string"){
      if(typeof oldChildren==="string"){
        if(newChildren!==oldChildren){
          el.textContent=newChildren
        }
      }else{  
        el.innerHtml=newChildren
      }
    }else{
      if(typeof oldChildren==="string"){
        el.innerHtml="";
        newChildren.forEach(child=>{
          mount(child,el);
        })
      }else{
        const commonLength=Math.min(oldChildren.length,newChildren.length);
        for(let i=0;i<commonLength;i++){
          patch(oldChildren[i],newChildren[i]);
        }
        if(newChildren.length>oldChildren.length){
          newChildren.slice(oldChildren.length).forEach(item=>{
            mount(item,el);
          })
        }
        if(newChildren.length<oldChildren.length){
          oldChildren.slice(newChildren.length).forEach(item=>{
            el.removeChild(item.el);
          })
        }
      }
    }
  }
}