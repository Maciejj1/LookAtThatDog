import { Component, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, take } from 'rxjs';
import { Router } from '@angular/router';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  aler = 'Brak zdjęcia';
  logo = 'assets/logo.png';
  url = 'https://pl.wikipedia.org/wiki/';
  $dogs: Observable<any> | undefined;
  _dogs: String[] = [];

  public searchPic: String = 'assets/default.png';
  constructor(
    private service: DataService,
    private route: Router,
    public modal: ModalService
  ) {}

  ngOnInit(): void {
    this.$dogs = this.service.getListOfDogs();
  }
  display = false;
  closeModal() {
    this.display = true;
  }
  selectDog(): void {
    this.service.selectByDog(this._dogs).subscribe((response) => {
      if (response.status === 'success') {
        this.searchPic = response.message;
      } else {
        this.searchPic = this.aler;
      }
    });
  }

  goToWikipedia() {
    this.route.navigate([this.url + this._dogs]);
  }
}
