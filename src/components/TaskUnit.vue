<template>
    
    <div :class="[task.done ? 'done' : '', 'task_main']">
        <p id="task_text">{{ task.text }}</p>

        <div id="task_time">
            <p id="task_time_p">{{ task.time_left }}</p>
        </div>

        <div id="task_menu">

            <img class="task_menu_btn" src="../assets/checkmark_green.png" width="20" height="20" @click="onGetDone(task.id)"/>
            <img class="task_menu_btn" src="../assets/cross_red.png" width="20" height="20" @click="onDelete(task.id)" />

        </div>

    </div>

</template>

<script>

export default ({
    name: "TaskUnit",
    props: {
        task: Object,
    },

    methods: {
        onDelete(id) {
            console.log(id)
            this.$emit('delete-task', id)
        },

        onGetDone(id) {
            this.$emit('getdone-task', id)
            this.$emit('show-rating-modal', id)
        }
        
    },

})
</script>

<style scoped>
    #task_text, #task_time_p {
        width: 100%;
   }

    #task_text {
        text-align: start;
        margin-left: 8px;
    }

    .task_main {
        background: #FF5733;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        height: 40px;
        border-radius: 5px;
        margin: 4px;

        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .done {
        background: #2AC940;
    }

    #task_time {
        background: #3399FF;
        width: 10%;
        border-radius: 5px 0px 0px 5px;
    }

    #task_menu {
        background: #F1C40F;
        width: 20%;
        border-radius: 0px 5px 5px 0px;

        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: nowrap;
        align-items: center;

        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .task_menu_btn:hover {
        transform: scale(1.2);
    }

    
</style>
