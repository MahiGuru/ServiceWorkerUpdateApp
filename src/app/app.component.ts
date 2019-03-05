import { Component } from '@angular/core';
import { NotifyAppUpdatesService } from './notify-app-updates.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PWA - 1.0.0';
  constructor(notifyService: NotifyAppUpdatesService) {

  }

}
