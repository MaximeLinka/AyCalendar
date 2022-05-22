<template>
    <div id="navbar">
        <router-link to="/stats">
                <img class="nav_btn" src="../assets/star.png" width="30" height="30" />
        </router-link>

        <router-link to="/">
            <img class="nav_btn" src="../assets/task.png" width="30" height="30" />
        </router-link> 

        <router-link to="/calendar">
            <img class="nav_btn" src="../assets/calendar.png" width="30" height="30" />
        </router-link>
    </div>
</template>

<script>

export default ({
    name: "NavBar",
    props: {
        width: Number,
        height: Number,
        color: String,
    },

    data () {
        return {
            btn_size: Number
        }
    },  

    methods: {
       
    },

    computed: {
        css() {
            return {
                '--bar-width': this.width + "px",
                '--bar-height': this.height + "px",
                '--btn-size': (this.height / 2) + "px",
                '--bg-color': this.color,
            }
        },

    }

    
})
</script>

<style scoped>
    #navbar {
        background-color: v-bind(color);
        width: v-bind(width);
        height: v-bind(height);
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        position: absolute;
        left: 50%;
        bottom: 0px;
        transform: translate(-50%, -50%);
        margin: 0 auto;
        display: inline-block;
    }

    .nav_btn {
        width: 30px;
        height: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 20px;
        margin-right: 20px;
        display: inline;
    }

    .nav_btn:hover {
        transform: scale(1.2);
    }

</style>
