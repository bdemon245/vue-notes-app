import { defineStore } from 'pinia'


export const useActionStore = defineStore('appAction', {
    state: () => ({
        sidebar: false,
        userMenu: false,
        toast: ''
    }),
    actions: {
        //actions for sidebar state
        toggleSidebar(){
            this.sidebar = !this.sidebar
        },
        closeSidebar() {
            this.sidebar = false  
        },

        toggleUserMenu() {
            this.userMenu = !this.userMenu
        }
    }
})