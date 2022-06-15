/* eslint-disable vue/no-unused-components */ /* eslint-disable
vue/no-unused-components */
<template>
  <div id="app">
    <div class="div_photos">
      <img
        src="../../public/icons/ticket_random.png"
        alt=""
        class="img_random"
        id="ticket_random"
      />
      <p class="HeadText">
        Capturez votre ticket de caisse, et découvrez des nouvelles recettes:
      </p>
    </div>

    <div class="div_buttons">
      <UploadImage @getFileFromUpload="getFileUploaded" />
      <button
        @click="generateRecipes"
        class="q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--rounded bg-warning text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase ButtonClassic active"
        id="bouton_generer"
      >
        Générer des recettes
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { SessionStorage } from "quasar";
import { dataURLtoFile } from "../utils/utils";
import { api } from "../utils/api";
import UploadImage from "src/components/UploadImage.vue";
import { serializeListRecetteShortRecette } from "../utils/utils";
export default defineComponent({
  name: "ScanPage",

  components: {
    UploadImage,
  },

  data() {
    return {
      videoSource: null,
      photoSource: null,
      videoDevices: null,
      audioDevices: null,
      selectedCamera: null,
      selectedMic: null,
      provenance: "",
      image: undefined,
    };
  },
  methods: {
    //methode qui permet de récupérer le fichier uploadé grâce au binding
    getFileUploaded(myFile) {
      this.photoSource = myFile;
      this.provenance = "Upload photo";
      const reader = new FileReader();
      reader.readAsDataURL(this.photoSource);
      reader.onload = (e) => {
        this.image = e.target.result;
        console.log(this.image);
        document.getElementById("ticket_random").src = this.image;
        document.getElementById("bouton_generer").classList.remove("active");
      };
    },
    startup() {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          this.videoSource = stream;
        })
        .catch((err) => {
          console.log("An error occurred: " + err);
        });
      this.clearPhoto();
    },
    takepicture() {
      let context = this.$refs.canvas.getContext("2d");
      context.drawImage(this.$refs.video, 0, 0, 500, 375);
      const myFile = dataURLtoFile(this.$refs.canvas.toDataURL("image/png")); //la fonction dataURLtoFile va générer un fichier qui va pouvoir ensuite être transmis à l'API dan sla fonction generateRecipes
      this.photoSource = myFile;
      this.provenance = "Appareil photo";
    },
    /*Fonction qui permet de générer des recettes à partir du rempliassage de la variable this.photoSource*/
    async generateRecipes() {
      const API = new api();
      console.log(this.photoSource);
      const recipes = await API.getRecipesFromImage(this.photoSource);
      this.$router.push({
        name: "resultat",
        params: {
          ListRecettes: JSON.stringify(
            serializeListRecetteShortRecette(recipes)
          ),
          Provenance: this.provenance,
        },
      });
    },
    clearPhoto() {
      const context = this.$refs.canvas.getContext("2d");
      context.fillStyle = "#AAA";
      context.fillRect(0, 0, 500, 375);
      const data = this.$refs.canvas.toDataURL("image/png");
      this.photoSource = data;
    },
    async getConnectedDevices() {
      await navigator.mediaDevices.enumerateDevices().then((devices) => {
        this.videoDevices = devices.filter(
          (device) => device.kind === "videoinput"
        );
        this.audioDevices = devices.filter(
          (device) => device.kind === "audioinput"
        );
      });
      this.selectInitialDevices();
    },
    selectInitialDevices() {
      this.selectedCamera = this.videoDevices[0].deviceId;
      this.selectedMic = this.audioDevices[0].deviceId;
    },
  },
  mounted() {
    this.startup();
    this.getConnectedDevices();
    if (SessionStorage.getItem("user") == null) {
      console.log("personne est co");
      this.$router.push({
        name: "connexion",
      });
    } else {
      console.log("qq est co ouloulou");
    }
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.media {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}
#canvas {
  display: none;
}
.video {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
}
.image {
  border-radius: 8px;
  overflow: hidden;
}
.select-device {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
label {
  font-weight: 800;
}
select {
  height: 2rem;
  font-size: 1rem;
}
.button {
  font-size: 1rem;
  font-weight: 500;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  background-color: royalblue;
}
.button:hover {
  background-color: rgb(36, 68, 167);
}

.div_buttons {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.div_photos {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img_random {
  width: 200px;
  height: auto;
}

.active {
  opacity: 0.33;
}

#bouton_generer {
  margin-left: 1.5rem;
}

.HeadText {
  color: white;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.2em;
}
</style>
