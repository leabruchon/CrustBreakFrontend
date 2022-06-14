/* eslint-disable vue/no-unused-components */ /* eslint-disable
vue/no-unused-components */
<template>
  <div id="app">
    <div class="media">
      <video
        class="video"
        width="500"
        height="375"
        ref="video"
        :srcObject.prop="videoSource"
        autoplay
      >
        Video stream not available.
      </video>
    </div>
    <canvas width="500" height="375" ref="canvas" id="canvas" />
    <div class="div_buttons">
      <button @click="takepicture" class="button">Prendre une photo</button>
      <button @click="generateRecipes" class="button">
        Générer des recettes
      </button>
    </div>
    <UploadImage @getFileFromUpload="getFileUploaded" />
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
    };
  },
  methods: {
    //methode qui permet de récupérer le fichier uploadé grâce au binding
    getFileUploaded(myFile) {
      this.photoSource = myFile;
      this.provenance = "Upload photo";
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
}
</style>
