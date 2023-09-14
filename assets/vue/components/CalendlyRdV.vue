<template>
	<div>
		<!-- <vue-calendly url="https://calendly.com/rendez-vous-kivid/30min?hide_gdpr_banner=1" :height="1200"></vue-calendly> -->
		<div class="calendly-container">
			<vue-calendly url="https://calendly.com/sixty-nuuuts/30min?hide_gdpr_banner=1" :height="1200"></vue-calendly>
			<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
		</div>
	</div>
</template>

<script>

export default {
	props: {
        patient: Object,
    },
    data() {
        return {
        };
    },
    mounted() {
        function isCalendlyEvent(e) {
            return e.origin === 'https://calendly.com' && e.data.event && e.data.event.indexOf('calendly.') === 0;
        };
        
        window.addEventListener('message', function(e) {
            if(isCalendlyEvent(e)) {
				switch (e.data.event) {
					// case 'calendly.event_type_viewed':
					// 	console.log('Event name:', e.data.event, 'Event details:', e.data.payload);
					// 	break;
					case 'calendly.event_scheduled':
						if(e.data?.payload?.event?.uri)
							this.axios
								.post(`/patient/${this.patient.id}/calendlyevent/`, {
									eventUrl: e.data.payload.event.uri,
								})
								.then((response) => {
									console.log(response);
								})
								.catch((error) => {
									console.error(error);
								});
					}
            }
        });
    },
};
</script>

<style lang="scss">
.calendly-container
{
    border-radius: 0.8rem;
    overflow: hidden;
    position: relative;
    width: 88vw;

    @media (max-width: 730px) {
        box-shadow: 0px 1.5rem 3rem rgba(31, 6, 6, 0.096);
        > :first-child
        {
            max-height: 1089px;
        }
    }

    .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
        position: absolute;
        z-index: -1;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #fb8b68;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fb8b68 transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>
