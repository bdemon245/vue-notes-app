import { defineStore } from 'pinia'


export const useActionStore = defineStore('action', {
    state: () => ({
        sidebar: false,
        userMenu: false,
        searchBar: false,
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
        },
        toggleSearchBar() {
            this.searchBar = !this.searchBar
        }
    }
})