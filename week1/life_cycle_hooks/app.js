const app = Vue.createApp({
    data (){
        return{
            title : "test ",
            itemList : [],
        };
    },

    beforeCreate(){
        console.log("beforeCreate worked...");
    },
    created(){
        console.log("Created worked...");

        setTimeout(() => {
            this.itemList=[2,3,4,5,5,6876];
        },2000);

        setTimeout(() => {
            this.title="new";
        },5000);
    }, 
    beforeMount(){
        console.log("beforeMount worked...");
    }, 
    mounted(){
        console.log("mounted worked...");
    }, 
    beforeUpdate(){
        console.log("beforeUpdate worked...");
    }, 
    updated(){
        console.log("updated worked...");
    }, 
    beforeUnmount(){
        console.log("beforeUmount worked...");
    }, 
    unmounted(){
        console.log("unmounted worked...");
    },
}).mount("#app");

setTimeout(() => {
    app.unmount();
},7000);