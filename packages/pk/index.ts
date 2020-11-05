import type { App } from 'vue'
import pk1 from 'pk1'

export { pk1 }

const install = (app: App): void => {
    pk1(app)
}

const PK = {
    install,
}

export default PK
