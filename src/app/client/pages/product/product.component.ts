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
      id: "1",
      brand: 'ASUS',
      freeShip: false,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/790/10051583-dien-thoai-samsung-a53-5g-128gb-xanh-1.jpg',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      id: "2",
      brand: 'ASUS',
      freeShip: true,
      image: 'https://cdn.tgdd.vn/Products/Images/42/271734/xiaomi-redmi-10a-xanh-thumb-600x600.jpg',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      id: "3",
      brand: 'ASUS',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/790/10051583-dien-thoai-samsung-a53-5g-128gb-xanh-1.jpg',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      id: "4",
      brand: 'ASUS',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/790/10051583-dien-thoai-samsung-a53-5g-128gb-xanh-1.jpg',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      id: "5",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/product/813/10051337-dien-thoai-samsung-s22-ultra-8gb-128gb-do-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      id: "6",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/product/813/10051337-dien-thoai-samsung-s22-ultra-8gb-128gb-do-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },

    {
      id: "7",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/product/813/10051337-dien-thoai-samsung-s22-ultra-8gb-128gb-do-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },

    {
      id: "8",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/product/813/10051337-dien-thoai-samsung-s22-ultra-8gb-128gb-do-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      id: "9",
      brand: 'ASUS',
      freeShip: false,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/790/10051583-dien-thoai-samsung-a53-5g-128gb-xanh-1.jpg',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      id: "1",
      brand: 'ASUS',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/790/10051583-dien-thoai-samsung-a53-5g-128gb-xanh-1.jpg',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      id: "1",
      brand: 'ASUS',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/790/10051583-dien-thoai-samsung-a53-5g-128gb-xanh-1.jpg',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      id: "1",
      brand: 'ASUS',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/790/10051583-dien-thoai-samsung-a53-5g-128gb-xanh-1.jpg',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      id: "1",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/product/813/10051337-dien-thoai-samsung-s22-ultra-8gb-128gb-do-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      id: "1",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/product/813/10051337-dien-thoai-samsung-s22-ultra-8gb-128gb-do-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },

    {
      id: "1",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/product/813/10051337-dien-thoai-samsung-s22-ultra-8gb-128gb-do-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },





  ]
}
