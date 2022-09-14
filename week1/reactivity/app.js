const app =Vue.createApp({
    data (){
        return{
            search:"",
            itemList : ["opel","mazda","renault","mercedes"],
            //filteredList : [],
        };
    },

    methods :{
        searchList(){
            // this.filteredList = this.itemList.filter((i)=>i.includes(this.search));
        },
    },
    computed:{
        filteredList(){
            return this.itemList.filter((i)=>i.includes(this.search));
        },
    },
}).mount("#app");