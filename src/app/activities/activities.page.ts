import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader,
IonItem, IonLabel, IonList, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { RouterLinkWithHref } from '@angular/router';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, RouterLinkWithHref,
    IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol, IonGrid, IonButton]
  })
export class ActivitiesPage implements OnInit {

  places: any;
  type: any;
  expandedDescriptions: { [key: string]: boolean } = {};
  hidden: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.type = history.state.type; 
    const url = 'https://www.jsonblob.com/api/jsonBlob/1236431268022706176'; 
    this.http.get<any>(url).subscribe(data => {
      this.places = data.places.activities; 
      console.log(this.places);

    });
  }

  img(placeName: string): string {
    if (placeName === 'Galway City Museum') {
      return 'https://th.bing.com/th/id/OIP._8vjD-S5T41Zeqc0AySIZgHaE8?rs=1&pid=ImgDetMain';
    } 
    else if (placeName === 'Wildlands Galway') {
      return 'https://scdn.aro.ie/Sites/50/wildlands2020/uploads/images/panelsquareimages44/panelimagessquaresmall31/zip-n-trek-panel.png';
    } 
    else if (placeName === 'Great Escape Rooms'){
      return 'https://fatamorgana.es/content/images/21/720x432e90nn0/90531511133458.jpg'
    }
    else if (placeName === 'Electric Nightclub'){
      return 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/42/5f/75/you-can-chill-out-in.jpg?w=1200&h=-1&s=1'
    } 
    else if (placeName === 'Palas'){
      return 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/58/cc/23/palas-located-in-the.jpg?w=1200&h=-1&s=1'
    }
    else if (placeName === 'River Corrib Kayaking'){
      return 'https://www.connemarawildescapes.ie/wp-content/uploads/2021/08/kayaking-on-the-river-corrib-galway-city-H1.webp'
    }
    else {
      return ''; 
    }
  }

  show(place: any) {
    place.hidden = !place.hidden;
  }

  openBrowser(placeName: string): void {
    try {
      if (placeName === 'Galway City Museum') {
        Browser.open({
          url: 'https://www.tripadvisor.ie/Attraction_Review-g186609-d215899-Reviews-Galway_City_Museum-Galway_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'Wildlands Galway'){
        Browser.open({
          url: 'https://www.tripadvisor.ie/Attraction_Review-g1386579-d21243974-Reviews-Wildlands-Moycullen_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'Great Escape Rooms'){
        Browser.open({
          url: 'https://www.tripadvisor.ie/Attraction_Review-g186609-d8692835-Reviews-Great_Escape_Rooms-Galway_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'Electric'){
        Browser.open({
          url: 'https://www.tripadvisor.ie/Attraction_Review-g186609-d7264273-Reviews-Electric-Galway_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'Palas'){
        Browser.open({
          url: 'https://www.tripadvisor.ie/Attraction_Review-g186609-d14174343-Reviews-Palas_Cinema-Galway_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'River Corrib Kayaking'){
        Browser.open({
          url: 'https://www.tripadvisor.com/ShowUserReviews-g186609-d2300946-r159299609-Kayakmor-Galway_County_Galway_Western_Ireland.html'
        });
      }
    } catch (error) {
      console.error('Error opening browser:', error);
    }
  }

}