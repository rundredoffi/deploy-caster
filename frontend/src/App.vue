<template>
  <v-app>
    <v-main>
      <v-container
        fill-height
        class="d-flex align-center justify-center"
      >
        <v-card class="pa-6" elevation="8" max-width="700" style="width: 100%;">
          <v-card-title class="text-h5 mb-4">🚀 DeployCaster</v-card-title>
          <DeployForm />
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DeployForm from './components/DeployForm.vue'

export default {
  components: { DeployForm }
}
</script>
