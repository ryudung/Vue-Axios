
import Login from './components/login/Login.vue'
import LoginHeader from './components/common/LoginHeader.vue'
import Body from './components/main/Body.vue'
import InfoSummary from './components/main/InfoSummary.vue'

import Chart from './components/chart/Chart.vue';


export const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/home',
    components: {
        Header:LoginHeader,
        default:Body,
        Footer:InfoSummary
    }
  },
  {
    path:'/chart',
    components:{
      Header:LoginHeader,
      default:Chart
    }
  }
];
