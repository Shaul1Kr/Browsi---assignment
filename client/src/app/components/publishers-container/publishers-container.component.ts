import {Component, OnInit} from '@angular/core';
import {PublisherCardComponent} from "./publisher-card/publisher-card.component";
import {CommonModule} from "@angular/common";

export type Publisher = {
  publisher: string;
  domains: Array<Domain>
};

export type Domain = {
  domain: string,
  desktopAds: number,
  mobileAds: number
};

@Component({
  selector: 'app-publishers-container',
  standalone: true,
  imports: [
    PublisherCardComponent,
    CommonModule
  ],
  templateUrl: './publishers-container.component.html',
  styleUrl: './publishers-container.component.css'
})
export class PublishersContainerComponent implements OnInit {
  constructor() {
  }

  data: Array<Publisher> = [
    {
      publisher: 'publisher 1',
      domains: [
        {
          domain: "bla.com",
          desktopAds: 5,
          mobileAds: 3,
        },
        {
          domain: "bla1.com",
          desktopAds: 2,
          mobileAds: 30,
        }
      ]
    },
    {
      publisher: 'publisher 2',
      domains: [
        {
          domain: "gar.com",
          desktopAds: 0,
          mobileAds: 4,
        },
        {
          domain: "gar.com",
          desktopAds: 5,
          mobileAds: 3,
        }
      ]
    }
  ]

  ngOnInit(): void {
  }

  addPublisher() {
  }
}
