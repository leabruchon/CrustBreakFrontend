<template>
  <div class="SpinnerAndButton">
    <div class="HeadText">Combien de repas souhaitez vous préparer ?</div>
    <div class="Spinner">
      <div v-on:click="remove"><q-btn icon="remove" color="primary" /></div>
      <div class="NumberPlates">{{ count }}</div>
      <div v-on:click="add"><q-btn icon="add" color="primary" /></div>
    </div>
    <ClassicButton />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ClassicButton from "src/components/ClassicButton.vue";

export default defineComponent({
  name: "SpinnergenerateReciepe",
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    add() {
      if (this.count < 10) {
        this.count++;
      }
    },
    remove() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },

  components: {
    ClassicButton,
  },
});
</script>

<style lang="scss">
.SpinnerAndButton {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}

.HeadText {
  color: white;
  text-align: center;
}

.Spinner {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.NumberPlates {
  font-size: 2rem;
  color: white;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
}
</style>
