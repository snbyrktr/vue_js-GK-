const app= Vue.createApp({
    data (){
        return{
            fullName: "pop",
        
        };
    },
    methods:{
        updateValue(kedi){
            this.fullName = kedi.target.value;
            
        },
    },
    
}).mount("#script");