import { Component, HostListener } from '@angular/core';
import { faFacebook, faFacebookF, faGoogle, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCircleChevronUp, faLocation, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { MyArrayTypeButton } from './components/login/login.component';
type TyContact = {
  id: string,
  icon: IconDefinition,
  style: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DoAnPC';
  isShow: boolean = true;
  topPosToStartShowing = 100;
  upIcon = faCircleChevronUp



  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;


    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  contacts: Array<TyContact> = [
    {
      id: '1',
      icon: faPhone,
      style: ' bg-[#18E5BD] text-white  mb-[190px] text-white ',
    },
    {
      id: '2',
      icon: faEnvelope,
      style: ' bg-[#FF8F37]  mb-[130px]  ',
    },
    {
      id: '3',
      icon: faLocationDot,
      style: ' bg-[#F7B022]  mb-[70px] text-white ',
    },
    {
      id: '4',
      icon: faFacebookF,
      style: 'bg-[#4378D0] text-white '
    }
  ];
}
