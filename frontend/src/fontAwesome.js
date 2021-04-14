import Vue from 'vue'

// 설치했던 fontawesome-svg-core와 vue-fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 설치했던 아이콘파일에서 해당 아이콘만 불러옵니다.
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

//불러온 아이콘을 라이브러리에 담기
library.add(fas); 
library.add(far);

//전역 컴포넌트
Vue.component("font-awesome-icon", FontAwesomeIcon);