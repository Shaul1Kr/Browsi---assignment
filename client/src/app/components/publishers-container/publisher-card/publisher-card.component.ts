import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Domain, Publisher } from '../publishers-container.component';
import { DomainCardComponent } from '../domain-card/domain-card.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-publisher-card',
  standalone: true,
  imports: [DomainCardComponent, CommonModule, FormsModule],
  templateUrl: './publisher-card.component.html',
  styleUrls: ['./publisher-card.component.css'],
})
export class PublisherCardComponent {
  @Input() publisher!: Publisher;
  @Output() realoacComp = new EventEmitter<void>();
  isCreate: boolean = false;
  isUpdate: boolean = false;
  newDomain: Domain = {
    _id: '',
    domain: '',
    desktopAds: 0,
    mobileAds: 0,
  };
  newPublisherName: string = '';

  constructor(private http: HttpClient) {}

  toggleAddDomain() {
    this.isCreate = !this.isCreate;
    this.isUpdate = false;
  }

  addDomain() {
    if (this.validateDomain(this.newDomain)) {
      const combinedData = {
        ...this.newDomain,
        publisherId: this.publisher._id,
      };

      this.http
        .post<Domain>('http://localhost:3000/api/domains', combinedData)
        .subscribe(
          () => {
            this.realoacComp.emit();
            this.newDomain = {
              _id: '',
              domain: '',
              desktopAds: 0,
              mobileAds: 0,
            };
            this.isCreate = false;
          },
          (error) => {
            if (error.status === 405) {
              return alert(
                `This domain is already configured on publisher ${error.error.publisher}`
              );
            }
            console.error('Error adding domain:', error);
          }
        );
    } else {
      console.error('Invalid domain data');
      alert('Please provide valid domain information.');
    }
  }

  validateDomain(domain: Domain): boolean {
    return (
      domain.domain.trim() !== '' &&
      !isNaN(domain.desktopAds) &&
      domain.desktopAds >= 0 &&
      !isNaN(domain.mobileAds) &&
      domain.mobileAds >= 0
    );
  }
  toggleupdatePublisher() {
    this.isUpdate = !this.isUpdate;
    this.isCreate = false;
  }

  updatePublisher() {
    this.http
      .put(`http://localhost:3000/api/publishers/${this.publisher._id}`, {
        name: this.newPublisherName,
      })
      .subscribe(
        () => {
          this.realoacComp.emit();
          this.newPublisherName = '';
          this.isUpdate = false;
        },
        (error) => {
          console.error('Error adding publisher:', error);
        }
      );
  }
  handlereloadPublishers() {
    this.realoacComp.emit();
  }
}
