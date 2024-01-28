<template>
  <div class="flex items-center mt-8 mx-6">
    <button class="p-4 rounded-xl bg-gray-100"><i class="fa-solid fa-chevron-left"></i></button>
    <h1 class="my-0 font-bold w-full text-center">Create New Task</h1>
  </div>
  <div class="flex flex-col mx-6 gap-4 h-full">
    <div class="flex flex-col">
      <h1 class="font-bold text-gray-800">Task Name</h1>
      <input
        type="text"
        class="focus:border-blue-500 focus:ring-blue-500 p-4 rounded-xl w-full border-2"
        placeholder="UI Design"
      />
    </div>
    <h1 class="font-bold text-gray-800">Category</h1>

    <!-- id and value and for in the label should all be the same (Create a loop that go in db to get all the category and make it scr) -->
    <div class="flex gap-4">
      <div>
        <input
          type="radio"
          id="hosting-small"
          name="category"
          value="hosting-small"
          class="hidden peer"
          required
        />
        <label
          for="hosting-small"
          class="inline-flex items-center justify-between w-full p-4 text-gray-500 bg-sky-50 font-semibold border border-gray-200 rounded-2xl cursor-pointer peer-checked:bg-blue-500 peer-checked:text-white hover:text-gray-600 hover:bg-blue-100"
          ><p class="a">Development</p>
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="hosting-small1"
          name="category"
          value="hosting-small1"
          class="hidden peer"
          required
        />
        <label
          for="hosting-small1"
          class="inline-flex items-center justify-between w-full p-4 text-gray-500 bg-sky-50 font-semibold border border-gray-200 rounded-2xl cursor-pointer peer-checked:bg-blue-500 peer-checked:text-white hover:text-gray-600 hover:bg-blue-100"
          ><p class="s">Design</p>
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="hosting-small2"
          name="category"
          value="hosting-small2"
          class="hidden peer"
          required
        />
        <label
          for="hosting-small2"
          class="inline-flex items-center justify-between w-full p-4 text-gray-500 bg-sky-50 font-semibold border border-gray-200 rounded-2xl cursor-pointer peer-checked:bg-blue-500 peer-checked:text-white hover:text-gray-600 hover:bg-blue-100"
          ><p class="s">Research</p>
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="hosting-small3"
          name="category"
          value="hosting-small3"
          class="hidden peer"
          required
        />
        <label
          for="hosting-small3"
          class="inline-flex items-center justify-between w-full p-4 text-gray-500 bg-sky-50 font-semibold border border-gray-200 rounded-2xl cursor-pointer peer-checked:bg-blue-500 peer-checked:text-white hover:text-gray-600 hover:bg-blue-100"
          ><p class="s">Study</p>
        </label>
      </div>
    </div>
    <h1 class="font-bold text-gray-800">Date & Time</h1>
    <div
      class="flex p-4 rounded-xl border-gray-300 border-2 items-center justify-between"
      id="date"
    >
      <p class="text-gray-400">05 April, Tuesday</p>
      <div class="rounded-full bg-gray-200">
        <i class="fa-solid fa-calendar-days text-blue-500 m-2"></i>
      </div>
    </div>
    <ion-modal trigger="date" slot="start" :initial-breakpoint="1" :breakpoints="[0, 1]">
      <div class="justify-center flex">
        <ion-datetime
          :min="2024"
          :max="2034"
          presentation="date"
          :show-default-buttons="true"
        ></ion-datetime>
      </div>
    </ion-modal>

    <div class="flex gap-4">
      <div class="flex flex-col h-full w-full">
        <h1 class="font-semibold text-gray-800">Start Time</h1>

        <div
          class="flex p-4 rounded-xl border-gray-300 border-2 items-center justify-between"
          id="open-modal"
        >
          <p class="text-gray-400">09:00 AM</p>
          <i class="fa-solid text-blue-500 fa-chevron-down"></i>
        </div>
        <ion-modal trigger="open-modal" slot="start" :initial-breakpoint="1" :breakpoints="[0, 1]">
          <ion-datetime presentation="time"></ion-datetime>
        </ion-modal>
      </div>

      <div class="flex flex-col h-full w-full">
        <h1 class="font-semibold text-gray-800">End Time</h1>
        <div
          class="flex p-4 rounded-xl border-gray-300 border-2 items-center justify-between"
          id="open-modal1"
        >
          <p class="text-gray-400">11:00 AM</p>
          <i class="fa-solid text-blue-500 fa-chevron-down"></i>
        </div>
        <ion-modal trigger="open-modal1" :initial-breakpoint="1" :breakpoints="[0, 1]">
          <ion-datetime
            class="w-full"
            :show-default-buttons="true"
            done-text="Done"
            cancel-text="Cancel"
            presentation="time"
          ></ion-datetime>
        </ion-modal>
      </div>
    </div>
    <h1 class="font-bold text-gray-800">Description</h1>
    <input
      type="text"
      class="focus:outline:border-blue-500 focus:outline:ring-blue-500 p-4 rounded-xl w-full border-2"
      placeholder="Provide a brief description of the task..."
    />
    <button class="w-full p-4 bg-blue-500 text-white rounded-xl text-xl">Create Task</button>
  </div>
</template>
<style>
ion-router-outlet {
  overflow-y: scroll;
  overflow-x: hidden;
}
modal-wrapper {
  bottom: 0px !important;
  position: absolute !important;
}
ion-modal {
  --height: auto;
}
</style>
<script>
import { IonDatetime } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { IonDatetime }
  // setup() {
  //   const setCurrentDate = () => {
  //     const today = new Date()
  //     // Set the date to 10 days in the future
  //     today.setDate(today.getDate() + 10)
  //     // Return the formatted date string
  //     return today.toISOString()
  //   }

  //   return {
  //     setCurrentDate
  //   }
  // }
})
</script>
