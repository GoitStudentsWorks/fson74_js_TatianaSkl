!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequireadfa;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequireadfa=a),a("l1mIK"),a("l122l");var i=a("algKM"),r=a("3hLJb"),o=document.getElementById("heroLibrary-bg"),c=document.getElementById("heroLibrary-content"),d=document.getElementById("heroLibrary__wrapper"),l=document.getElementById("heroLibrary-movie"),s=document.getElementById("heroLibrary-image"),m=document.getElementById("heroLibrary-movie-mob"),g=document.getElementById("modal-hero"),v=document.getElementById("modal-hero-close"),u=document.querySelector(".modal-error");function h(e){"Escape"===e.code&&_()}function _(){window.removeEventListener("keydown",h),g.classList.add("hero-is-hidden")}function p(e){try{(0,i.getMovieVideos)(e).then((function(e){var n=e.results.filter((function(e){return"Trailer"===e.type}));if(0!==n.length){var t=n[0].key,a="https://www.youtube.com/embed/".concat(t);document.querySelector(".modal-video").innerHTML='<iframe src="'.concat(a,'" title="YouTube video player"\n          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"\n          allowfullscreen></iframe>'),u.classList.add("hero-is-hidden")}}))}catch(e){console.error(e)}}v.addEventListener("click",_),g.addEventListener("click",(function(e){e.currentTarget===e.target&&_()})),document.addEventListener("DOMContentLoaded",(function(){(0,i.getDayTrendingMovies)().then((function(e){try{var n=e.results;if(0===n.length)return void l.classList.add("visually-hidden");{var t=n[Math.floor(Math.random()*n.length)],a=t.backdrop_path,i=t.title,v=t.overview,u=t.vote_average,_=t.id;o.style.backgroundImage="linear-gradient(87.8deg, #0e0e0e 15.61%, rgba(14, 14, 14, 0) 60.39%),url('https://image.tmdb.org/t/p/original/".concat(a,"')"),s.style.backgroundImage="url('https://image.tmdb.org/t/p/original/".concat(a,"')"),m.innerHTML='\n        <h1 class="hero__title-movie">'.concat(i,'</h1>\n        <div class="hero__wrapper-rating">\n        <span class="hero-card__rating">\n      <div class="rating hero-rating">\n        <div class="hero-rating__body">\n          <div class="rating__active"></div>\n          <div class="hero-rating__items">\n            <input\n              type="range"\n              min="0"\n              max="10"\n              class="rating__item"\n              value="').concat(u,'"\n              name="hero-rating"\n            />\n          </div>\n        </div>\n      </div>\n    </span>\n    </div>\n        <p class="hero__text-movie">').concat(v,'</p>\n        <button class="btn hero__btn-movie" id="modal-hero-open-mob">Watch trailer</button>\n      '),(0,r.starRating)(),l.innerHTML='\n        <h1 class="hero__title-movie">'.concat(i,'</h1>\n        <div class="hero__wrapper-rating">\n        <span class="hero-card__rating">\n      <div class="rating hero-rating">\n        <div class="hero-rating__body">\n          <div class="rating__active"></div>\n          <div class="hero-rating__items">\n            <input\n              type="range"\n              min="0"\n              max="10"\n              class="rating__item"\n              value="').concat(u,'"\n              name="hero-rating"\n            />\n          </div>\n        </div>\n      </div>\n    </span>\n    </div>\n        <p class="hero__text-movie">').concat(v,'</p>\n        <button class="btn hero__btn-movie" id="modal-hero-open">Watch trailer</button>\n      '),(0,r.starRating)();var y=document.getElementById("modal-hero-open"),f=document.getElementById("modal-hero-open-mob");function b(){window.addEventListener("keydown",h),g.classList.remove("hero-is-hidden")}y.addEventListener("click",(function(){p(_),b()})),f.addEventListener("click",(function(){p(_),b()})),c.classList.add("visually-hidden"),d.classList.add("visually-hidden")}}catch(L){console.error(L)}}))}));r=a("3hLJb");var y=document.querySelector(".library-cards__list"),f=document.querySelector(".alert__message");var b=JSON.parse(localStorage.getItem("myLibrary"))||[];b.length<1?f.classList.remove("visually-hidden"):f.classList.add("visually-hidden"),b.forEach((function(e){!function(e){var n=e.title,t=e.poster_path,a=e.vote_average,i=e.genres,o=e.release_date,c=e.id,d=i.map((function(e){return e.name})).slice(0,2).join(", "),l='<li class="film-card js-card" data-id="'.concat(c,'">\n\n<img\n    class="film-card__img"\n    src="').concat("https://image.tmdb.org/t/p/w500".concat(t),'"  \n    alt="').concat(n,'" loading=\'lazy\'\n  />\n\n  <div class="film-card__wrapper">\n    <h2 class="film-card__title">').concat(n,'</h2>\n    <ul class="film-card__description list">\n      <li class="film-card__genres">').concat(d,' |</li>\n\n      <li class="film-card__release-date">').concat(o.split("-")[0],'</li>\n    </ul>\n    <span class="film-card__rating">\n      <div class="rating">\n        <div class="rating__body">\n          <div class="rating__active"></div>\n          <div class="rating__items">\n            <input\n              type="range"\n              min="0"\n              max="10"\n              class="rating__item"\n              value="').concat(a,'"\n              name="rating"\n            />\n          </div>\n        </div>\n      </div>\n    </span>\n  </div>\n</li>');y.insertAdjacentHTML("beforeend",l),(0,r.starRating)()}(e)})),a("b5EgB")}();
//# sourceMappingURL=my-library.4b34f09c.js.map
