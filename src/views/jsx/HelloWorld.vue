<script lang="jsx">
export default{
  render(){
    return (
      <div>
        <h2>HelloWorld</h2>
        {this.$slots.default?this.$slots.default():<span>呵呵呵呵</span>}
      </div>
    )
  }
}
</script>