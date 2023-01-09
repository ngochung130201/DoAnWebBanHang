import { Component, OnInit } from '@angular/core';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { itemFooter } from '../footer/footer.data';
import { menuUp } from './header.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  menuUp = menuUp;
  authIcon = faUser;
  searchIcon = faSearch;
  bellIcon = faBell;
  menuIcon = faBars;
  cartIcon = faCartShopping;
  isMobieHiden = true;
  handleMenuMoibe() {
    this.isMobieHiden = !this.isMobieHiden;;

  }
}
