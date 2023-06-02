import VuePithyCalendar from './vue/index.vue';
//@ts-ignore
VuePithyCalendar.install = (Vue)=>{
    Vue.component(VuePithyCalendar.name, VuePithyCalendar);
};
export default VuePithyCalendar;
