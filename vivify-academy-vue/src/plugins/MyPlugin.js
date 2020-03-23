import MyDirective from './MyDirective';

const MyPlugin = {
  install(Vue) {
    Vue.directive(MyDirective.name, MyDirective);
    Vue.mixin({
      mounted() {
        console.log('My Plugin works in this component!');
      }
    });
    Vue.prototype.$getPluginName = () => 'MyPlugin';
  }
};

export default MyPlugin;
