import { AppState } from "@/AppState.js"


class CheesesService {

  mineCheese(){
    AppState.cheese += AppState.clickPower
  }



  buyUpgrade(upgradeData){
    if(AppState.cheese >= upgradeData.price){
      upgradeData.quantity++
      AppState.cheese -= upgradeData.price
      AppState.clickPower += upgradeData.multiplier
      upgradeData.price = Math.round(upgradeData.priceMultiplier * upgradeData.price)
      upgradeData.multiplier = Math.round(upgradeData.powerMultiplier * upgradeData.multiplier)
    }
  
  }
}

export const cheesesService = new CheesesService()