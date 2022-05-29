<template>
  <router-link to="/">
    <button
      @click="
        goHome();
        removeData();
      "
      class="back-home"
    >
      Back to home?
    </button>
  </router-link>
  <p class="timer-10">Time left: {{ minuteCount }}:{{ secondCount }}</p>
  <p class="timer">{{ timerCount }}</p>
  <div class="trivia-div">
    <p class="scoreboard1">
      Wrong ansewrs: <span id="score">{{ scoreWrong }}</span>
    </p>
    <p class="scoreboard">
      ScoreBoard: <span id="score">{{ score }}</span>
    </p>
    <h1>Trivia Game</h1>
    <p
      v-for="results in allResults.slice(3, 4)"
      :key="results.id"
      id="category"
    >
      Category: {{ results.category }}
    </p>
    <p
      v-for="results in allResults.slice(3, 4)"
      :key="results.id"
      id="difficulty"
    >
      Difficulty: {{ results.difficulty }}
    </p>
    <p
      class="question"
      v-for="results in allResults.slice(3, 4)"
      :key="results.id"
      id="question"
    >
      Question: {{ results.question }}
    </p>
    <h4>Answers:</h4>
  </div>
  <div
    class="button-div"
    v-for="results in allResults.slice(3, 4)"
    :key="results.id"
  >
    <button
      id="isCorrect"
      @click="
        score += 1;
        submit();
      "
    >
      {{ results.correct_answer }}
    </button>
    <button
      id="isWrong"
      @click="
        scoreWrong++;
        submit();
      "
    >
      {{ results.incorrect_answers[0] }}
    </button>
    <button
      id="isWrong"
      @click="
        scoreWrong++;
        submit();
      "
    >
      {{ results.incorrect_answers[1] }}
    </button>
    <button
      id="isWrong"
      @click="
        scoreWrong++;
        submit();
      "
    >
      {{ results.incorrect_answers[2] }}
    </button>
  </div>
  <router-link to="/end">
      <button
        class="results"
      >
        Results
      </button>
  </router-link>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    allResults: [],
    score: 0,
    scoreWrong: 0,
    timerCount: 15,
    minuteCount: 9,
    secondCount: 59,
  }),


  mounted() {
    this.getData();
    if (localStorage.score) {
      this.score = JSON.parse(localStorage.score);
    }
    if (localStorage.scoreWrong) {
      this.scoreWrong = JSON.parse(localStorage.scoreWrong);
    }
    if (localStorage.minuteCount) {
      this.minuteCount = JSON.parse(localStorage.minuteCount);
    }
    if (localStorage.secondCount) {
      this.secondCount = JSON.parse(localStorage.secondCount);
    }
  },

  watch: {
    score(newScore) {
      console.log("Updated Score");
      localStorage.score = JSON.stringify(newScore);
    },
    scoreWrong(newScoreWrong) {
      localStorage.scoreWrong = JSON.stringify(newScoreWrong);
    },
    minuteCount(minute) {
      localStorage.minuteCount = JSON.stringify(minute);
    },
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          window.location.reload();
          this.scoreWrong++;
        }
      },
      immediate: true,
    },

    secondCount: {
      handler(minValue) {
        if (minValue > 0) {
          setTimeout(() => {
            localStorage.secondCount = JSON.stringify(minValue);
            this.secondCount--;
          }, 500);
        } else {
          if (this.minuteCount > 0) {
            this.minuteCount--;
            this.secondCount += 59;
          } else {
            this.$router.push({ path: "/end" });
            localStorage.removeItem("score");
            localStorage.removeItem("scoreWrong");
            localStorage.removeItem("minuteCount");
            localStorage.removeItem("secondCount");
          }
        }
      },
      immediate: true,
    },
  },

  methods: {
    getData() {
      let url =
        "https://opentdb.com/api.php?amount=50&category=21";
      axios.get(url).then((response) => {
        this.allResults = response.data.results;
        console.log(response.data);
      });
    },
    submit: function () {
      setTimeout(function () {
        window.location.reload();
      });
    },
    goHome() {
      alert("Redirecting back to Homepage");
    },
    removeData() {
      localStorage.removeItem("score");
      localStorage.removeItem("scoreWrong");
      localStorage.removeItem("minuteCount");
      localStorage.removeItem("secondCount");
    },
  },
};
</script>

<style scoped>
.trivia-div {
  width: 80%;
  margin: auto;
  margin-top: 10px;
  background-color: rgb(91, 220, 143);
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-width: 7px;
  border-style: solid;
  border-image: linear-gradient(
      to bottom,
      rgb(189, 42, 16),
      rgba(9, 146, 98, 0)
    )
    10 40%;
}
.trivia-div h1 {
  margin: auto;
  margin-bottom: 30px;
  color: rgb(40, 52, 47);
  margin-left: 20px;
  padding-top: 80px;
}

.trivia-div .scoreboard1 {
  color: black;
  float: right;
  padding-right: 20px;
}

.trivia-div p {
  margin-left: 50px;
  font-size: 20px;
  font-weight: bold;
}

.trivia-div .question {
  margin-left: 50px;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 100px;
}

.trivia-div h4 {
  font-size: 20px;
  text-align: center;
}

.button-div {
  margin: auto;
  margin-top: 20px;
  width: 50%;
  text-align: center;
}

.button-div button {
  background-color: rgb(189, 42, 16);
  color: whitesmoke;
  font-size: 17px;
  border-radius: 20px;
  margin-left: 10px;
  border: 1px solid black;
  height: 50px;
}

.button-div button:hover {
  background-color: rgb(216, 202, 38);
}

.back-home {
  margin-top: 10px;
  margin-left: 40%;
  width: 20%;
  height: 60px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 30px;
  color: rgb(30, 31, 30);
  background-color: rgb(91, 220, 143);
  border: 2px solid rgb(189, 42, 16);
}

.timer {
  text-align: center;
  margin-top: 70px;
  color: whitesmoke;
  font-size: 30px;
}

.timer-10 {
  text-align: center;
  margin-top: 50px;
  color: black;
  font-size: 25px;
  float: right;
  padding-right: 40px;
  background-color: rgb(91, 220, 143);
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  border: 2px solid rgb(189, 42, 16);
}

.results {
  text-align: center;
  margin-top: 30px;
  margin-left: 46%;
  padding: 15px 20px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 30px;
  color: rgb(30, 31, 30);
  background-color: rgb(91, 220, 143);
  border: 2px solid rgb(189, 42, 16);
}

@media (max-width: 800px){
  .results {
    font-size: 15px;
    margin-left: 40%;
  }
  .timer {
    font-size: 20px;
  }
  .timer-10 {
    font-size: 20px;
  }
  .back-home {
    font-size: 15px;
  }
  .button-div button {
    font-size: 13px;
  }
  .trivia-div h1{
    font-size: 20px;
  }

  .trivia-div .scoreboard1 {
    font-size: 15px;
  }
  .trivia-div .scoreboard {
    font-size: 15px;
  }

  .trivia-div p {
    font-size: 15px;
  }

  .trivia-div .question {
    font-size: 17px;
  }

  .trivia-div h4 {
    font-size: 17px;
  }
}

</style>