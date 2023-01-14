import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { faAngleLeft, faAngleRight, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { Typeproduct } from './typeHome.type';
import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  selectIndex = 0;

  indicators = true;
  @Input() autoSilde = false;
  slideInteval = 3000;
  freeShip = faTruckFast;
  nextIcon = faAngleRight;
  leftIcon = faAngleLeft
  images = [

    {
      url:
        'https://lh3.googleusercontent.com/JErVt0nHkSDcHTMHlNh5ZBDlmFUd1eTkPEGpRl2Xnw6IVtzlwGeHExaVmi_czJdSjx3U5ITgRpPUF1OYRs635mGrXzvEsc0-=rw-w1920',
      alt: 'nature2',
    },
    {
      url:
        'https://lh3.googleusercontent.com/ZLv9j8ndxgb6GKdwItALJ1YEwtlkIIgnd_tUEs3PkH6fwfmKoS5xeNULQXdU42JvahF1Zuwr5K7dXZZl_0aQIPYIvRDcAp9D=w1920-rw',
      alt: 'nature2',
    },


  ]
  selectImage(index: number): void {
    this.selectIndex = index;
  }
  OnPrevClick(): void {
    if (this.selectIndex === 0) {
      this.selectIndex = this.images.length - 1;
    }
    else {
      this.selectIndex--;
    }
  }
  OnNextClick(): void {
    if (this.selectIndex === this.images.length - 1) {
      this.selectIndex = 0;
    }
    else {
      this.selectIndex++;
    }
  }
  constructor() { }

  ngOnInit(): void {
    if (this.autoSilde) {
      this.autoSildeImages();
    }
  }
  autoSildeImages(): void {
    setInterval(() => {
      this.OnNextClick();
    }, this.slideInteval)
  }
  listProduct: Array<Typeproduct> = [{
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
  setSwiperInstance(swiper: Swiper) {
    setInterval(() => {
      swiper.slideNext();
    }, 3000);
  }

}
