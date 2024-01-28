<template>
  <ion-app>
    <ion-router-outlet></ion-router-outlet>
    <first-time></first-time>
  </ion-app>
</template>

<script lang="ts">
import Nav from './components/nav.vue'
import FirstTime from './components/first-time.vue'
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: { IonApp, IonRouterOutlet, Nav, FirstTime }
})
</script>
