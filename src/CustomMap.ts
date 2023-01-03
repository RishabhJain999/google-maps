//Instruction to every other class
//on how to be an argument to addMarker()
export interface Mapabble {
  location: {
    lat: number;
    lng: number;
  };
  markerContent: () => string;
}
export class CustomMap {
  private googleMap: google.maps.Map;
  constructor() {
    this.googleMap = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }
  addMarker(mappable: Mapabble) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener('click', () => {
      const showInfoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      showInfoWindow.open({
        anchor: marker,
        map: this.googleMap,
      });
    });
  }

  //   addUserMarker(user: User): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: user.location.lat,
  //         lng: user.location.lng,
  //       },
  //     });
  //   }
  //   addComapnyMarker(company: Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: company.location.lat,
  //         lng: company.location.lng,
  //       },
  // });
  //   }
}
