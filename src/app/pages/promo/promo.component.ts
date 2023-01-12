import { Component, OnInit } from '@angular/core';
import { TyPromo } from './promo.type';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listPromo: Array<TyPromo> = [{
    id: '1',
    image: 'https://lh3.googleusercontent.com/fyvevQRxfSSiCjI9VUYKdKc9D5vof5K01e8DRgk2BsLDKe9YDLP_3IwB8H7CX6FVdo6rV-DhmNTMb6F1vJRrbL751fZRIDQmGA=rw-w523',
    name: 'Mua ROG Nhận Lì Xì Khủng',
    createDate: new Date(),
  },
  {
    id: '2',
    image: 'https://lh3.googleusercontent.com/04TghJkCnJECuOjAJqmd6F9YdFkHBKThNrxg5THVw2pVXKiVAMaCiUp_fr3wm3rfm7FIOfF5SW8wJ68S7NaW0QDhssNZIhjG=rw-w523',
    name: 'Chuẩn Màu Sắc, Đỉnh Đồ Họa Cùng Màn Hình Asus',
    createDate: new Date(),
  },
  {
    id: '3',
    image: 'https://lh3.googleusercontent.com/4dVq9_24hSfIhOU79Ou9zhJ2oLbnIr5wuFFzeJ8M8OUcAi6897SoCN5Mr7GS7MklJr2urv6-iwSVhotLRpl6FYTc0Me1fxJLDg=rw-w524',
    name: 'Chuẩn Màu Sắc, Đỉnh Đồ Họa Cùng Màn Hình Asus',
    createDate: new Date(),
  },
  {
    id: '4',
    image: 'https://lh3.googleusercontent.com/xkWL05Kvqu6a5wuKpHoXP9QnfrIs7-o5cqbHvC2pvpI_IBsKhPl_WQQtb9f9yWaVvzq_zawUQLVkpWpIkKaJ6pHtMvVlFdua=rw-w523',
    name: 'Chuẩn Màu Sắc, Đỉnh Đồ Họa Cùng Màn Hình Asus',
    createDate: new Date(),
  },
  {
    id: '5',
    image: 'https://lh3.googleusercontent.com/xr4xA_NwvXyOBJihFcZZ0aBbGBC3aZEOyw4ep1qmPFu_aBwiqUzlLaphgZk8u_9E9jZKPck2t-qFgP99z_vVy5RtKb06o1g0=rw-w1836',
    name: 'Mua ROG Nhận Lì Xì Khủng',
    createDate: new Date(),
  },
  {
    id: '6',
    image: 'https://lh3.googleusercontent.com/fCNZAXQnCOpjrGGp-xFwKUSbj-xuCAv2rJRW2tJBQBpgtPOjx8rpU9FRmXYdr-woIuRB2CCvJEuo4aElxVNukBTxaU6LyHaVkg=rw-w1046',
    name: 'Chuẩn Màu Sắc, Đỉnh Đồ Họa Cùng Màn Hình Asus',
    createDate: new Date(),
  },
  {
    id: '7',
    image: 'https://lh3.googleusercontent.com/CtR7ezbt0-oi0TpGBN5XM2IV-rayCA6qcNEu2LsWBG0Rgy9PvWhGS2207pCRe3jZxjZ0nEgwI-if9bzIPdcjqmP7A2ODiDUX=rw-w523',
    name: 'Chuẩn Màu Sắc, Đỉnh Đồ Họa Cùng Màn Hình Asus',
    createDate: new Date(),
  },
  {
    id: '8',
    image: 'https://lh3.googleusercontent.com/OSjKhh9HiCViC3QT7Mi6Hp5hyGeT_fO2xqFw9SGT4tq2WnKHp73kQCjw8cLN992U_6z9bUhJnC4IPbFqECQGdDXFEOWF3kODuQ=rw-w523',
    name: 'Chuẩn Màu Sắc, Đỉnh Đồ Họa Cùng Màn Hình Asus',
    createDate: new Date(),
  }

  ]

}
