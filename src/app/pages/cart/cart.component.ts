import { Component, OnInit, SimpleChanges } from '@angular/core';
import { faBookmark, faChevronRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TyCart } from './Typecart.type';
import { priceVND } from '../../helper/price'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.sumMoney = this.sumProduct().toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).toString();

  }
  ngOnChanges(changes: SimpleChanges) {
    this.sumMoney = this.sumProduct().toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).toString();
  }
  isDisable: boolean = false;
  listProductCart: Array<TyCart> = [
    {
      id: '1',
      name: 'Samsung Galaxy Note 4',
      amount: 1,
      image: "https://lh3.googleusercontent.com/5Hdrypl2LBIKGOJcCkYl10SEpDHcKEiQzaJfJ3vG2ZyzcwtPud41LlFgYSx6oCBNBkII1BdAfYs_sXQjazuZhbu0FkJHPtWF=rw",
      price: 2100020,
      priceDiscount: 2100020,
      intoMoney: 2100020,
      sumMoney: 8
    },
    {
      id: '2',
      name: 'Samsung Galaxy Note so 2',
      amount: 1,
      image: 'https://lh3.googleusercontent.com/UuG5qvAubaWHPM3xcaQLwVnjrvnT4gEv0EOWxBYr96VhgD_jW4eJO72Fh79MyjF-Q5DAlEXKkqzHmpiGl1U=rw',
      price: 4500000,
      priceDiscount: 4500000,
      intoMoney: 1500000,
      sumMoney: 15
    },
    {
      id: '3',
      name: 'Samsung Galaxy Note so dasd',
      amount: 1,
      image: 'https://lh3.googleusercontent.com/UuG5qvAubaWHPM3xcaQLwVnjrvnT4gEv0EOWxBYr96VhgD_jW4eJO72Fh79MyjF-Q5DAlEXKkqzHmpiGl1U=rw',
      price: 1500000,
      priceDiscount: 1500000,
      intoMoney: 2500000,
      sumMoney: 15
    },
    {
      id: '4',
      name: 'Samsung Galaxy Note so dasd',
      amount: 1,
      image: 'https://lh3.googleusercontent.com/UuG5qvAubaWHPM3xcaQLwVnjrvnT4gEv0EOWxBYr96VhgD_jW4eJO72Fh79MyjF-Q5DAlEXKkqzHmpiGl1U=rw',
      price: 1760000,
      priceDiscount: 1760000,
      intoMoney: 1500000,
      sumMoney: 15
    }
  ];
  bookMarkIcon: IconDefinition = faBookmark;
  nextIcon: IconDefinition = faChevronRight;
  sumMoney: string | number = '0';
  intoMoney: number | string = 0;
  // Hàm tăng số lượng
  countUp(id: string, priceDiscount: number) {
    this.listProductCart.map((cart): any => {
      if (id === cart.id) {
        if (cart.amount === 1) {
          this.isDisable = true;
          cart.intoMoney = priceDiscount;
        }
        let countUp = ++cart.amount;

        cart.intoMoney = countUp * priceDiscount
      }
    })


    this.sumMoney = this.sumProduct().toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).toString();



  }
  //  Hàm tính tổng tiền
  sumProduct() {
    let sum = 0;
    this.listProductCart.map((item) => {

      sum += item.intoMoney;
    })
    return sum;
  }
  //  hàm giảm số lượng
  countDown(id: string, priceDiscount: number) {
    this.listProductCart.map((cart): any => {
      if (id === cart.id) {
        if (cart.amount === 1) {
          this.isDisable = false;
          cart.intoMoney = priceDiscount;
        }
        if (cart.amount > 1) {
          let countUp = --cart.amount;
          cart.intoMoney = countUp * priceDiscount;
        }


      }

    })
    this.sumMoney = this.sumProduct().toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).toString();
  }

  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }



}
