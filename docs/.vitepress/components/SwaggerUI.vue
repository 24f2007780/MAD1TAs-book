<script setup>
import { onMounted } from 'vue'

defineOptions({ name: "SwaggerUI" })

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js'

  script.onload = () => {
    window.SwaggerUIBundle({
      url: `${import.meta.env.BASE_URL}library.yaml`,
      dom_id: '#swagger-ui'
    })
  }

  document.body.appendChild(script)
})
</script>

<template>
  <div id="swagger-ui"></div>
</template>

<style>
@import "https://unpkg.com/swagger-ui-dist/swagger-ui.css";
</style>