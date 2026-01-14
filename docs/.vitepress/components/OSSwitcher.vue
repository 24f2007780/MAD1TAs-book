  <!-- .vitepress/components/OSSwitcher.vue -->


  <template>
    <div class="os-switcher">
      <button :class="{ active: selectedOS === 'windows' }" @click="setOS('windows')">Windows</button>
      <button :class="{ active: selectedOS === 'mac' }" @click="setOS('mac')">Mac</button>
      <button :class="{ active: selectedOS === 'linux' }" @click="setOS('linux')">Linux</button>
    </div>
  </template>

  <script setup>
  defineOptions({
    name: 'OSSwitcher',
  })


  import { ref } from 'vue'

  const selectedOS = ref('windows')

  function setOS(os) {
    selectedOS.value = os
  }
  </script>

  <style scoped>
  .os-switcher {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .os-switcher button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #e7e7e7;
    cursor: pointer;
    border-radius: 4px;
  }
  .os-switcher button.active {
    background-color: #007acc;
    color: #fff;
  }
  </style>

