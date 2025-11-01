// 导出所有组件，供按需导入
export * from './Button';

// 默认导出，供 createApp.use() 全局注册
import type { App } from 'vue';
import { Button } from './Button';

const components = [Button];

export default {
  install(app: App) {
    components.forEach(component => {
      app.component(component.name as string, component);
    });
  },
};