import { defineStore } from 'pinia'
import NoteAPI from '../services/NoteAPI';

//interface for declaring note type

  //notes from local storage
  let localNotes = localStorage.getItem("myNotes")
    ? localStorage.getItem("myNotes")
    : "[]";

  //parse localNotes
const myNotes: Array<any> = JSON.parse(localNotes as string);
  
export const useNoteStore = defineStore('note', {
    state: () => ({
        notes: myNotes,
        title: "",
        content: "",
    }),
    getters: {
        noteCount(state) {
            return state.notes.length;
        },
    },
    actions: {
        saveNote() {
            if (this.title==='') {
                this.title = "Untitled Note"
            }
            if (this.content!=='') {
                let newNote = {
                    id: Date.now(),
                    title: this.title,
                    content: this.content,
                    tag: "local"
                };
                NoteAPI.createNote(newNote)
                    .then(response => {
                        console.log(response.data);
                        this.notes.push(newNote)
                        localStorage.setItem("myNotes", JSON.stringify(this.notes));
                    });
                this.content = ''
                this.title = ''
            }
            
        },
        updateNote(noteId: string|string[]) {
            let id = parseInt(noteId as string)
            const note = this.notes.find((n) => n.id === id);
            if (note) {
                note.title = this.title;
                note.content = this.content;
            }
            this.setNotes(this.notes);
        },
        setNotes(notes:Array<any>) {
            this.notes = notes
            localStorage.setItem("myNotes", JSON.stringify(this.notes))
        },
        setLinks(links:object) {
            
        },
        setMetaInfo(meta:object) {
            
        },
    }
})