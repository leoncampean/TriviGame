<template>
  <div class="main-div">
    <h1>Welcome To Trivia Game</h1>
    <h2>Select from bellow the type of trivia game you want to play!</h2>
    <p>We have a lots of categoryes where you can choose from</p>
    <p>Click on one of our categoryes bellow to begin your trivia game</p>
    <div class="select-div">
      <select id="list" @change="getSelected">
        <option value="" disabled selected>-- select option --</option>
        <option value="1">{{ option.gk }}</option>
        <option value="2">{{ option.music }}</option>
        <option value="3">{{ option.sport }}</option>
        <option value="4">{{ option.vg }}</option>
        <option value="5">{{ option.computer }}</option>
        <option value="6">{{ option.math }}</option>
      </select>
    </div>
  </div>
  <router-link to="/home">
    <button value="1" id="quiz1">Enter GK Quiz</button>
  </router-link>
  <router-link to="/music">
  <button value="2" id="quiz2">Enter Music Quiz</button>
  </router-link>
  <router-link to="/sport">
  <button value="3" id="quiz3">Enter Sport Quiz</button>
  </router-link>
  <router-link to="/game">
  <button value="4" id="quiz4">Enter Games Quiz</button>
  </router-link>
  <router-link to="/computer">
  <button value="5" id="quiz5">Enter Computer Quiz</button>
  </router-link>
  <router-link to="/math">
  <button value="6" id="quiz6">Enter Math Quiz</button>
  </router-link>
</template>

<script>
import { getSelectedValue } from "../assets/javascript/select";
export default {
  data() {
    return {
      option: {
        music: "Enterteiment: Music",
        sport: "Sports",
        gk: "General Knowleage",
        vg: "Video Games",
        computer: "Computers Science",
        math: "Matemathics Science",
      },
    };
  },
  methods: {
    getSelected() {
      getSelectedValue();
    },
  },
};
</script>

<style scoped>
.main-div {
  width: 65%;
  margin: auto;
  margin-top: 100px;
  text-align: center;
  background-color: rgb(91, 220, 143);
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-width: 7px;
  border-style: solid;
  border-image: linear-gradient(
      to bottom,
      rgb(189, 42, 16),
      rgba(9, 146, 98, 0)
    )
    10 40%;
}

.main-div h1 {
  padding-top: 50px;
  padding-bottom: 100px;
  font-size: 40px;
  font-weight: bolder;
  color: rgb(48, 55, 49);
}

.main-div h2 {
  padding-bottom: 30px;
}

.main-div .select-div {
  padding-bottom: 50px;
  padding-top: 20px;
}

.select-div select {
  width: 50%;
  height: 40px;
  text-align: center;
  font-size: 17px;
  background-color: rgb(59, 69, 61);
  color: whitesmoke;
  border-radius: 15px;
}

button {
  margin-top: 70px;
  margin-left: 40%;
  width: 20%;
  height: 60px;
  font-size: 20px;
  border-radius: 30px;
  background-color: rgb(48, 55, 49);
  color: whitesmoke;
  border: 2px solid rgb(189, 42, 16);
  display: none;
  text-decoration-color: black;
}

@media (max-width: 900px){
  .main-div h1 { 
    font-size: 20px;
  }

  .main-div h2 {
    font-size: 17px;
  }
  .main-div p {
    font-size: 15px;
  }
  .select-div select {
    font-size: 15px;
  }
  button {
    font-size: 15px;
  }
}
</style>>
