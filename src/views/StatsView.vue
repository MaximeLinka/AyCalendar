<template>

    <div class="main_container">

        <ListsContainer :lists="lists"/>

            <div class="stats_container">
                <div class="stats_header">
                </div>
            </div>
    </div>


</template>

<script>
import ListsContainer from '../components/ListsContainer.vue'

export default {
    name: 'StatsView',
    components: {
        ListsContainer,
    },

    data() {
        return {
            lists: Array,
        }
    },

    created() {
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

    .main_container {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        margin: 10px;
    }

    .stats_container {
        width: 100%;
        height: 80%;
        margin-left: 10px;
        background: #C8C8C8;
        border-radius: 10px;

        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .stats_header {
        background: #FF5733;
        height: 40px;
        border-radius: 10px 10px 0 0;
    }
    

</style>
