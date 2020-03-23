import MyDirective from './MyDirective';

const MyPlugin = {
  install(Vue) {
    Vue.directive(MyDirective.name, MyDirective);
  }
};

export default MyPlugin;
