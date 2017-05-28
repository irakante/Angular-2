import { Component, ViewChild } from '@angular/core';
import { FilmListComponent } from './film-list/film-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Каталог фильмов';

  @ViewChild(FilmListComponent)
  filmListComponent: FilmListComponent;
  links = [
    { path: '/dashboard', icon: 'desktop_windows', label: 'Главная' },
    { path: '/filmList', icon: 'theaters', label: 'Все фильмы' },
    { path: '/profile', icon: 'settings_applications', label: 'Профиль' }
  ];

  searchFilm(filmName) {
    this.filmListComponent.setFilm(filmName);
  }

  viewOfFilms(view) {
    this.filmListComponent.setView(view);
  }
}
