import { useActionStore } from "../stores/useActionStore";
import { useNoteStore } from "../stores/useNoteStore";
import { useUserStore } from "./../stores/useUserStore";
import API from "./API";

const NoteAPI = {
  config() {
    const user = useUserStore();
    const config = {
      headers: { Authorization: "Bearer " + user.authToken },
    };
    return config;
  },
  getNotes(params?: any) {
    return API()
      .get("/notes", this.config())
      .then((response) => {
        let notes: object[] = response.data.data;
        useNoteStore().setNotes(notes);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          useActionStore().toast =
            "User not logged in,\n Saving to local storage";
          let localNotes = localStorage.getItem("myNotes")
            ? JSON.parse(localStorage.getItem("myNotes")!)
            : JSON.parse("[]");

          let myNotes: object[] = localNotes;
          console.log("setting notes to local storage");
          useNoteStore().setNotes(myNotes);
        }
      });
  },
  login(data: object) {
    return API().post("/login", data);
  },
};

export default NoteAPI;
