<template>
  <div class="flex items-center justify-between mt-8 mx-6">
    <h1 class="my-0 font-bold">Homepage</h1>
    <ion-button color="light">
      <ion-icon :icon="notifications" />
    </ion-button>
  </div>
  <div id="bg" class="flex flex-col m-2 p-4 border rounded-3xl mb-4 text-white">
    <div class="flex flex-col">
      <h2 class="my-4 tracking-wider">Today's progress summary</h2>
      <p class="mb-6">15 Tasks</p>
    </div>
    <div class="flex justify-between gap-4 antialiased mb-3">
      <p class="max-w-56 font-thin w-full leading-snug">Lorem ipsum dolor sit amet consectetur .</p>
      <div class="flex flex-col justify-around w-full">
        <div class="flex justify-between">
          <p>Progress</p>
          <p>40%</p>
        </div>
        <ion-progress-bar :value="0.25" :buffer="1"></ion-progress-bar>
      </div>
    </div>
  </div>
  <!-- <ion-card class="bg-blue-500 text-white">
    <ion-card-header>
      <ion-card-subtitle class="text-white font-thin">15 Tasks</ion-card-subtitle>
      <ion-card-title class="text-2xl font-bold tracking-wider mb-1 text-white"
        >Today's progress summary</ion-card-title
      >
    </ion-card-header>

    <ion-card-content>
      <div class="flex justify-between gap-4 antialiased">
        <p class="max-w-44 font-thin">Lorem ipsum dolor sit amet consectetur .</p>
        <div class="flex flex-col justify-around w-full">
          <div class="flex justify-between">
            <p>Progress</p>
            <p>40%</p>
          </div>
          <ion-progress-bar :value="0.25" :buffer="1"></ion-progress-bar>
        </div>
      </div>
    </ion-card-content>
  </ion-card> -->
  <tdyTask></tdyTask>
</template>
<style scoped>
#bg {
  background: rgb(76, 192, 238);
  background: linear-gradient(
    129deg,
    rgba(76, 192, 238, 1) 0%,
    rgba(76, 192, 238, 1) 25%,
    rgba(73, 174, 230, 1) 50%,
    rgba(45, 130, 211, 1) 75%,
    rgba(20, 100, 199, 1) 100%
  );
}
ion-progress-bar {
  height: 10px;
  --background: #74a5df;
  --progress-background: #ffffff;
}
</style>
<script lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue'
import { notifications } from 'ionicons/icons'
import tdyTask from '../components/tdy-tasks.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, tdyTask },
  setup() {
    return {
      notifications
    }
  }
})
</script>
