<script setup>
// import Navbar from './components/Navbar.vue';
import { computed } from 'vue';
import { AppState } from './AppState.js';
import { cheesesService } from './services/CheesesService.js';

function mineCheese() {
  cheesesService.mineCheese()
}

function buyUpgrade(upgrade) {
  cheesesService.buyUpgrade(upgrade)
}

let cheese = computed(() => AppState.cheese)
const clickUpgrades = computed(() => AppState.clickUpgrades)
let clickPower = computed(() => AppState.clickPower)

</script>

<template>
  <header>
  </header>
  <main>
    <section class="container">
      <div class="row justify-content-center pt-5">
        <div class="col-md-4">
          <img @click="mineCheese()" class="moon-img"
            src="https://images.unsplash.com/photo-1479090793912-eb9929f4fdb2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="">
        </div>
      </div>
      <div class="row pt-4 justify-content-evenly">
        <div class="col-md-2 bg-warning">
          <div class="d-flex justify-content-between fs-3 align-items-center">
            <span class="mdi mdi-cursor-default-click-outline"></span>
            <p>{{ clickPower }}</p>
          </div>
        </div>
        <div class="col-md-5 bg-warning">
          <div class="d-flex justify-content-between fs-1 align-items-center">
            <span class="mdi mdi-cheese"></span>
            <p>{{ cheese }}</p>
          </div>
        </div>
        <div class="col-md-2 bg-warning">
          <div class="d-flex justify-content-between fs-3 align-items-center">
            <span class="mdi mdi-refresh-auto"></span>
            <p>0</p>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="row mt-5">
            <div v-for="upgrade in clickUpgrades" :key="upgrade.name" class="col-md-4">
              <div class="text-center">
                <button @click="buyUpgrade(upgrade)" class="btn btn-warning" type="button">{{ upgrade.name }} +
                  {{ upgrade.multiplier }}</button>
                <div class="text-light">
                  <p>price: ${{ upgrade.price }}</p>
                  <p>quantity: {{ upgrade.quantity }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6"></div>
      </div>
    </section>
  </main>
  <footer>
  </footer>
</template>

<style lang="scss">
.moon-img {
  height: 25rem;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
}

main {
  background-color: black;
}
</style>
