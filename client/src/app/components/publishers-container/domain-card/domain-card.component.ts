import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Domain } from '../publishers-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-domain-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './domain-card.component.html',
  styleUrl: './domain-card.component.css',
})
export class DomainCardComponent {
  @Input() domain!: Domain;
  @Output() realoacComp = new EventEmitter<void>();
  isEdit: boolean = false;
  _domain!: Domain;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this._domain = JSON.parse(JSON.stringify(this.domain));
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  editDomain() {
    this.domain = JSON.parse(JSON.stringify(this._domain));
    this.http
      .put(`http://localhost:3000/api/domains/${this._domain._id}`, {
        domain: this._domain,
      })
      .subscribe(
        () => {},
        (error) => {
          if (error.status === 405) {
            return alert(
              `This domain is already configured on publisher ${error.error.publisher}`
            );
          }
          console.error('Error adding domain:', error);
        }
      );

    this.toggleEdit();
  }
  deleteDomain() {
    console.log(this.domain.domain);
    this.http
      .delete(`http://localhost:3000/api/domains/${this.domain._id}`)
      .subscribe(
        () => {
          this.realoacComp.emit();
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
