import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-landing-page',
    templateUrl: './app-landing-page.component.html',
    styleUrls: ['./app-landing-page.component.scss']
})
export class AppLandingPageComponent implements OnInit {
    constructor(private readonly router: Router) {
    }

    ngOnInit() {
    }
}
