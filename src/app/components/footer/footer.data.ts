import { faC, faClock, faGlobe, faMoneyBill, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { TypeBank, TypeFooter } from "./typefooter";
let itemFooter: Array<TypeFooter> = [
  {
    title: 'Hỗ trợ khách hàng',
    item: ['Thẻ ưu đãi',
      'Trung tâm bảo hành',
      'Thanh toán và giao hàng',
      'Dịch vụ sửa chữa và bảo trì',
      'Doanh nghiệp thân thiết']
  },
  {
    title: 'Chính sách Mua hàng và Bảo hành',
    item: ['Quy định chung',
      'Chính sách Bảo mật Thông tin',
      'Chính sách Vận chuyển và Lắp đặt',
      'Chính sách bảo hành',
      'Chính sách đổi trả và hoàn tiền',
      'Quy định giá cả và hình thức thanh toán',
      'Chính sách trả góp'
    ]
  },
  {
    title: 'Chính sách Mua hàng và Bảo hành',
    item: ['Quy định chung',
      'Chính sách Bảo mật Thông tin',
      'Chính sách Vận chuyển và Lắp đặt',
      'Chính sách bảo hành',
      'Chính sách đổi trả và hoàn tiền',
      'Quy định giá cả và hình thức thanh toán',
      'Chính sách trả góp'
    ]
  },
  {
    title: 'Chính sách Mua hàng và Bảo hành',
    item: ['Quy định chung',
      'Chính sách Bảo mật Thông tin',
      'Chính sách Vận chuyển và Lắp đặt',
      'Chính sách bảo hành',
      'Chính sách đổi trả và hoàn tiền',
      'Quy định giá cả và hình thức thanh toán',
      'Chính sách trả góp'
    ]
  },
  {
    title: 'Chính sách Mua hàng và Bảo hành',
    item: ['Quy định chung',
      'Chính sách Bảo mật Thông tin',
      'Chính sách Vận chuyển và Lắp đặt',
      'Chính sách bảo hành',
      'Chính sách đổi trả và hoàn tiền',
      'Quy định giá cả và hình thức thanh toán',
      'Chính sách trả góp'
    ]
  },
]
let footerBank: Array<TypeBank> = [
  {
    icon: faQrcode,
    name: 'QR Code'
  },
  {
    icon: faMoneyBill,
    name: 'Tiền mặt'
  },
  {
    icon: faClock,
    name: 'Trả góp'
  },
  {
    icon: faGlobe,
    name: 'Internet Banking'
  },

]
export {
  itemFooter,
  footerBank
}
