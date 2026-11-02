import cameraImg from '../assets/images/product-camera.png'
import dressImg from '../assets/images/product-dress.png'
import arganImg from '../assets/images/product-argan.png'
import parfumImg from '../assets/images/product-parfum.png'
import nikeImg from '../assets/images/nike-shoe.png'
import iphoneImg from '../assets/images/iphone-12.png'

export const statCardsData = [
  {
    id: 'save-products',
    title: 'Save Products',
    value: '178+',
    icon: 'heart',
    iconBg: '#E8F1FD',
    iconColor: '#4379EE'
  },
  {
    id: 'stock-products',
    title: 'Stock Products',
    value: '20+',
    icon: 'box',
    iconBg: '#FEF6E6',
    iconColor: '#FFBB54'
  },
  {
    id: 'sales-products',
    title: 'Sales Products',
    value: '190+',
    icon: 'bag',
    iconBg: '#FEEFEA',
    iconColor: '#FF764C'
  },
  {
    id: 'job-application',
    title: 'Job Application',
    value: '12+',
    icon: 'briefcase',
    iconBg: '#EFEBFD',
    iconColor: '#7F56D9'
  }
]

export const reportsChartData = [
  { time: '10am', value: 52 },
  { time: '11am', value: 30 },
  { time: '12am', value: 56 },
  { time: '01am', value: 40 },
  { time: '02am', value: 26 },
  { time: '03am', value: 49, sales: '2,678', isTooltip: true },
  { time: '04am', value: 16 },
  { time: '05am', value: 36 },
  { time: '06am', value: 68 },
  { time: '07am', value: 72 }
]

export const analyticsData = {
  percentage: '80%',
  label: 'Transactions',
  segments: [
    { label: 'Sale', percentage: 55, color: '#4385F5' },
    { label: 'Distribute', percentage: 25, color: '#FFBB54' },
    { label: 'Return', percentage: 20, color: '#FF764C' }
  ]
}

export const recentOrdersData = [
  {
    id: '#876364',
    name: 'Camera Lens',
    image: cameraImg,
    price: '$178',
    totalOrder: 325,
    totalAmount: '$1,46,660'
  },
  {
    id: '#876368',
    name: 'Black Sleep Dress',
    image: dressImg,
    price: '$14',
    totalOrder: 53,
    totalAmount: '$46,660'
  },
  {
    id: '#876412',
    name: 'Argan Oil',
    image: arganImg,
    price: '$21',
    totalOrder: 78,
    totalAmount: '$3,46,676'
  },
  {
    id: '#876621',
    name: 'EAU DE Parfum',
    image: parfumImg,
    price: '$32',
    totalOrder: 98,
    totalAmount: '$3,46,981'
  }
]

export const topSellingProductsData = [
  {
    id: 'nike-shoes',
    name: 'NIKE Shoes Black Pattern',
    image: nikeImg,
    rating: 5,
    price: '$87'
  },
  {
    id: 'iphone-12',
    name: 'iPhone 12',
    image: iphoneImg,
    rating: 5,
    price: '$987'
  }
]
