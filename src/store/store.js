import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export const store=new Vuex.store({
	state: {
		products:[
         {
         	name:"products 1",
         	price:100
         },
         {
         	name:"products 1",
         	price:100
         },
         {
         	name:"products 1",
         	price:100
         }
		]
	}
})