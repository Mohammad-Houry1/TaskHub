<template>
  <div class="fixed z-index" v-if="cookie">
    <ion-content>
      <ion-modal class="overflow-hidden" :is-open="isOpen">
        <ion-content class="overflow-hidden ion-padding">
          <div id="modal" class="h-full flex items-center flex-col px-6">
            <img src="../img/welcome.png" alt="" class="" />

            <div class="flex items-center flex-col h-full">
              <div class="flex flex-col items-center">
                <h1 class="font-bold text-neutral-900 tracking-wider">Welcome to TaskHub</h1>
                <p class="text-center leading-tight">
                  This is your personalized task management hub. Stay organized and boost your
                  productivity with TaskHub.
                </p>
              </div>
              <ion-button class="w-full font-2xl font-bold tracking-widest" @click="setOpen(false)"
                >Let's Start</ion-button
              >
            </div>
          </div>
        </ion-content>
      </ion-modal>
    </ion-content>
  </div>
</template>
<style>
#modal {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(184, 212, 247, 1) 50%,
    rgba(55, 135, 235, 1) 100%
  );
}
</style>
<script setup>
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle
} from '@ionic/vue'
import { ref, onMounted } from 'vue'

const isOpen = ref(false)
const cookie = ref(true)

const setFirstVisitCookie = () => {
  if (document.cookie.indexOf('firstVisitTime=') === -1) {
    isOpen.value = true
    const currentDate = new Date()
    document.cookie = `firstVisitTime=${currentDate.toUTCString()}; path=/`
  } else {
    cookie.value = false
    isOpen.value = false
  }
}

const setOpen = (open) => {
  isOpen.value = open
}

onMounted(() => {
  setFirstVisitCookie()
})
</script>
