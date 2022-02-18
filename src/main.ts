import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");


/**
 * 할일 관리 앱 ( CRUD )
 * - 조회
 * - 추가
 * - 삭제
 * - 수정
 * */