<template>

    <div id="list_container">

        <h2> Listes </h2> 

        <div :key="list.id" v-for="list in lists">
            <ListUnit :list="list"/>
        </div>        

    </div>
</template>

<script>

import ListUnit from "./ListUnit";

export default {
    name: "ListsContainer",
    props: {
        lists: Array,
    },

    components: {
        ListUnit,
    },
    
}
</script>

<style scoped>

    #list_container {
        display: flex;
        flex-direction: column;

        width: 250px;
        height: 80%;
        background: lightgrey;
        border-radius: 10px;
        margin-right: 5px;
        margin-left: 10px;
    }

    h2 {
        margin-top: 10px;
    }

</style>
