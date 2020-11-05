import { App } from 'vue'
import PK1 from './src/index.vue'
export default (app: App): void => {
    app.component(PK1.name, PK1)
}
