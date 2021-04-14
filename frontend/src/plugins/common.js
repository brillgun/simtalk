export default {
    install(Vue) {
        // 1. 전역 메소드 또는 속성 추가
        // 4. 인스턴스 메소드 추가
        Vue.prototype.$common = {
            pushView(url){
                window.location.href = url;
            }
        }
    }
}