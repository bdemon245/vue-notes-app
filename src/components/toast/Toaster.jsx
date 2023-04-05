// MyComponent.jsx
import { defineComponent } from 'vue'
import { Toaster } from "react-hot-toast"

export default defineComponent({
    setup() {
        return () => (
            <Toaster></Toaster>
        )
    }
})
