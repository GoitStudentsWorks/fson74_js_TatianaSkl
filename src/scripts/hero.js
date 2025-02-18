import { getDayTrendingMovies, getMovieVideos } from './movies-api';
import { starRating } from './star-rating';

const heroBg = document.getElementById('hero-bg');
const heroContent = document.getElementById('hero-content');
const heroWrapper = document.getElementById('hero__wrapper');
const heroMovie = document.getElementById('hero-movie');
const heroImage = document.getElementById('hero-image');
const heroMovieMob = document.getElementById('hero-movie-mob');
const modalHero = document.getElementById('modal-hero');
const closeModalHeroBtn = document.getElementById('modal-hero-close');
const modalError = document.querySelector('.modal-error');

closeModalHeroBtn.addEventListener('click', onCloseModal);
modalHero.addEventListener('click', onBackdropClick);

export function renderHero() {
  getDayTrendingMovies().then(data => {
    try {
      const movies = data.results;
      if (movies.length === 0) {
        heroMovie.classList.add('visually-hidden');
        return;
      } else {
        const randomIndex = Math.floor(Math.random() * movies.length);
        const movie = movies[randomIndex];
        const { backdrop_path, title, overview, vote_average, id } = movie;

        heroBg.style.backgroundImage = `linear-gradient(87.8deg, #0e0e0e 15.61%, rgba(14, 14, 14, 0) 60.39%),url('https://image.tmdb.org/t/p/original/${backdrop_path}')`;
        heroImage.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${backdrop_path}')`;
        heroMovieMob.innerHTML = `
        <h1 class="hero__title-movie">${title}</h1>
        <div class="hero__wrapper-rating">
        <span class="hero-card__rating">
      <div class="rating hero-rating">
        <div class="hero-rating__body">
          <div class="rating__active"></div>
          <div class="hero-rating__items">
            <input
              type="range"
              min="0"
              max="10"
              class="rating__item"
              value="${vote_average}"
              name="hero-rating"
            />
          </div>
        </div>
      </div>
    </span>
    </div>
        <p class="hero__text-movie">${overview}</p>
        <button class="btn hero__btn-movie" id="modal-hero-open-mob">Watch trailer</button>
      `;
        starRating();
        heroMovie.innerHTML = `
        <h1 class="hero__title-movie">${title}</h1>
        <div class="hero__wrapper-rating">
        <span class="hero-card__rating">
      <div class="rating hero-rating">
        <div class="hero-rating__body">
          <div class="rating__active"></div>
          <div class="hero-rating__items">
            <input
              type="range"
              min="0"
              max="10"
              class="rating__item"
              value="${vote_average}"
              name="hero-rating"
            />
          </div>
        </div>
      </div>
    </span>
    </div>
        <p class="hero__text-movie">${overview}</p>
        <button class="btn hero__btn-movie" id="modal-hero-open">Watch trailer</button>
      `;
        starRating();
        const openModalHeroBtn = document.getElementById('modal-hero-open');
        const openModalHeroBtnMob = document.getElementById('modal-hero-open-mob');
        openModalHeroBtn.addEventListener('click', () => {
          showMovieTrailer(id);
          onOpenModal();
        });
        openModalHeroBtnMob.addEventListener('click', () => {
          showMovieTrailer(id);
          onOpenModal();
        });

        function onOpenModal() {
          window.addEventListener('keydown', onEscKeyPress);
          modalHero.classList.remove('hero-is-hidden');
        }
        heroContent.classList.add('visually-hidden');
        heroWrapper.classList.add('visually-hidden');
      }
    } catch (error) {
      console.error(error);
    }
  });
}
export function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
export function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}
export function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  modalHero.classList.add('hero-is-hidden');
}

export function showMovieTrailer(movieId) {
  try {
    getMovieVideos(movieId).then(data => {
      const videos = data.results.filter(video => video.type === 'Trailer');
      if (videos.length === 0) {
        return;
      }
      const videoKey = videos[0].key;
      const trailerUrl = `https://www.youtube.com/embed/${videoKey}`;
      const modalVideo = document.querySelector('.modal-video');
      modalVideo.innerHTML = `<iframe src="${trailerUrl}" title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowfullscreen></iframe>`;
      modalError.classList.add('hero-is-hidden');
    });
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderHero();
});
