import { Component, ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval, concat } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotifyAppUpdatesService {

  constructor(updates: SwUpdate, appRef: ApplicationRef) {
    console.log('NOTIFY SERVICE CALLING');
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval(5 * 60 * 60);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    everySixHoursOnceAppIsStable$.subscribe(() => updates.checkForUpdate());

    updates.available.subscribe(event => {
      if (confirm('New Version available?')) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }
}
