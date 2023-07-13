import { defineStore } from 'pinia'
import { computed } from 'vue'
import MoonIcon from './../components/icons/MoonIcon.vue'


export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: 'light',
        themes: [],
    }),
    
    //actions for theme state
    actions: {
        toggleTheme(){
            this.theme = this.theme === "light" ? 'dark' : 'light'
        },
    }
})