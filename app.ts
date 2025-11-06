import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Messages } from './messages/messages';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, Messages],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {

  readonly title = signal('Angular Tour of Heroes');
}
