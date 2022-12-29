import { Component } from '@angular/core';
import { FirebaseService } from "./services/firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private firebaseService: FirebaseService) {
        this.firebaseService.authenticate("admin@admin.com", "admins");
    }
}
