import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader,
  IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonRow, IonTitle, IonToolbar
} from '@ionic/angular/standalone';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.page.html',
  styleUrls: ['./itinerary.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, RouterLinkWithHref,
    IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol, IonGrid, IonButton, IonRadio, IonRadioGroup]
})
export class ItineraryPage {

  myStatus: string = "";
  myStatus2: string = "";
  myStatus3: string = "";
  myStatus4: string = "";
  myStatus5: string = "";


  landmarksChoice: string = '';
  landmarkImage: string = "";
  landmarkDescription: string = '';


  resturauntChoice: string = "";
  resturauntImage: string = "";
  resturauntDescription: string = '';


  activityChoice: string = "";
  activityImage: string = "";
  activityDescription: string = '';


  eveningChoice: string = "";
  eveningImage: string = "";
  eveningDescription: string = '';

  cafeChoice: string = "";
  cafeImage: string = "";
  cafeDescription: string = '';


  constructor(private storage: Storage) { }
  async ionViewWillEnter() {
    await this.storage.create();
   
    this.myStatus = await this.storage.get('status');
    this.myStatus2 = await this.storage.get('status2');
    this.myStatus3 = await this.storage.get('status3');
    this.myStatus4 = await this.storage.get('status4');
    this.myStatus5 = await this.storage.get('status5');
/*
    this.landmarksChoice = await this.storage.get('landmarksChoice');
    this.landmarkImage = await this.storage.get('landmarksImage');
    this.landmarkDescription = await this.storage.get('landmarkDescription');

    this.resturauntChoice = await this.storage.get('landmarksChoice');
    this.resturauntImage = await this.storage.get('landmarksImage');
    this.resturauntDescription = await this.storage.get('landmarkDescription');

    this.activityChoice = await this.storage.get('landmarksChoice');
    this.activityImage = await this.storage.get('landmarksImage');
    this.activityDescription = await this.storage.get('landmarkDescription');

    this.eveningChoice = await this.storage.get('landmarksChoice');
    this.eveningImage = await this.storage.get('landmarksImage');
    this.eveningDescription = await this.storage.get('landmarkDescription');

    this.cafeChoice = await this.storage.get('landmarksChoice');
    this.cafeImage = await this.storage.get('landmarksImage');
    this.cafeDescription = await this.storage.get('landmarkDescription');*/ 



    if (this.myStatus5 === 'hidden') {

      this.cafeChoice = "The Jungle Cafe";
      this.cafeDescription = "Start your day bright and early with a lovely visit to the Jungle Cafe where you can indulge in their beautiful jungle like environment and food";
      this.cafeImage = "https://i2-prod.galwaybeo.ie/incoming/article5877726.ece/ALTERNATES/s615/1_Jungle-Cafe-Galway-Facebook.jpg"

    }

    else if (this.myStatus5 === 'known') {

      this.cafeChoice = "Nero Cafe";
      this.cafeDescription = "Start your day bright and early with a lovely visit to the Nero Cafe where you can indulge and relax in their peacfull environment and enjoy great food";
      this.cafeImage = "https://coffeeshops.ie/wp-content/uploads/2023/09/Caffe-Nero-Galway-City-min.jpg"


    }

    if (this.myStatus === 'historical') {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      switch (randomNumber) {
        case 1:
          this.landmarksChoice = "Kylemore Abbey";
          this.landmarkDescription = "Venture out to Kylemore Abbey! Surrounded by lush greenery, this historic site offers a glimpse into Ireland's past. Explore the beautiful gardens and capture memorable moments against the abbey's majestic backdrop.";
          this.landmarkImage = "https://i.pinimg.com/originals/ab/46/10/ab461063aad4d54b3d50b52a9b99ad12.jpg"

          break;
        case 2:
          this.landmarksChoice = "Galway Cathedral";
          this.landmarkDescription = " Venture out to the awe-inspiring Galway Cathedral! Admire the stunning architecture and intricate stained glass windows inside this sacred space.";
          this.landmarkImage = "https://www.agoda.com/wp-content/uploads/2020/02/Galway-Cathedral-things-to-do-in-Galway-Ireland.jpg"
          break;
        case 3:
          this.landmarksChoice = "Lynchs Castle";
          this.landmarkDescription = "Venture out to Lynchs Castle a medieval landmark in Galway City. This fortress stands as a testament to the city's rich history. ";
          this.landmarkImage = "https://irishhistory.com/wp-content/uploads/2023/04/Galway-Galway-City-Lynchs-Castle-900x600.jpg"
          break;
        default:
          this.landmarksChoice = "Unknown outcome";
          break;
      }
    }
    else if (this.myStatus === 'natural') {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      switch (randomNumber) {
        case 1:
          this.landmarksChoice = "Aran Islands";
          this.landmarkDescription = "Venture out to the scenic Aran Islands! Discover hidden coves, cycle along coastal trails, and indulge in fresh seafood while immersing yourself in Gaelic culture.";
          this.landmarkImage = "https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/e23de216-1621-4f09-98a4-769678d2304c/ugc-jdodonncada-na-seacht-dteampaill-aran-islands-galway.jpg"
          break;

        case 2:
          this.landmarksChoice = "Connemara National Park";
          this.landmarkDescription = "Venture out to the breathtaking landscapes of Connemara National Park! Hike scenic trails, spot native wildlife, and soak in panoramic views of rolling hills and rugged coastline.";
          this.landmarkImage = "https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/da37b066-aac9-44fe-b778-6970b6317271/header-connemara-galway.jpg"
          break;
        case 3:
          this.landmarksChoice = "Salthill Promenade";
          this.landmarkDescription = "Venture out for a picturesque walk along the Atlantic Ocean, where visitors can stroll, cycle, or simply soak up the stunning coastal views.";
          this.landmarkImage = "https://www.wildatlanticwayonline.com/wp-content/uploads/2018/04/Salthill-Galway-Wild-Atlantic-Way-11.jpg"
          break;
        default:
          this.landmarksChoice = "Unknown outcome";
          break;
      }

    }

    if (this.myStatus2 === 'adventurous') {
      const randomNumber = Math.floor(Math.random() * 2) + 1;
      switch (randomNumber) {
        case 1:
          this.resturauntChoice = "Oscars Seafood Bistro";
          this.resturauntDescription = "After you've worked up an appetite, indulge in a culinary adventure at Oscar's Seafood Bistro! Dive into delectable seafood dishes crafted with locally sourced ingredients.";
          this.resturauntImage = "https://1.bp.blogspot.com/-c6OMzcJHxDc/Xv5Rut1RNEI/AAAAAAABng8/nKKYfJEtIRMdw3WpwymwM13Y2iAzESnDwCK4BGAsYHg/s3211/20200702_214704.jpg"
          break;
        case 2:
          this.resturauntChoice = "Tomodachi";
          this.resturauntDescription = "After you've worked up an appetite, indulge in a culinary adventure at Tomadochi, experience a taste of Japan right in the heart of Ireland.";
          this.resturauntImage = "https://c1.staticflickr.com/5/4467/37860029986_7c4a314b6b_b.jpg"
          break;
        default:
          this.resturauntChoice = "Unknown outcome";
          break;
      }
    }

    else if (this.myStatus2 === 'familiar') {
      const randomNumber = Math.floor(Math.random() * 2) + 1;
      switch (randomNumber) {
        case 1:
          this.resturauntChoice = "The Cellar Bar and Resturaunt";
          this.resturauntDescription = "After you've worked up an appetite, savor the cozy ambiance and delicious fare at The Cellar Bar and Restaurant. Treat yourself to hearty Irish classics and signature cocktails in a charming setting.";
          this.resturauntImage = "https://thisisgalway.ie/wp-content/uploads/2023/07/the-cellar-1.jpg"
          break;
        case 2:
          this.resturauntChoice = "An Pucan";
          this.resturauntDescription = "After you've worked up an appetite, experience the vibrant atmosphere of An Pucan! Enjoy traditional Irish pub grub and live music while mingling with locals and fellow travelers.";
          this.resturauntImage = "https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/f5/76/1f/we-cannot-wait-to-welcome.jpg"
          break;
        default:
          this.resturauntChoice = "Unknown outcome";
          break;
      }
    }

    if (this.myStatus3 === 'outdoor') {
      const randomNumber = Math.floor(Math.random() * 2) + 1;
      switch (randomNumber) {
        case 1:
          this.activityChoice = "Wildlands";
          this.activityDescription = "Next, embark on an outdoor adventure at Wildlands! Zip through treetop canopies, conquer challenging obstacles, and immerse yourself in nature's playground.";
          this.activityImage = "https://scdn.aro.ie/Sites/50/wildlands2020/uploads/images/panelsquareimages44/panelimagessquaresmall31/zip-n-trek-panel.png"
          break;
        case 2:
          this.activityChoice = "River Corrib Kayaking";
          this.activityDescription = "Next, experience the thrill of kayaking along the scenic River Corrib, where every paddle stroke unveils the natural beauty of Galway in a new light.";
          this.activityImage = "https://scdn.aro.ie/Sites/50/wildlands2020/uploads/images/panelsquareimages44/panelimagessquaresmall31/zip-n-trek-panel.png"
          break;
        default:
          this.activityChoice = "Unknown outcome";
          break;
      }
    }

    else if (this.myStatus3 === 'indoor') {
      const randomNumber = Math.floor(Math.random() * 2) + 1;
      switch (randomNumber) {
        case 1:
          this.activityChoice = "Galway Museum";
          this.activityDescription = "Next, uncover Galway's rich history at the Galway Museum! Delve into captivating exhibits showcasing the city's cultural heritage and archaeological treasures.";
          this.activityImage = "https://th.bing.com/th/id/OIP._8vjD-S5T41Zeqc0AySIZgHaE8?rs=1&pid=ImgDetMain"
          break;
        case 2:
          this.activityChoice = "Great Escape Rooms";
          this.activityDescription = "Next, test your wits at the Great Escape Rooms! Solve puzzles, crack codes, and race against the clock to escape themed rooms filled with mystery and excitement.";
          this.activityImage = "https://fatamorgana.es/content/images/21/720x432e90nn0/90531511133458.jpg"
          break;
        default:
          this.activityChoice = "Unknown outcome";
          break;
      }
    }


    if (this.myStatus4 === 'cozy') {

      this.eveningChoice = "Palas";
      this.eveningDescription = "After your long day, wind down with a cozy movie night at Palas! Grab some popcorn, sink into plush seats, and enjoy the latest blockbuster in this stylish cinema.";
      this.eveningImage = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/58/cc/23/palas-located-in-the.jpg?w=1200&h=-1&s=1"


    }

    else if (this.myStatus4 === 'nightlife') {

      this.eveningChoice = "Electric Nightclub";
      this.eveningDescription = "If you still have energy, dance the night away at Electric Nightclub! Immerse yourself in pulsating beats, vibrant lights, and electric atmosphere as you make unforgettable memories on the dance floor.";
      this.eveningImage = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/42/5f/75/you-can-chill-out-in.jpg?w=1200&h=-1&s=1"

    }

  }

  async saveItinerary() {
    await this.storage.set('landmarksChoice', this.landmarksChoice);
    await this.storage.set('landmarkImage', this.landmarkImage);
    await this.storage.set('landmarkDescription', this.landmarkDescription);

    await this.storage.set('resturauntChoice', this.resturauntChoice);
    await this.storage.set('resturauntImage', this.resturauntImage);
    await this.storage.set('resturauntDescription', this.resturauntDescription);

    await this.storage.set('activityChoice', this.activityChoice);
    await this.storage.set('activityImage', this.activityImage);
    await this.storage.set('activityDescription', this.activityDescription);

    await this.storage.set('cafeChoice', this.cafeChoice);
    await this.storage.set('cafeImage', this.cafeImage);
    await this.storage.set('cafeDescription', this.cafeDescription);

    await this.storage.set('eveningChoice', this.eveningChoice);
    await this.storage.set('eveningImage', this.eveningImage);
    await this.storage.set('eveningDescription', this.eveningDescription);

      //<ion-button expand="block" (click)="saveItinerary()">Save Itinerary</ion-button>

   
  }

}
