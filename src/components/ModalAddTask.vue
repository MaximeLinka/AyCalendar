<template>

    <div class="modal-overlay" @click="$emit('close-task-modal')">

      <div class="modal_content" @click.stop>

        <div class="modal_header">
            <h2>Nouvelle tâche</h2>            
        </div>

        <div class="input-row">
            <label>Description</label>
            <input type="text" v-model="description"/>
        </div>

        <div class="input-row">
            <label>Temps</label>
            <input type="text" v-model="temps"/>
        </div>

        <div class="save_btn" @click="onSave">
            <p>Enregistrer</p>
        </div>

        </div>

    </div>

</template>

<script>
export default {
    name: "ModalAddTask",

    data() {
      return {
        description: '',
        temps: ''
      }
    }, 

    methods: {
        onSave() {
          const new_task = {
            id: Math.floor(Math.random() * 100000),
            text: this.description,
            time_left: this.temps,
            done: false
          }

          this.description = ''
          this.temps = ''

          this.$emit('add-task', new_task)
          this.$emit('close-task-modal')
      }
   },
}

</script>

<style scoped>

* {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal_content {
  text-align: center;
  background: #E0E0E0;
  height: 310px;
  width: 500px;
  margin-top: 10%;
  padding: 0px 0;
  border-radius: 20px;
}

.modal_header {
    text-align: center;
    height: 50px;
    width: 100%;
    border-radius: 20px 20px 0 0;
}

h2 {
    color: black;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  /* font-weight: 500; */
  font-size: 16px;
  margin: 20px 0;
}

.input-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 15px;
}

label {
  margin-right: 10px;
  font-weight: bold;
  width: 100px;
}

input {
  border: 1px solid #00000041;
  width: 300px;
  height: 25px;
  padding: 10px;
  border-radius: 8px;
}

.save_btn {
    background: #2AC940;
    border-radius: 5px;
    width: 120px;
    height: 35px;
    margin-left: auto;
    margin-right: 20px;
    margin-top: 40px;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.save_btn:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.save_btn > p {
    line-height: 35px;
    height: 35px;
    font-weight: bold;
}

</style>