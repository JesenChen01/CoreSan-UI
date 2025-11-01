// 导出所有组件，供按需导入
export * from './Button';
import { Button } from './Button';
const components = [Button];
export default {
    install(app) {
        components.forEach(component => {
            app.component(component.name, component);
        });
    },
};
