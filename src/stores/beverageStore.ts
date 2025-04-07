import { defineStore } from "pinia";
import t from "../data/tempretures.json";
import s from "../data/syrups.json";
import c from "../data/creamers.json";
import b from "../data/bases.json";
import {Option} from "../types/beverage";
export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: t,
    currentTemp: t[0],
    syrups: s,
    currentSyrup: s[0],
    creamers: c,
    currentCreamer: c[0],
    baseType: b, 
    currentBaseType: b[0], 
    Name: "",
    savedBeverages: [] as Option[],
  }),
  actions: {
    makeBeverage() {
      if (this.Name){
        const newBeverage: Option = {
          Name: this.Name, 
          syrup: this.currentSyrup, 
          creamer: this.currentCreamer, 
          base: this.currentBaseType,
          temp: this.currentTemp
        };
        this.savedBeverages.push(newBeverage);
        this.Name = "";
      }
    },    
    showBeverage(beverage: Option) {
      this.Name = beverage.Name;
      this.currentSyrup = beverage.syrup;
      this.currentCreamer = beverage.creamer;
      this.currentBaseType = beverage.base;
      this.currentTemp = beverage.temp;

    },
    resetStore() {
      this.$reset();
    }
  },
  persist: true,
});
