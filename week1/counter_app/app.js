const app= Vue.createApp({
    data(){
        return{
            counter : 0,
            counter2 : 0,
        };
    },

    methods:{},
    computed : {
        getCounterResult(){
            console.log("counter1 is working...");
            return this.counter > 5 ? ">" : "<";
        },

        getCounter2Result(){
            console.log("counter2 is working...");
            return this.counter2 > 5 ? ">" : "<";
        },
    },

    watch:{
        counter(newValue,oldValue){
            console.log("counter",oldValue,"=>",newValue);
        },
        getCounterResult(newValue,oldValue){
            console.log("result",oldValue,"=>",newValue);
        },
    },
}).mount("#app");
