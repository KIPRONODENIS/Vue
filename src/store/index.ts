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
 },
     {
   id:5,
   title:"Hire a Professional ",
   description:"Designing a landing page is a daunting task that has a difficult puzzle which can only be handle by an expert with good experience. You can get on  <a href='http://www.kipronodeno.com/' class='text-red-500'> here </a>"
 },
      {
   id:6,
   title:"Create Scannable copy",
   description:"Most online readers scan website content, so make your copy highly scannable by using bullet points and lists to break up chunks of text, and varying the font size to differentiate between the more and less important elements of your page."
 },
       {
   id:7,
   title:" Optimize for SEO",
   description:"Most online readers scan website content, so make your copy highly scannable by using bullet points and lists to break up chunks of text, and varying the font size to differentiate between the more and less important elements of your page."
 },
        {
   id:8,
   title:" Optimize For Mobile Viewing",
   description:"Mobile traffic now accounts for 69 percent of online activity and responsive design is one of the main ranking Google ranking-factors."
 },

         {
   id:9,
   title:" Add Images",
   description:" Most case studies indicate that photos of real people improve conversion rates (often by up to 50%) over stock or model images. This is likely because we have a high level of empathy and trust for “people like us.”"
 },
          {
   id:10,
   title:" Add Video",
   description:"Increase the “know, like, trust” factor by adding a video to your landing page. A video can help you better connect with viewers and educate them on the benefits of your product or service."
 },
           {
   id:11,
   title:"Share Customer Testimonials",
   description:" To quote, Allison Otting, “If you can help your prospects see that people just like them are already your customers and you’ve solved their problems then they will be that much more likely to convert from your landing page.”"
 },

            {
   id:12,
   title:" Display Trust Symbols",
   description:"Establish credibility by displaying trust symbols like awards and accolades, or any other credentials your website or brand have. If you’ve worked with any leading brands, add their logos to your page."
 },
             {
   id:13,
   title:"Include Your Contact informations",
   description:"Increase trust by clearly displaying the name of your company or business and your contact details, including a Google map of your location (so Google can find it more easily) and links to your social networks."
 },
              {
   id:14,
   title:"Include Social Share Buttons",
   description:"Google “likes” a highly shared page so make your social share buttons are highly visible on your landing page and encourage people to share your content."
 },
               {
   id:15,
   title:" A/B Test Your Page",
   description:"A/B testing is a way to compare two versions of a single variable, typically by testing a subject’s response to variant A against variant B, and determining which of the two variants is more effective."
 },
                {
   id:16,
   title:"Craft a benefit-focused headline",
   description:"Your headline is the first thing they’ll read, and it should clearly and concisely communicate the value of your landing page and offer."
 },
                 {
   id:17,
   title:"Craft a benefit-focused headline",
   description:"Your headline is the first thing they’ll read, and it should clearly and concisely communicate the value of your landing page and offer."
 },
                  {
   id:18,
   title:". Choose an image that illustrates the offer",
   description:" The purpose of your image is to convey a feeling — it should illustrate how your visitor will feel once they receive your offer."
 },
                   {
   id:19,
   title:"Include the lead form above the fold",
   description:"Your lead form needs to be readily accessible should your prospect want to convert right away — you definitely don’t want them searching and scanning your landing page to find your offer"
 },
       {
   id:20,
   title:"Add a clear and standout call-to-action",
   description:"he CTA button needs to stand out, meaning you should use a color that contrasts with other elements on the page"
 }
 ]
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
