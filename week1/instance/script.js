const app = Vue.createApp({
    data(){
        return{
            title:"vue.js öğreniyorum...",
            content :"classic nostalgia",
            link: {
                title :"github link için tıklayınız",
                target :"_blank",
                url : "https://github.com/snbyrktr",
                alt : "sena çalışmalar",
            },
            coords: {
                x:0,
                y:0,
            },
        };
    },

    methods:{

        changeTitle(pTitle){
            this.title = pTitle;
        },
        updateCoords(message,event){
            this.changeTitle(`${event.x},${event.y}`);
            this.coords={
                x: event.x,
                y: event.y,
            };
        },

    },
}).mount("#script")