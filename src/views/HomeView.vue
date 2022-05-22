<template>
        <ListsContainer :lists="lists"/>

        <TasksContainer @show-rating-modal="showRatingModal" @show-task-modal="showTaskModal" @getdone-task="getDoneTask" @delete-task="deleteTask" :tasks="tasks"/>

        <ModalAddTask v-show="isTaskModalVisible" @add-task="addTask" @close-task-modal="closeTaskModal"  />
        <ModalRating v-show="isRatingModalVisible" @close-rating-modal="closeRatingModal" />

</template>

<script>
import TasksContainer from '../components/TasksContainer.vue'
import ListsContainer from '../components/ListsContainer.vue'
import ModalAddTask from '../components/ModalAddTask.vue'
import ModalRating from '../components/ModalRating.vue'

export default {
    name: 'HomeView',
    components: {
        TasksContainer,
        ListsContainer,
        ModalAddTask,
        ModalRating,
    },

    data () {
        return {
            tasks: [],
            lists: [],
            isTaskModalVisible: false,
            isRatingModalVisible: false,
        }
    },

    methods: {
        addTask(task) {
            this.tasks = [...this.tasks, task]
        },

        deleteTask(id) {
            this.tasks = this.tasks.filter((task) => task.id != id)
        },

        getDoneTask(id) {
            this.tasks = this.tasks.map((task) => 
            task.id === id ? { ...task, done: true} : task
            )
        },

        showTaskModal() {
            this.isTaskModalVisible = true;
        },

        closeTaskModal() {
            this.isTaskModalVisible = false;
        },

        showRatingModal() {
            this.isRatingModalVisible = true;
        }, 

        closeRatingModal() {
            this.isRatingModalVisible = false;
        }
    },

    created() {
        this.tasks = [
        {
            id: 1,
            text: "Reviser le DE de Canaux de Transmission.",
            time_left: "12 h",
            done: true,
        },
        {
            id: 2,
            text: "Rendre le rapport du projet tranverse.",
            time_left: "6 h",
            done: false,
        },
        {
            id: 3,
            text: "Donner des croquettes à Minou.",
            time_left: "2 h",
            done: false,
        }
        ],

        this.lists = [
        {
            id: 1,
            name: "Maison",
            selected: true,
        },
        {
            id: 1,
            name: "Travail Perso",
            selected: false,
        },
        {
            id: 1,
            name: "EFREI",
            selected: false,
        },
        ]
    }
    
}
</script>

<style scoped>



</style>
