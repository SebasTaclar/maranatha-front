<template>
  <section class="news-section">
    <div class="news-container">
      <p class="news-subtitle">Noticias y artículos</p>
      <h2 class="news-title">Historias, reflexiones y novedades de la Fundación Maranatha PHES</h2>

      <div class="news-grid">
        <article v-for="article in articles" :key="article.title" class="news-card">
          <div class="news-card-image">
            <img :src="article.image" :alt="article.title" />
            <span class="news-card-date">{{ article.date }}</span>
          </div>
          <div class="news-card-body">
            <h3 class="news-card-title">{{ article.title }}</h3>
          </div>
        </article>

        <div class="news-card--empty" aria-hidden="true"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface NewsArticle {
  title: string
  date: string
  image: string
}

const articles: NewsArticle[] = [
  {
    title: 'Nuestro trabajo con personas con discapacidad',
    date: '12 May,26',
    image: 'https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes15-370x250.webp',
  },
  {
    title: 'Nuestro trabajo con madres cabeza de hogar',
    date: '07 Feb,26',
    image: 'https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes16-370x250.webp',
  },
]

defineOptions({ name: 'NoticiasYArticulos' })
</script>

<style scoped>
.news-section {
  background: #f8fafa;
  padding: 3.5rem 0;
}

@media (min-width: 1024px) {
  .news-section {
    padding: 5rem 0;
  }
}

.news-container {
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1.2rem;
}

.news-subtitle {
  margin: 0 0 0.5rem;
  padding-top: 4rem;
  font-family: 'Callisto MT';
  font-size: 24px;
  color: #8b6f47;
  font-weight: 700;
  text-align: center;
  line-height: 24px;
}

.news-title {
  margin: 0 auto 2.5rem;
  max-width: 48rem;
  font-family: 'Roundo', 'Nunito', sans-serif;
  font-weight: 900;
  color: #283734;
  text-align: center;
  font-size: 40px;
  line-height: 40px;
  letter-spacing: -1.2px;
  margin-top: 2px;
}

.news-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 0 auto;
}

.news-card--empty {
  display: none;
}

@media (min-width: 640px) {
  .news-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .news-card--empty {
    display: block;
  }
}

.news-card {
  overflow: hidden;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}

.news-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.news-card-image {
  position: relative;
}

.news-card-image img {
  display: block;
  width: 100%;
  height: 16rem;
  object-fit: cover;
}

.news-card-date {
  position: absolute;
  bottom: -1.1rem;
  left: 1.25rem;
  z-index: 2;
  background: #ffffff;
  color: #003d1f;
  font-size: 14px;
  font-weight: 900;
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.14);
}

.news-card-body {
  padding: 2.25rem 1.5rem 1.5rem;
}

.news-card-title {
  margin: 0;
  font-family: 'Roundo', 'Nunito', sans-serif;
  font-size: 26px;
  font-weight: 900;
  line-height: 31px;
  color: #1f2328;
  transition: color 0.3s ease;
  letter-spacing: -0.04em;
}

.news-card:hover .news-card-title {
  color: #003d1f;
}

@media (max-width: 639px) {
  .news-section {
    padding: 2rem 0 2.5rem;
  }

  .news-container {
    padding: 0 0.9rem;
  }

  .news-subtitle {
    padding-top: 4rem;
    font-size: 1rem;
    line-height: 1.2;
  }

  .news-title {
    max-width: 19rem;
    margin-bottom: 1.5rem;
    font-size: 1.55rem;
    line-height: 1.1;
    letter-spacing: -0.04em;
  }

  .news-grid {
    gap: 1rem;
    max-width: 22rem;
  }

  .news-card {
    border-radius: 0.75rem;
  }

  .news-card-image img {
    height: 9.5rem;
  }

  .news-card-date {
    bottom: -0.8rem;
    left: 0.8rem;
    padding: 0.25rem 0.7rem;
    font-size: 0.68rem;
  }

  .news-card-body {
    padding: 1.55rem 1rem 1rem;
  }

  .news-card-title {
    font-size: 1rem;
    line-height: 1.25;
  }
}
</style>
