<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar class="p-2" slot="bottom">
        <ion-tab-button tab="Home" href="/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Calendar" href="/Calendar">
          <ion-icon :icon="calendar" />
          <ion-label>Calendar</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="Add"
          href="/Add"
          style="width: 60px; height: 60px; margin-top: -71px; position: relative"
        >
          <ion-icon
            style="border-radius: 50%"
            class="bg-blue-500 text-white p-2 text-4xl"
            :icon="add"
          />
        </ion-tab-button>

        <ion-tab-button tab="Categories" href="/Categories">
          <ion-icon :icon="apps" />
          <ion-label>Categories</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Profile" href="/Profile">
          <ion-icon :icon="person" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon } from '@ionic/vue'
import { home, calendar, add, apps, person } from 'ionicons/icons'

export default {
  components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon },
  setup() {
    return {
      home,
      calendar,
      add,
      apps,
      person
    }
  }
}
</script>
