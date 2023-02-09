import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { faTruckFast, faShield, faRotateLeft, faGear, faLaptop, faChevronCircleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { TyProductDetail } from './productdetail.type';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { Typeproduct } from '../home/typeHome.type';
import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper';
import { isPlatformBrowser } from '@angular/common';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {

  constructor() { }
  freeShip = faTruckFast;
  faShield = faShield;
  faRoteleLeft = faRotateLeft;
  faGear = faGear;
  faLaptop = faLaptop;
  faRight = faChevronRight;
  isNavigation: boolean = false;
  ngOnInit(): void {

  }
  listService: Array<TyProductDetail> = [{
    id: '1',
    title: 'Chính sách bán hàng',
    items: [{
      icon: faTruckFast,
      text: 'Miễn phí giao hàng cho đơn hàng từ 800K'
    },
    {
      icon: faShield,
      text: 'Cam kết hàng chính hãng 100%'
    },
    {
      icon: faRotateLeft,
      text: 'Đổi trả trong vòng 10 ngày'
    },

    ]

  },
  {
    id: '2',
    title: 'Dịch vụ khác',
    items: [{
      icon: faGear,
      text: 'Sửa chữa đồng giá 150.000đ.'
    },
    {
      icon: faLaptop,
      text: 'Vệ sinh máy tính, laptop.'
    },
    {
      icon: faShield,
      text: 'Bảo hành tại nhà.'
    },

    ]

  },


  ]
  listProduct: Array<Typeproduct> = [{

    id: "1",
    brand: 'MSI',
    freeShip: true,
    image: './assets/image/product/msi.webp',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
  {
    id: "1",
    brand: 'ASUS',
    freeShip: false,
    image: './assets/image/product/asus.webp',
    name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
  {
    id: "1",
    brand: 'ASUS',
    freeShip: true,
    image: './assets/image/product/asus.webp',
    name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
  {
    id: "1",
    brand: 'ASUS',
    freeShip: true,
    image: './assets/image/product/asus.webp',
    name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
  {
    id: "1",
    brand: 'ASUS',
    freeShip: true,
    image: './assets/image/product/asus.webp',
    name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
  {
    id: "1",
    brand: 'MSI',
    freeShip: true,
    image: './assets/image/product/msi.webp',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
  {
    id: "1",
    brand: 'MSI',
    freeShip: true,
    image: './assets/image/product/msi.webp',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },

  {
    id: "1",
    brand: 'MSI',
    freeShip: true,
    image: './assets/image/product/msi.webp',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },

  {
    id: "1",
    brand: 'MSI',
    freeShip: true,
    image: './assets/image/product/msi.webp',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
  {
    id: "1",
    brand: 'ASUS',
    freeShip: false,
    image: './assets/image/product/asus.webp',
    name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
  {
    id: "1",
    brand: 'ASUS',
    freeShip: true,
    image: './assets/image/product/asus.webp',
    name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
  {
    id: "1",
    brand: 'ASUS',
    freeShip: true,
    image: './assets/image/product/asus.webp',
    name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
  {
    id: "1",
    brand: 'ASUS',
    freeShip: true,
    image: './assets/image/product/asus.webp',
    name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
  {
    id: "1",
    brand: 'MSI',
    freeShip: true,
    image: './assets/image/product/msi.webp',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
  {
    id: "1",
    brand: 'MSI',
    freeShip: true,
    image: './assets/image/product/msi.webp',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },

  {
    id: "1",
    brand: 'MSI',
    freeShip: true,
    image: './assets/image/product/msi.webp',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
  ]
  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  showNavigation(): boolean {
    return this.isNavigation = !this.isNavigation;
  }
  setSwiperInstance(swiper: Swiper) {
    setInterval(() => {
      swiper.slideNext();
    }, 3000);
  }


}
