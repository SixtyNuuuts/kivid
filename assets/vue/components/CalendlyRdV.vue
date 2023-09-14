<template>
  <div>
    <h1>Vos rendez-vous Calendly</h1>
    <ul>
      <li v-for="event in events" :key="event.id">
        {{ event.start_time }} - {{ event.end_time }} : {{ event.name }}
      </li>
    </ul>
    <button @click="authenticateWithCalendly">Se connecter à Calendly</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [],
      isAuthenticated: false,
      authorizationCode: null,
      accessToken: null,
    };
  },
  methods: {
    async authenticateWithCalendly() {
      // Étape 1 : Rediriger l'utilisateur vers la page d'autorisation Calendly
      const clientId = "DnI5zy1_-6Ef6EGrXsEf_TaZPhIGZ9A4p2uX-i-qIcQ"; //Client secret Jkr-82sIQRGpk3S6wpDiTT5DHIt_b4R7vrxSsD9Dn7Q   //Webhook signing key ExzNlHRanU8zgMvdjsjukjkcI0ie0H4CXQayO6p-QoI
      const redirectUri = "https://127.0.0.1:8000/patient/862/dashboard";
      const authorizationUrl = `https://calendly.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

      window.location.href = authorizationUrl;
    },
    async fetchCalendlyEvents() {
      // Étape 2 : Échangez le code d'autorisation contre un token d'accès
      if (!this.authorizationCode) {
        console.error("Code d'autorisation manquant.");
        return;
      }

      const clientId = "DnI5zy1_-6Ef6EGrXsEf_TaZPhIGZ9A4p2uX-i-qIcQ";
      const clientSecret = "Jkr-82sIQRGpk3S6wpDiTT5DHIt_b4R7vrxSsD9Dn7Q";
      const redirectUri = "https://127.0.0.1:8000/patient/862/dashboard";

      const authData = {
        client_id: clientId,
        client_secret: clientSecret,
        code: this.authorizationCode,
        grant_type: "authorization_code",
        redirect_uri: redirectUri,
      };

      try {
        const response = await fetch("https://calendly.com/oauth/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(authData),
        });
          console.error(response);

        if (response.ok) {
          const data = await response.json();
          this.accessToken = data.access_token;
          this.isAuthenticated = true;

          // Étape 3 : Utilisez le token d'accès pour récupérer les rendez-vous
          await this.fetchEventsWithAccessToken();
        } else {
          console.error("Erreur lors de l'obtention du token d'accès.");
        }
      } catch (error) {
        console.error("Erreur inattendue :", error);
      }
    },
    async fetchEventsWithAccessToken() {
      if (!this.accessToken) {
        console.error("Token d'accès manquant.");
        return;
      }

      const headers = {
        Authorization: `Bearer ${this.accessToken}`,
      };

      try {
        const response = await fetch("https://api.calendly.com/scheduled_events", {
          method: "GET",
          headers: headers,
        });

        if (response.ok) {
          const data = await response.json();
          this.events = data.collection;
        } else {
          console.error("Erreur lors de la récupération des rendez-vous.");
        }
      } catch (error) {
        console.error("Erreur inattendue :", error);
      }
    },
  },
  created() {
    // Vérifiez si nous avons un code d'autorisation dans l'URL (retour de Calendly)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("code")) {
      this.authorizationCode = urlParams.get("code");
      // Étape 2 : Échangez le code d'autorisation contre un token d'accès
      this.fetchCalendlyEvents();
    }
  },
};
</script>
