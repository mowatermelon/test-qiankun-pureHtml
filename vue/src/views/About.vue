<template>
  <div class="about">
    <h1>This is about page</h1>
    <giant-tree :nodes="nodes" />
  </div>
</template>
<script>
	import GiantTree from "@/components/GiantTree";

	export default {
		name: 'about',
		components: {
      GiantTree
    },
    data() {
      return {
        nodes: [
              { id:1, pid:0, name:"随意勾选 1", open:true},
              { id:11, pid:1, name:"随意勾选 1-1", open:true},
              { id:111, pid:11, name:"随意勾选 1-1-1"},
              { id:112, pid:11, name:"随意勾选 1-1-2"},
              { id:12, pid:1, name:"随意勾选 1-2", open:true},
              { id:121, pid:12, name:"随意勾选 1-2-1"},
              { id:122, pid:12, name:"随意勾选 1-2-2"},
              { id:2, pid:0, name:"随意勾选 2", checked:true, open:true},
              { id:21, pid:2, name:"随意勾选 2-1"},
              { id:22, pid:2, name:"随意勾选 2-2", open:true},
              { id:221, pid:22, name:"随意勾选 2-2-1", checked:true},
              { id:222, pid:22, name:"随意勾选 2-2-2"},
              { id:23, pid:2, name:"随意勾选 2-3"}
          ],
        setting: {view: {showIcon: true}}
      }
    }
  }
</script>
<style scoped>
  .about {
    color: #7265e6;
  }
</style>
