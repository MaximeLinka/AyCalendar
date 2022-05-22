<template>
    <div :class="[list.selected ? 'selected' : '']">

        <p> {{ list.name }}</p>

    </div>
</template>

<script>

export default {
    name: "ListUnit",
    props: {
        list: Object
    }
}
</script>

<style scoped>
    div {
        background: grey;
        border-radius: 5px;
        width: 50%;
        height: 30px;
        margin-top: 10px;
        margin-bottom: 5px;
        margin-right: auto;
        margin-left: auto;

        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    div:hover {
        transform: scale(1.1);
    }

    p {
        text-align: center;
        line-height: 30px;
        height: 30px;
    }

    .selected {
        background: #2AC940;
    }
</style>
