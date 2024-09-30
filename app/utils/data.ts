import {
  IAdminSideBarItem,
  IBabyCard,
  IOffer,
  ISellingProduct,
  IServiceCard,
  ISocials,
  IStoreInformation,
  ItrendingProducts,
} from "../types";
import {
  atIcon,
  dashboardIcon,
  faceBookIcon,
  gradientCartIcon,
  instagramIcon,
  locationIcon,
  locatorIcon,
  orderIcon,
  phoneIcon,
  productsIcon,
  twitterIcon,
  webIcon,
  youTubeIcon,
  profileIcon,
  administratorIcon,
  videoIcon,
  couponIcon,
  settingsIcon,
  gearsIcon,
} from "./icons";

export const footerCategoriesData: string[] = [
  "Diapers and Diapering Supplies",
  "Feeding Supplies",
  "Nursery Furniture",
  "Clothing and Accessories",
  "Travel Gear",
  "Clothing and Accessories",
  "Health and Safety Products",
  "Bathing Supplies",
  "Toys and Entertainment",
  "Sleep Aids",
  "Grooming and Personal Care",
];

export const footerCompanyData: string[] = ["About us", "Careers", "Legal"];

export const footerSupportData: string[] = ["Blogs", "Help Desk", "FAQs"];

export const storeInformationData: IStoreInformation[] = [
  {
    icon: locationIcon(),
    text: "41 Yusuf Alhassan street, (By Rainbow fm) Riverview Estate, OPIC Ojodu Berger.",
  },
  {
    icon: phoneIcon(),
    text: "09069880387",
  },
  {
    text: "09152212121",
  },
  {
    text: "08183170000",
  },
  {
    text: "09081400000",
  },
  {
    icon: webIcon(),
    text: "support@babiesnstuffs.com",
  },
];

export const footerSocialIcons: ISocials[] = [
  {
    icon: instagramIcon(),
    link: "https://www.instagram.com/babiesnstuffs",
  },
  {
    icon: instagramIcon(),
    link: "https://www.instagram.com/babiesnstuffsclothings/",
  },
  {
    icon: twitterIcon(),
    link: "https://www.tiktok.com/@babiesnstuffs",
  },
  {
    icon: faceBookIcon(),
    link: "https://www.facebook.com/babiesnstuffs",
  },
];

export const serviceData: IServiceCard[] = [
  {
    title: "Easy Shopping",
    text: "Get quality goods from the US  at affordable prices.",
  },
  {
    title: "Easy Shopping",
    text: "Get quality goods from the US  at affordable prices.",
  },
  {
    title: "Easy Shopping",
    text: "Get quality goods from the US  at affordable prices.",
    bg: "linear-gradient(to right, #397F98 0%, #FFA013 100%)",
    iconBg: "#FFF",
    icon: gradientCartIcon(),
    headingColor: "#FFF",
    textColor: "#FFF",
  },
  {
    title: "Easy Shopping",
    text: "Get quality goods from the US  at affordable prices.",
  },
  {
    title: "Easy Shopping",
    text: "Get quality goods from the US  at affordable prices.",
    bg: "linear-gradient(to right, #397F98 0%, #FFA013 100%)",
    iconBg: "#FFF",
    icon: gradientCartIcon(),
    headingColor: "#FFF",
    textColor: "#FFF",
  },
];

export const trendingProducts: ItrendingProducts[] = [
  {
    img: "/assets/images/Rectangle.png",
    title: "Multipurpose Baby Carriers",
    price: "60,000",
  },
  {
    img: "/assets/images/Rectangle.png",
    title: "Multipurpose Baby Carriers",
    price: "60,000",
  },
  {
    img: "/assets/images/Rectangle.png",
    title: "Multipurpose Baby Carriers",
    price: "60,000",
  },
  {
    img: "/assets/images/Rectangle.png",
    title: "Multipurpose Baby Carriers",
    price: "60,000",
  },
  {
    img: "/assets/images/Rectangle.png",
    title: "Multipurpose Baby Carriers",
    price: "60,000",
  },
];

export const contactUsData: IStoreInformation[] = [
  {
    icon: locatorIcon(),
    text: "15th Avenue, herbert close lagos, Nigeria",
  },
  {
    icon: atIcon(),
    text: "Babiesnstuffs@hotmail.com",
  },
  {
    icon: phoneIcon("white"),
    text: "+2348075354999",
  },
];

export const SellingProductData: ISellingProduct[] = [
  {
    img: "/assets/images/cloth.png",
    title: "Baby Tops",
    price: 12000,
    slashedPrice: 10000,
    i: 1,
  },
  {
    img: "/assets/images/cloth.png",
    title: "Baby Tops",
    price: 12000,
    slashedPrice: 10000,
    i: 2,
  },
  {
    img: "/assets/images/cloth.png",
    title: "Baby Tops",
    price: 12000,
    slashedPrice: 10000,
    i: 3,
  },
  {
    img: "/assets/images/cloth.png",
    title: "Baby Tops",
    price: 12000,
    slashedPrice: 10000,
    i: 4,
  },
];

export const offerData: IOffer[] = [
  {
    img: "/assets/images/boy-offer.png",
    text: "boy",
  },
  {
    img: "/assets/images/girl-offer.png",
    text: "girl",
  },
];

export const babyCardData: IBabyCard[] = [
  {
    img: "/assets/images/baby1.png",
    text: "(0 - 6 MONTHS)",
  },
  {
    img: "/assets/images/baby2.png",
    text: "(6 - 12 MONTHS)",
  },
  {
    img: "/assets/images/baby3.png",
    text: "(12 - 18 MONTHS)",
  },
];

export const adminNavItems: IAdminSideBarItem[] = [
  {
    icon: dashboardIcon(),
    text: "Dashboard",
    link: "/admin/dashboard",
  },
  {
    icon: orderIcon(),
    text: "Orders",
    link: "/admin/orders",
  },
  {
    icon: productsIcon(),
    text: "Products",
    link: "/admin/products",
  },
  {
    icon: videoIcon(),
    text: "Video",
    link: "/admin/video",
  },
  {
    icon: profileIcon(),
    text: "Customers",
    link: "/admin/customers",
  },
  {
    icon: couponIcon(),
    text: "Coupons",
    link: "/admin/coupons",
  },
  {
    icon: administratorIcon(),
    text: "Administrator",
    link: "/admin/administrator",
  },
  {
    icon: gearsIcon(),
    text: "Settings",
    link: "/admin/settings",
  },
  {
    icon: productsIcon(),
    text: "Categories",
    link: "/admin/product-category",
  },
];

export const homeNavItems: IAdminSideBarItem[] = [
  {
    icon: dashboardIcon(),
    text: "Home",
    link: "/",
  },
  {
    icon: orderIcon(),
    text: "Shop",
    link: "/shop",
  },
  {
    icon: videoIcon(),
    text: "Videos",
    link: "/videos",
  },
  {
    icon: phoneIcon(),
    text: "Contact Us",
    link: "/contact-us",
  },
];
