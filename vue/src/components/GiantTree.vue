<template>
  <div>
    <tree :nodes="nodes" :setting="setting"/>
  </div>
</template>

<script>
	import tree from "vue-giant-tree";

	export default {
		name: 'GiantTree',
		props: {
			setting: Object,
			nodes: Array,
		},
		components: {
      tree
    }
  }
</script>
