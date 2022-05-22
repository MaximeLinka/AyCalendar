<template>
    <div class="days_container">
        <div :key="day.index" v-for="day in days" >
            <DayUnit :name="day.name" />
        </div>


    </div>
   
</template>

<script>
import DayUnit from './DayUnit.vue'

export default {
    name: 'DaysContainer',
    components: {
        DayUnit,
    },

    props: {
        days: Array
    }
}
</script>

<style scoped>

    .days_container {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

</style>
