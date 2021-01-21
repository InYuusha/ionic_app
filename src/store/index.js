import {createStore} from 'vuex';
const store = createStore({
    state(){
        return{
            memories:[
                {
                    id:'m1',
                    title:"A trip to manali",
                    description:"It was a great trip",
                    image:'https://himachaltourism.gov.in/wp-content/uploads/2019/04/Solang-Valley-Manali.jpg'
                },
                  {
                    id:'m2',
                    title:"A trip to goa",
                    description:"It was a great trip",
                    image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=1100&h=600&s=1'
                },
                  {
                    id:'m3',
                    title:"Vacations in kerala",
                    description:"It was a great trip",
                    image:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/kerala-boat-and-palm-trees-47efa95.jpg?quality=90&resize=960,872'
                },

            ]
        }
    },
    getters:{
        memories(state){
            return state.memories;
        }
    }
});
export default store;