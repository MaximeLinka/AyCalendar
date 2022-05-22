<template>

    <div >
        <img class="add_btn" src="../assets/add.png" width="20" height="20" @click="addTaskForm()"/>
    </div>    

</template>

<script>

export default ({
    name: "AddTask",

    methods: {
        addTaskForm() {
            this.$emit('show-task-modal')
        }
    }

})
</script>

<style scoped>

    div {
        width: 50px;
        height: 50px;
        margin-left: auto;
        margin-top: 15px;

        border-radius: 5px;
        background: #3399FF;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    div:hover {
        transform: scale(1.2);
    }

    .add_btn {
        width: 60%;
        height: 60%;
    }

    .add_btn:hover {
        transform: scale(1.2);
    }

</style>
