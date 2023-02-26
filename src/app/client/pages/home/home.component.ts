import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { faAngleLeft, faAngleRight, faBolt, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { Typeproduct } from './typeHome.type';
import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper';
import { BannerService } from '../../services/banner/banner.service';
import { TySlider } from 'src/app/admin/types/ISlider';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  selectIndex = 0;

  indicators = true;
  @Input() autoSilde = true;
  slideInteval = 3000;
  freeShip = faTruckFast;
  nextIcon = faAngleRight;
  leftIcon = faAngleLeft;
  faBolt = faBolt
  images: Array<TySlider> = []
  public timeLeft: Date = new Date();
  listBanner: Array<string> = [
    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/02/banner/Befit720-220-720x220-1.png', 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/01/banner/720-220-720x220-172.png'
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
      this.selectIndex++;
    }
    else {
      this.selectIndex++;
    }
  }
  constructor(private BannerService: BannerService) { }

  ngOnInit(): void {
    this.getBanner()
    // if (this.autoSilde) {
    //   this.autoSildeImages();
    // }


  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.getBanner()
    if (this.autoSilde) {
      this.autoSildeImages();
    }
  }
  autoSildeImages(): void {
    setInterval(() => {
      this.OnNextClick();
    }, this.slideInteval)
  }
  getBanner() {
    this.BannerService.getAllBanner().subscribe(data => {
      this.images = data;
      this.images.map((item => {
        console.log(item.isStatus);
      }))
      return this.images
    })
  }
  listProduct: Array<Typeproduct> = [{
    id: "1",
    brand: 'MSI',
    freeShip: true,
    image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
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
    image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
  {
    id: "1",
    brand: 'MSI',
    freeShip: true,
    image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },

  {
    id: "1",
    brand: 'MSI',
    freeShip: true,
    image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },

  {
    id: "1",
    brand: 'MSI',
    freeShip: true,
    image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
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
    image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },
  {
    id: "1",
    brand: 'MSI',
    freeShip: true,
    image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },

  {
    id: "1",
    brand: 'MSI',
    freeShip: true,
    image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
    name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
    percentPrice: 26900000,
    price: 3090000,
    reducedPrice: 12
  },





  ]
  setSwiperInstance(swiper: Swiper) {
    // setInterval(() => {
    //   swiper.slideNext();
    // }, 5000);
  }

}
