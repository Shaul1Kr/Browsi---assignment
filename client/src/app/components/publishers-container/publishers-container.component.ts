import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PublisherCardComponent } from './publisher-card/publisher-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type Publisher = {
  _id: string;
  name: string;
  domains: Array<Domain>;
};

export type Domain = {
  _id: string;
  domain: string;
  desktopAds: number;
  mobileAds: number;
};

@Component({
  selector: 'app-publishers-container',
  standalone: true,
  imports: [PublisherCardComponent, CommonModule, FormsModule],
  templateUrl: './publishers-container.component.html',
  styleUrls: ['./publishers-container.component.css'],
})
export class PublishersContainerComponent implements OnInit {
  data: Array<Publisher> = [];
  newPublisherName: string = '';
  isCreate: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPublishers();
  }

  fetchPublishers() {
    this.http
      .get<Array<Publisher>>('http://localhost:3000/api/publishers')
      .subscribe(
        (response: Array<Publisher>) => {
          this.data = response;
        },
        (error) => {
          console.error('Error fetching publishers:', error);
        }
      );
  }

  toggleAddPublisher() {
    this.isCreate = !this.isCreate;
  }

  addPublisher() {
    console.log(this.newPublisherName);
    this.http
      .post('http://localhost:3000/api/publishers', {
        name: this.newPublisherName,
      })
      .subscribe(() => this.fetchPublishers());
    this.newPublisherName = '';
    this.isCreate = false;
  }
}
