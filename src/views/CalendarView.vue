<template>

    <div class="calendar_container">

        <div class="calendar_header">
        </div>

        <DaysContainer :days="days"/>

    </div>

</template>

<script>
import DaysContainer from '../components/DaysContainer.vue'

export default {
    name: 'CalendarView',
    components: {
        DaysContainer,
    },

    data() {
        return {
            days: Array
        }
    },

    created() {
        this.days = [
            {index: 1, name: "Lundi"},
            {index: 2, name: "Mardi"},
            {index: 3, name: "Mercredi"},
            {index: 4, name: "Jeudi"},
            {index: 5, name: "Vendredi"},
            {index: 6, name: "Samedi"},
            {index: 7, name: "Dimanche"},
        ]
    }


}
</script>

<style scoped>

    .calendar_container {
        width: 100%;
        height: 80%;
        margin: 20px;
        background: #C8C8C8;
        border-radius: 10px;

        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .calendar_header {
        background: #FF5733;
        height: 40px;
        border-radius: 10px 10px 0 0;
    }

</style>