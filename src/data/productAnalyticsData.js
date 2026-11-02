import medalOrange from '../assets/images/medal-orange.png'
import prodBluetooth from '../assets/images/prod-bluetooth.png'
import prodAirdot from '../assets/images/prod-airdot.png'
import prodShoes from '../assets/images/prod-shoes.png'
import prodTshirt from '../assets/images/prod-tshirt.png'
import prodSmartwatch from '../assets/images/prod-smartwatch.png'
import prodGirlstop from '../assets/images/prod-girlstop.png'

export const productAnalyticsSummary = {
  totalProduct: {
    title: 'Total Product',
    value: '5,00,874',
    badge: '+1400 New Added',
    waveColor: '#4385F5',
    iconBg: '#E8F1FD'
  },
  totalSales: {
    title: 'Total Sales',
    value: '2,34,888',
    badge: '+1000 Sales Today',
    waveColor: '#FFBB54',
    iconBg: '#FEF6E6'
  }
}

export const productAddByMonth = [
  { month: 'Jan', value: 23400, color: '#FF764C', display: '23,400' },
  { month: 'Feb', value: 15000, color: '#4385F5', display: '15,000' },
  { month: 'Mar', value: 30000, color: '#FF764C', display: '30,000' },
  { month: 'Apr', value: 22000, color: '#4385F5', display: '22,000' },
  { month: 'May', value: 10000, color: '#4385F5', display: '10,000' },
  { month: 'Jun', value: 23400, color: '#FF764C', display: '23,400' },
  { month: 'Jul', value: 5000, color: '#4385F5', display: '5,000' }
]

export const productTopSellingList = [
  {
    sn: 1,
    isMedal: true,
    medalIcon: medalOrange,
    name: 'Blutooth Devices',
    image: prodBluetooth,
    price: '$10',
    totalOrder: '34,666 Piece',
    totalSales: '$3,46,660'
  },
  {
    sn: 2,
    isMedal: true,
    medalIcon: medalOrange,
    name: 'Airdot',
    image: prodAirdot,
    price: '$15',
    totalOrder: '20,000 Piece',
    totalSales: '$3,00,000'
  },
  {
    sn: 3,
    isMedal: true,
    medalIcon: medalOrange,
    name: 'Shoes',
    image: prodShoes,
    price: '$10',
    totalOrder: '15,000 Piece',
    totalSales: '$1,50,000'
  },
  {
    sn: 4,
    isMedal: false,
    name: 'Kids T-Shirt',
    image: prodTshirt,
    price: '$12',
    totalOrder: '10,000 Piece',
    totalSales: '$1,20,000'
  },
  {
    sn: 5,
    isMedal: false,
    name: 'Smart Watch',
    image: prodSmartwatch,
    price: '$12',
    totalOrder: '10,000 Piece',
    totalSales: '$1,20,000'
  },
  {
    sn: 5,
    isMedal: false,
    name: 'Girls Top',
    image: prodGirlstop,
    price: '$12',
    totalOrder: '10,000 Piece',
    totalSales: '$1,20,000'
  }
]

export const productSalesAnalyticsDonut = {
  segments: [
    { label: 'Total Sales', percentage: 55, color: '#4385F5' },
    { label: 'Total Order', percentage: 25, color: '#FFBB54' },
    { label: 'Order Cancel', percentage: 20, color: '#FF764C' }
  ]
}
