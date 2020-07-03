/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import { createStore } from 'vuex';

type tip = {
    title: string,
    description: string,
}

type State = {
    tips: Array<tip>
}

const state= {
 tips:[
 {
   id:1,
   title:"Keep Your Navigation Simple",
   description:"Keep your landing page Navigation simple by removing any irrelevant information,images and links"
 },

  {
   id:2,
   title:"Make Good Use of Colour Psychology",
   description:" Science tells us that colour elicits emotion which can result in negative or positive feelings And therefore "
 },
   {
   id:3,
   title:" Choose Typography Carefully",
   description:"Typography is made up of elements such as font type and size, kerning (white space between individual characters or letters), and tracking and spacing. It is important when it comes to making your content more comprehensible to the reader "
 },
    {
   id:4,
   title:"Convey the value of the offer clearly",
   description:"Make the benefit of the offer easy to understand — list the specific benefits a person will get from downloading your resource or signing up to your offer. Be sure to craft compelling headlines. "
 }]
  }

//mutations
const mutations = {
  
};

//getters
const getters = {
 getTips( state:State){
   return state.tips
 }
};

//actions
const actions = {

}



export const store = createStore({ state, mutations,getters,actions});
