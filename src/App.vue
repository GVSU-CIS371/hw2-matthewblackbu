<template>
  
  <div>
    
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />
    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
        <div></div>
        <template v-for="base in beverageStore.baseType" :key="base">
          <label>
            <input
              type="radio"
              name="basetype"
              :id="`r${base.id}`"
              :value="base"
              v-model="beverageStore.currentBaseType"
            />
            {{ base.name }}
          </label>
        </template>
        <div></div>
        <template v-for="creamer in beverageStore.creamers" :key="creamer">
          <label>
            <input
              type="radio"
              name="creamertype"
              :id="`r${creamer.id}`"
              :value="creamer"
              v-model="beverageStore.currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
        <div></div>
        <template v-for="syrup in beverageStore.syrups" :key="syrup">
          <label>
            <input
              type="radio"
              name="syruptype"
              :id="`r${syrup.id}`"
              :value="syrup"
              v-model="beverageStore.currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
        <div></div>
        
      </li>
    </ul>

    <input type="text" placeholder="Beverage Name" v-model="beverageStore.Name" />
    <button @click="beverageStore.makeBeverage()">🍺 Make Beverage</button>
    
    <button @click="beverageStore.resetStore()">Reset Beverages</button>
    
    <p></p>

      <template v-for="option in beverageStore.savedBeverages" :key="option.Name">
        <label>
          <input
            type="radio"
            name="options"
            :id="`r${option.Name}`"
            :value="option" 
            v-model="beverageStore.currentSyrup"
            @click="beverageStore.showBeverage(option)"
          />
          {{ option.Name }}
        </label>
      </template>

  </div>
  <div id="beverage-container" style="margin-top: 20px"></div>
</template>

<script setup lang="ts">

import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
const beverageStore = useBeverageStore();
console.log('Current Base Type:', beverageStore.currentBaseType);

</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
