<template>

    <div class="modal-overlay" @click="$emit('close-rating-modal')">

        
      <div class="modal_content" @click.stop>

        <div class="modal_header">
            <h2 class="modal_title">Quel est votre ressenti ?</h2>            
            <div class="modal_star_rating">
                <img class="img_star" src="../assets/star.png" alt="" width="20" height="20" @click="onStarClick(1)">
                <img class="img_star" src="../assets/star.png" alt="" width="20" height="20" @click="onStarClick(2)">
                <img class="img_star" src="../assets/star.png" alt="" width="20" height="20" @click="onStarClick(3)">
                <img class="img_star" src="../assets/star.png" alt="" width="20" height="20" @click="onStarClick(4)">
                <img class="img_star" src="../assets/star.png" alt="" width="20" height="20" @click="onStarClick(5)">
            </div>
        </div>

        <div class="modal_task">
            <p class="modal_task_text">Aller faire les courses</p>
        </div>

        <textarea class="modal_comment_input" placeholder="Commentaire"/>
        
        <div class="save_btn" @click="onSave">
            <p>Enregistrer</p>
        </div>

      </div>

    </div>

</template>

<script>
export default {
    name: "ModalRating",

    data() {
        return {
            stars: 0,
            comment: '',
        }
    }, 

    methods: {
        onSave() {
          //this.$emit('add-task', new_task)
          this.$emit('close-rating-modal')
        },

        onStarClick(nb_star) {
            if (nb_star === 1)
            {
                console.log("test")
            }
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
  background-color: #00000090;
}

.modal_content {
  text-align: center;
  background: #E0E0E0;
  height: 310px;
  width: 500px;
  margin-top: 10%;
  padding: 0px 0;
  border-radius: 12px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

}

.modal_header {
    text-align: center;
    background: #E0E0E0;
    height: 50px;
    width: 100%;
    border-radius: 12px 12px 0 0;
}

.modal_title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;

}

.img_star {
    margin: 3px;
}

.img_star:hover {
    transform: scale(1.2);
    cursor: pointer;
}

.modal_task {
    background: #FF5733;
    border-radius: 5px;
    margin: 10px;
    text-align: start;
    height: 35px;


}

.modal_task_text {
    line-height: 35px;
    height: 35px;
    margin-left: 10px;
    color: black;
}

.modal_comment_input {
    width: 96%;
    height: 100px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
    padding: 5px;
    font-size: 14px;

}

.save_btn {
    background: #2AC940;
    border-radius: 5px;
    width: 120px;
    height: 35px;
    margin-left: auto;
    margin-right: 10px;
    margin-bottom: 20px;

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

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #2AC940;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 10px;
}

button:hover {
  transform: scale(1.1);
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
  padding: 10px;
  border-radius: 8px;
  width: 200px;
  height: 100px;
}

</style>