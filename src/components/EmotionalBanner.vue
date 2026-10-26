<template>
  <section class="emotional-banner">
    <div class="emotional-card">
      <div class="emotional-card-header">
        <div>
          <p class="emotional-eyebrow">Apoya nuestra causa</p>
          <h2 class="emotional-title">
            Encuentra una causa<br />
            y ayuda a transformar vidas
          </h2>
        </div>
        <span class="emotional-date">11 May 2026</span>
      </div>

      <div
        class="emotional-progress"
        role="progressbar"
        aria-label="Progreso de la campaña"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span class="emotional-progress-value">0%</span>
        <div class="emotional-progress-track">
          <div class="emotional-progress-fill"></div>
        </div>
      </div>

      <div class="emotional-totals">
        <span>$0 <strong>Donated</strong></span>
        <span>$10,000.00 <strong>Goal</strong></span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'EmotionalBanner' })
</script>

<style scoped>
.emotional-banner {
  padding: 2rem 1rem;
  background: #ffffff;
}

.emotional-card {
  max-width: 58.5rem;
  margin: 0 auto;
  padding: 4.75rem 5rem;
  border-radius: 1.5rem;
  background: #263a36;
  color: #ffffff;
}

.emotional-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
}

.emotional-eyebrow {
  color: #d7aa67;
  font-family: 'Callisto MT', 'Roundo', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
}

.emotional-title {
  margin-top: 0.15rem;
  font-family: 'Roundo', 'Nunito', sans-serif;
  font-size: clamp(1.75rem, 3.5vw, 2.45rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.06em;
}

.emotional-date {
  padding-top: 0.15rem;
  color: #ffffff;
  font-family: 'Callisto MT', 'Roundo', sans-serif;
  font-size: 0.95rem;
  font-style: italic;
  font-weight: 700;
  white-space: nowrap;
}

.emotional-progress {
  margin-top: 0.7rem;
}

.emotional-progress-value {
  display: block;
  margin-bottom: 0.3rem;
  font-size: 1rem;
  font-weight: 700;
}

.emotional-progress-track {
  height: 1rem;
  overflow: hidden;
  border-radius: 9999px;
  background: #005b35;
}

.emotional-progress-fill {
  width: 0%;
  height: 100%;
  border-radius: inherit;
  background: #d7aa67;
}

.emotional-totals {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.7rem;
  font-size: 1rem;
}

.emotional-totals strong {
  color: #d7aa67;
  font-weight: 400;
}

@media (max-width: 640px) {
  .emotional-banner {
    padding: 1.5rem 1rem;
  }

  .emotional-card {
    padding: 2.5rem 1.5rem;
    border-radius: 1.25rem;
  }

  .emotional-card-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .emotional-title {
    font-size: 1.7rem;
  }

  .emotional-title br {
    display: none;
  }

  .emotional-date {
    order: -1;
    align-self: flex-end;
  }

  .emotional-totals {
    flex-direction: column;
    gap: 0.35rem;
    font-size: 0.9rem;
  }

  .emotional-progress-track {
    height: 0.75rem;
  }
}
</style>
