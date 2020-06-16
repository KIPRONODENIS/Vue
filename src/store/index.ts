/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import { createStore } from 'vuex';

type product = {
    name: string,
    price: number,
}

type State = {
    products: Array<product>
}

const state= {
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

const mutations = {
 reducePrice: function (state: State,payload : any) {
 return state.products.forEach(product => {

 return product.price+=payload;

 })

 }
};


const getters = {
 productCount(state: State) {
 return state.products.length
 }
};


const actions = {
  reducePrice: (context: any ,payload: any ) => {
  return context.commit('reducePrice',payload)
  }
}



export const store = createStore({ state, mutations,getters,actions});
