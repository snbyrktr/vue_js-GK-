const app = Vue.createApp({
    data(){
        return{
            todoList: [
                {id: 1, text: "1. week", completed : false },
                {id: 2, text: "2. week", completed : false },
                {id: 3, text: "3. week", completed : false },
                {id: 4, text: "4. week", completed : false },
                {id: 5, text: "5. week", completed : false },
                {id: 6, text: "6. week", completed : false },
                {id: 7, text: "7. week", completed : false },

            ],
        };
    },

    methods:{
        addTodo(event){
            this.todoList.push({
                id: new Date().getTime(),
                text: event.target.value,
                completed: false,
            });
            event.target.value="";
        },
        remmoveItem(todoItem){
            this.todoList=this.todoList.filter((todo) !== todoItem);
        },
    },
    computed:{
        completedItemCount() {
            return this.todoList.filter((t) => t.completed).length;
          },
          unCompletedItemCount() {
            return this.todoList.filter((t) => !t.completed).length;
          },
    },
}).mount("#app");