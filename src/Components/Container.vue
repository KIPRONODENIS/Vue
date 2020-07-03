<template>

<div>
  <h1 class="text-3xl text-purple-500 font-bold ">30 Things You Need To Know About Landing Page</h1>
<ul class="list-unstyled lg:mx-10 w-full lg:w-3/4 lg:mx-auto mb-10">
  <li v-for="tip in tips" :key="tip.id">
    <h4 class="my-3 text-xl font-bold">{{tip.id}}. {{tip.title}}</h4>
    <div v-html="tip.description" class="text-gray-500"></div>
  </li>
</ul>

<footer class="bg-black text-blue-800 py-10">
  <a href="http://www.kipronodeno.com/" class="m-4 w-2/5 p-4 bg-blue-500">Find Landing Page Designer Here.</a>
</footer>
</div>
</template>

<script>
	export default {
  name:"Container",
  computed:{
  	tips (){
  		return this.$store.getters.getTips;
  	},


  },
  methods: {

  }
	};
</script>