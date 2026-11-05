import { setOptions, importLibrary } from '@googlemaps/js-api-loader';
import { googleMapKey } from '../../consts';
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent {
  public mapsReady = importLibraryAfterConfiguration();
  public lat = -37.813179;
  public lng = 144.950259;
  public zoom = 12;
}

async function importLibraryAfterConfiguration(): Promise<boolean> {
  setOptions({ key: googleMapKey, v: 'weekly' });
  await importLibrary('maps');
  await importLibrary('marker');
  return true;
}
