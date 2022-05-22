<template>
    <div class="day_body">

        <div class="day_header">
            <h3>{{ name }}</h3>
        </div>

    </div>    
</template>

<script>

export default {
    name: 'DayUnit',
    props: {
        name: String
    }
}
</script>

<style scoped>

    .day_body {
        background: #828282;
        margin: 5px;
        height: 88%;
        border-radius: 5px;

        width: 120px;
        flex-shrink: 1;
    }

    .day_header {
        background: #3399FF;
        height: 25px;
        border-radius: 5px 5px 0 0;
    }

    h3 {
        font-weight: bold;
        margin: 10px;
        line-height: 25px;
        height: 25px;
        
    }


</style>
