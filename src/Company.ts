import { faker } from '@faker-js/faker';
import { Mapabble } from './CustomMap';

export class Company implements Mapabble {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<h1>Carch phrase is: ${this.catchPhrase}</h1>
            <p>Company name is: ${this.companyName}</p>`;
  }
}
