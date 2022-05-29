import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import QuizComponent from './components/QuizComponent'
import StartupPage from './components/StartupPage'
import QuizMusicComponent from './components/QuizMusicComponent'
import QuizSportComponent from './components/QuizSportComponent'
import QuizGameComponent from './components/QuizGameComponent'
import QuizComputerComponent from './components/QuizComputerComponent'
import QuizMathComponent from './components/QuizMathComponent'
import FinishQuiz from './components/FinishQuiz'






createApp(App).mount('#app')


const routes = [
    { path:'/', component: StartupPage},
    { path:'/home', component: QuizComponent},
    { path:'/music', component: QuizMusicComponent},
    { path:'/sport', component: QuizSportComponent},
    { path:'/game', component: QuizGameComponent},
    { path:'/computer', component: QuizComputerComponent},
    { path:'/math', component: QuizMathComponent},
    { path:'/end', component: FinishQuiz},
]




const router = createRouter({
    routes: routes,
    history: createWebHistory(),
});

const app = createApp(App);
app.use(router)
app.mount('#app')