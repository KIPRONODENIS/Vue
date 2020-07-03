<template>

<div>
  <h1 class="text-3xl text-purple-500 font-bold ">30 Things You Need To Know About Landing Page</h1>
<ul class="list-unstyled  m-4 lg:mx-10 w-full lg:w-3/4 lg:mx-auto">
  <li v-for="tip in tips" :key="tip.id">
    <h4 class="my-3 text-xl font-bold">{{tip.id}}. {{tip.title}}</h4>
    <div v-html="tip.description" class="text-gray-500"></div>
  </li>
</ul>

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