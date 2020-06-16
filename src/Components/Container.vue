<template>
	<div cls="w-full mx-auto">
		<h1 class="uppercase text-xl font-din my-10">Get Custom Tailwind components with us</h1>
        <p class="text-md w-full mx-3  text-center my-10">Are you in need of Tailwind Custom Components ? Worry Less because we have got your back.! Reach out by clicking the button below!</p>
		<a href="https://www.fiverr.com/share/WejlER" class="w-full p-2 bg-red text-white w-xl shadow-xl uppercase rounded-md">Hire us!</a>

		<ul class="unstyled flex justify-between w-full lg:w-3/4 mx-auto mt-10">
			<li v-for="product in products" class="w-20 h-20 shadow bg-white p-4">{{product.name}}
     <span>{{product.price}}</span>
			</li>
			
		</ul>

		<h1>How Many products do we have ?{{productsCount}}</h1>

		<button @click="reducePrice(10)">Add Method</button>
	</div>
</template>

<script>
	export default {
  name:"Container",
  computed:{
  	products (){
  		return this.$store.state.products;
  	},

  	productsCount () {
  		return this.$store.getters.productCount;
  	}
  },
  methods: {
  	reducePrice (amount) {
  		return this.$store.dispatch("reducePrice",amount);
  	}
  }
	};
</script>