<template>
 <main class="container text-white">
  <div class="pt-4 mb-8 relative">
    <input @input="getSearchResults" v-model="searchQuery" type="number" placeholder="input number" class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]">
    <button class="flex p-4 bg-black" @click="calculate">cal</button>
    <div class="flex" v-show="display">
      <table >
        <tr v-for="i in input" :key="i">
          <td v-for="j in input" :key="j">
            {{ i * j }}
          </td>
        </tr>
      </table>
    </div>
  </div>
 </main>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const mapboxAPIKey = "pk.eyJ1IjoibW9vemF5IiwiYSI6ImNsbGpvZnB4cTEzY3UzanQ2dTN4aXhmZ2wifQ.U_s0tkq7Vzc9vI3h6bpZLA"
const input = ref(null)
const queryTimeout = ref(null)
const mapboxSearchResults = ref(null)
const display = ref(false)

const calculate = () =>{
  if (input.value >= 1) {
    display.value = true
  }
  }
</script>

<style lang="scss" scoped>

</style>