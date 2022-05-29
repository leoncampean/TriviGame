<template>
<h1 class="end-title">Bellow you can see details about your run!</h1>
  <div class="main-end">
      <h1>Details about your run</h1>
      <p>Number of questions: {{question}}</p>
      <p>Number of correct answers:  {{correctAns}}</p>
      <p>Number of incorrect answers: {{incorrectAns}}</p>
      <p>Succes rate is: {{rate}}%</p>
      <p>Time left: {{minute}}:{{second}}</p>
      <p style="margin-top:40px">{{details}}</p>
      <p>{{details2}}</p>
  </div> 
  <router-link to="/">
      <button
      @click="removeData();"
        class="results"
      >
        Back to home
      </button>
  </router-link>
  <div class="your-score">
      <p>Your Score is {{rate}}</p>
  </div>
   <div class="progress">
        <div class="bar" id="progressBar">
            <p>60%</p>
        </div>
    </div>
    <div class="text-progress">
        <p>Bad</p>
        <p>Average</p>
        <p>Above Average</p>
        <p>Verry Good</p>
    </div>
</template>

<script>

let correct = (JSON.parse(localStorage.getItem("score"))||0);
let incorrect = (JSON.parse(localStorage.getItem("scoreWrong"))||0);
let minLeft = JSON.parse(localStorage.getItem("minuteCount"));
let secLeft = JSON.parse(localStorage.getItem("secondCount"));


export default {
    data: () => ({
    correctAns:correct,
    incorrectAns:incorrect,
    question:correct+incorrect,
    rate:parseFloat((correct*100)/(correct+incorrect)).toFixed(2),
    minute:minLeft,
    second:secLeft,
    details:'The first thing we are looking for is the amount of questions and after this the succes rate!',
    details2:'We hope that you enjoyed the quiz, and keep up the good work and improve your succes rate, and feel free to try the other categoryes'
  }),


  methods:{
      removeData() {
      localStorage.removeItem("score");
      localStorage.removeItem("scoreWrong");
      localStorage.removeItem("minuteCount");
      localStorage.removeItem("secondCount");
      correct=0;
      incorrect=0;
      this.minute=9;
    },

  }

}
</script>

<style>
.main-end {
    margin-top: 100px;
    background-color: rgb(91, 220, 143);
    text-align: center;
    width: 70%;
    margin-left: 15%;
    padding:40px 0;
    border-width: 7px;
    border-width: 4px;
    border-style: solid;
    border-image: linear-gradient(to right, rgb(184, 55, 0), rgb(232, 214, 81)) 1;
}

.main-end p{
    font-size: 17px;
    font-weight: bold;
}

.end-title {
    color: whitesmoke;
    text-align: center;
    background: rgb(184, 55, 0);
    background: linear-gradient(90deg, rgba(200,34,34,1) 0%, rgb(232, 214, 81) 100%);
    width: 50%;
    margin-left: 25%;
    padding:10px 10px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
}

.results {
  text-align: center;
  margin-top: 50px;
  margin-left: 45%;
  padding: 15px 20px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 30px;
  color: rgb(30, 31, 30);
  background-color: rgb(91, 220, 143);
  border: 2px solid rgb(189, 42, 16);
}

.bar {
    width: 60%;
    height: 20px;
    background-color: rgb(189, 42, 16);
    border-radius: 10px;
}
.progress {
    background-color: yellow;
    width: 50%;
    border-radius: 10px;
    margin-left: 25%;
}
.text-progress {
    color: whitesmoke;
    width: 50%;
    margin-left: 25%;
    display: inline-flex;
    align-items: center;
}

.progress .bar p {
    color: whitesmoke;
    margin-left: 93%;
    margin-top: 40px;
}

.text-progress p {
    padding-left: 14%;
}

.your-score{
    color: whitesmoke;
    text-align: center;
}

 @media (max-width: 900px){
     .text-progress {
         font-size: 10px;
     }
     .progress .bar p {
         margin-left: 85%;
     }
     .results {
         margin-left: 40%;
     }
 }
 @media (max-width: 500px){
     .text-progress p {
         padding-left: 10%;
     }
     
}

@media (max-width:600px){
    .results {
        margin-left: 33%;
    }
}

@media (max-width:1300px){
    .progress .bar p {
         margin-left: 87%;
     }
}

@media (max-width:700px){
    .progress .bar p {
         margin-left: 77%;
     }

     .end-title {
         font-size: 20px;
     }
     .main-end p {
         font-size: 15px;
     }

     .main-end h1 {
         font-size: 20px;
     }
     
     .results{
         font-size: 15px;
     }

     .your-score{
         font-size: 13px;
     }
}

@media (max-width:500px){
    .progress .bar p {
         margin-left: 65%;
     }
}



</style>