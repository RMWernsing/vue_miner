import { reactive } from 'vue'
import { ClickUpgrade } from './models/ClickUppgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  cheese: 0,

  clickPower: 1,

  clickUpgrades: [
    new ClickUpgrade({
      name: 'Knife',
      price: 15,
      quantity: 0,
      multiplier: 10,
      priceMultiplier: 1.2,
      powerMultiplier: 1.05
    }),
    new ClickUpgrade({
      name: 'Pickaxe', 
      price: 100,
      quantity: 0,
      multiplier:50,
      priceMultiplier: 1.4,
      powerMultiplier: 1.08
    }),
    new ClickUpgrade({
      name: 'Drill',
      price: 500,
      quantity: 0,
      multiplier: 750,
      priceMultiplier: 1.8,
      powerMultiplier: 1.1
    })
  ]
})

