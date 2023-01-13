import { Component, OnInit } from '@angular/core';

import { faAngleUp, faTruckFast, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Typeproduct } from '../home/typeHome.type';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }
  upIcon: IconDefinition = faAngleUp;
  freeShip = faTruckFast;
  ngOnInit(): void {
  }
  listProduct: Array<Typeproduct> = [
    {
      brand: 'ASUS',
      freeShip: false,
      image: './assets/image/product/asus.webp',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      brand: 'ASUS',
      freeShip: true,
      image: './assets/image/product/asus.webp',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      brand: 'ASUS',
      freeShip: true,
      image: './assets/image/product/asus.webp',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      brand: 'ASUS',
      freeShip: true,
      image: './assets/image/product/asus.webp',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      brand: 'MSI',
      freeShip: true,
      image: './assets/image/product/msi.webp',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      brand: 'MSI',
      freeShip: true,
      image: './assets/image/product/msi.webp',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },

    {
      brand: 'MSI',
      freeShip: true,
      image: './assets/image/product/msi.webp',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },

    {
      brand: 'MSI',
      freeShip: true,
      image: './assets/image/product/msi.webp',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      brand: 'ASUS',
      freeShip: false,
      image: './assets/image/product/asus.webp',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      brand: 'ASUS',
      freeShip: true,
      image: './assets/image/product/asus.webp',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      brand: 'ASUS',
      freeShip: true,
      image: './assets/image/product/asus.webp',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      brand: 'ASUS',
      freeShip: true,
      image: './assets/image/product/asus.webp',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      brand: 'MSI',
      freeShip: true,
      image: './assets/image/product/msi.webp',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      brand: 'MSI',
      freeShip: true,
      image: './assets/image/product/msi.webp',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },

    {
      brand: 'MSI',
      freeShip: true,
      image: './assets/image/product/msi.webp',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },





  ]
}
