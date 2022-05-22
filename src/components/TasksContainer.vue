<template>

<div id="main_task_container">

    <div :key="task.id" v-for="task in tasks" >
        <TaskUnit @getdone-task="$emit('getdone-task', task.id)" @delete-task="$emit('delete-task', task.id)" @show-rating-modal="$emit('show-rating-modal', task.id)" :task="task"/>
    </div>

    <AddTask @show-task-modal="$emit('show-task-modal')"/>

</div>

</template>

<script>
import TaskUnit from './TaskUnit'
import AddTask from './AddTask.vue'

export default {
    name: 'TasksContainer',
    props: {
        tasks: Array,
    },

    components: {
        TaskUnit,
        AddTask
    },

    emits: ['delete-task', 'getdone-task', 'show-task-modal', 'show-rating-modal']
}
</script>

<style scoped>

    #main_task_container {
        width: 100%;
        height: 100%;
        margin-right: 10px;
    }

</style>
