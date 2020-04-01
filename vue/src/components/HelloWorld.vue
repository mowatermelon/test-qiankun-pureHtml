<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      <i class="el-icon-s-promotion" />
      vue version: {{ vueVersion }}, element-ui version: {{ elementVersion }}
    </p>
  </div>
</template>

<script>
	import ElementUI from 'element-ui';
	import Vue from 'vue';

	export default {
		name: 'HelloWorld',
		props: {
			msg: String,
		},
		data() {
			return {
				vueVersion: Vue.version,
				elementVersion: ElementUI.version,
			};
		},
  computed: {
    key() {
      return this.$route.path;
    },
    loading() {
      return this.$root.loading;
    },
    content() {
      return this.$root.content;
    },
  },
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
  },		
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #64b587;
  }
</style>
