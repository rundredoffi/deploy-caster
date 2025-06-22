<template>
  <v-form @submit.prevent="submitForm" v-model="valid">
    <v-text-field
      v-model="form.repo"
      label="Dépôt GitHub (owner/repo)"
      :rules="[required]"
      prepend-inner-icon="mdi-github"
    />
    <v-text-field
      v-model="form.ref"
      label="Branche ou SHA"
      :rules="[required]"
      prepend-inner-icon="mdi-source-branch"
    />
    <v-text-field
      v-model="form.environment"
      label="Environnement"
      :rules="[required]"
      prepend-inner-icon="mdi-server"
    />
    <v-text-field
      v-model="form.description"
      label="Description"
      :rules="[required]"
      prepend-inner-icon="mdi-text"
    />
    <v-text-field
      v-model="form.log_url"
      label="Lien vers les logs (facultatif)"
      prepend-inner-icon="mdi-link"
    />
    <v-select
      v-model="form.state"
      :items="['success', 'failure', 'in_progress']"
      label="État du déploiement"
      :rules="[required]"
      prepend-inner-icon="mdi-flag"
    />
    <v-text-field
        v-model="form.deployed_url"
        label="URL du site déployé (facultatif)"
        prepend-inner-icon="mdi-web"
    />
    <v-btn type="submit" color="primary" class="mt-4" :disabled="!valid">
      📤 Envoyer le déploiement
    </v-btn>
    <v-alert v-if="message" :type="messageType" class="mt-4" border="start">
      {{ message }}
    </v-alert>
  </v-form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      valid: true,
      form: {
        repo: '',
        ref: '',
        environment: '',
        deployed_url: '',
        description: '',
        log_url: '',
        state: 'success'
      },
      message: '',
      messageType: 'success',
      required: v => !!v || 'Ce champ est requis',
    }
  },
  methods: {
    async submitForm() {
      this.message = ''
      try {
        await axios.post('http://localhost:3000/deploy', this.form)
        this.message = '✅ Déploiement envoyé avec succès.'
        this.messageType = 'success'
      } catch (err) {
        console.error(err)
        this.message = '❌ Échec lors de l\'envoi du déploiement.'
        this.messageType = 'error'
      }
    }
  }
}
</script>
