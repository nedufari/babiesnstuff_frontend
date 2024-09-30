export interface IChildren {
  children: React.ReactNode;
}

export interface IStoreInformation {
  icon?: React.JSX.Element;
  text: string;
}
export interface ISocials {
  icon: React.JSX.Element;
  link: string;
}

export interface IYouMayLikeData {
  img: string;
  category: string;
  title: string;
  price: number;
}

export interface ISellingProduct {
  img: string;
  title: string;
  price: number;
  slashedPrice: number;
  i: number;
}

export interface ISize {
  size: string;
}
export interface IColor {
  backgroundColor: string;
}

export interface IServiceCard {
  title: string;
  text: string;
  bg?: string;
  iconBg?: string;
  icon?: React.JSX.Element;
  textColor?: string;
  headingColor?: string;
}

export interface IImageList {
  img: string;
  title: string;
  author: string;
}

export interface ItrendingProducts {
  img: string;
  title: string;
  price: string;
}

export interface IFeaturedBrands {
  img: string;
}

export interface IOffer {
  img: string;
  text: string;
}

export interface IVideoCard {
  img: string;
  title: string;
  text: string;
  linkText: string;
  link: string;
  time?: string;
}

export interface IBabyCard {
  img: string;
  text: string;
}

export interface IAdminSideBarItem {
  icon: React.JSX.Element;
  text: string;
  link: string;
}

export interface IDataTable {
  title: string;
  gridCol: any[];
  rows: any[];
  loading: boolean;
}

export interface RootState {
  auth: {
    token: string | null;
    signUpUserEmail: string | null;
  };
}

export interface IDecoded {
  email: string;
  exp: Date;
  iat: any;
  role: string;
  sub: number;
  fullname: string;
}

export interface IOpenCreateCoupon {
  open: boolean;
  setOpen: any;
}

export interface ISetSignUp {
  setsignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IProductCategory {
  id: number;
  name: string;
  description: string;
  createdAT: Date;
  updatedAT: null | Date;
  products: IProduct[];
}

export interface IAllProductCategoriesResponse {
  success: boolean;
  message: string;
  payload: {
    categories: [IProductCategory[], number];
  };
}
export interface IProduct {
  id: number;
  name: string;
  description: string;
  createdAT: Date;
  updatedAT: null | Date;
  productID: string;
  price: string;
  wholesalePrice: string;
  minWholesaleQuantity: number;
  hasTax: boolean;
  taxRate: string;
  productImages: string[];
  stock: number;
  restockedAT: Date | null;
  stockAdjustedAT: Date | null;
  availability: string;
  isOutOfStock: boolean;
  available_colors: string | null;
  available_sizes: string | null;
  purchaseCount: number;
  video: [];
  category: IProductCategory;
  favourites: IFavorite[];
}

export interface IAllProductResponse {
  success: boolean;
  message: string;
  payload: {
    products: [IProduct[], number];
  };
}

export interface ISingleProductResponse {
  success: boolean;
  message: string;
  payload: {
    products: IProduct;
  };
}

export interface IMobileNav {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDrawer: any;
}

export interface ICartItem {
  id: string;
  quantity: number;
  price: string;
  color: null | string;
  sizes: null | string;
  addedAT: Date;
  product: IProduct;
}

export interface IUser {
  id: number;
  userID: string;
  email: string;
  role: "user" | "admin";
  DOB: Date | null;
  age: null | number;
  password: string;
  mobile: string;
  fullname: string;
  cityOfResidence: null | string;
  UpdatedAt: Date | null;
  RegisteredAt: Date;
  home_address: null | string;
  profile_picture: null | string;
  LGA_of_Home_Address: null | string;
  gender: null | string;
  Nationality: null | string;
  totalRevenue: string;
  isLoggedIn: boolean;
  isRegistered: boolean;
  isVerified: boolean;
  reset_link_exptime: Date | null;
  password_reset_link: null | string;
  carts: [
    {
      id: 2;
      isCheckedOut: false;
    }
  ];
  favourites: IFavorite[];
  registries: IRegistry[];
}

export interface IFavorite {
  id: number;
  createdAt: Date;
  product: IProduct;
}

export interface IFetchCartResponse {
  success: boolean;
  message: string;
  payload: {
    id: number;
    isCheckedOut: boolean;
    user: IUser;
    items: ICartItem[];
    itemCount: number;
  };
}

export interface ICheckoutCartResponse {
  success: boolean;
  message: string;
  payload: {
    order: ICreateOrderResponse;
  };
}

export interface ICreateOrderResponse {
  success: boolean;
  message: string;
  payload: { order: IOrder };
}

export interface IOrderItem {
  product: IProduct;
  quantity: number;
  price: string;
  id: number;
}

export interface IOrder {
  orderID: string;
  subTotal: number;
  shippinFee: string;
  total: number;
  isPaid: boolean;
  createdAT: Date;
  trackingID: string;
  status: "processing" | "shipped" | "delivered";
  vat: number;
  user: IUser;
  items: IOrderItem[];
  name: null | string;
  mobile: null | string;
  billing_address: null | string;
  email: null | string;
  region: null | string;
  city: null | string;
  additional_mobile: null | string;
  additional_information: null | string;
  discount: null | string;
  IsCouponCodeApplied: boolean;
  orderType: null | "door_delivery" | "pick_up";
  paymentMethod: null | Date;
  updatedAT: null | Date;
  id: number;
}

export interface IVideo {
  id: number;
  title: null | string;
  description: string;
  duration: null;
  videoType: null;
  videofiles: string[];
  thumbnailUrls: string[];
  createdAT: Date;
  product: IProduct;
}

export interface IAllVideosResponse {
  success: boolean;
  message: string;
  payload: {
    videos: [IVideo[], number];
  };
}

export interface IGetMyRegistryResponse {
  success: boolean;
  message: string;
  payload: {
    registry: IRegistry;
  };
}

export interface IRegistry {
  id: number;
  RegistryID: string;
  name: string;
  description: string;
  uniqueUrl: string;
  createdAt: Date;
  items: IRegistryItem[];
}

export interface ILineChartColor {
  color1: string;
  color2: string;
}

export interface IAllUsersResponse {
  success: boolean;
  message: string;
  payload: {
    users: [IUser[], number];
  };
}

export interface IGetAllOrdersResponse {
  success: boolean;
  message: string;
  payload: {
    orders: [IOrder[], number];
  };
}

export interface IRegistryItem {
  id: string;
  quantity: number;
  purchasedQuantity: number;
  cost: string;
  price: string;
  isPaidfor: boolean;
  paidForBy: null | any;
  paidForAt: null | any;
  paymentMethod: null | any;
  isSelected: null | any;
  product: IProduct;
}

export interface ICartItemAndRefetch extends ICartItem {
  refetch: any;
}

export interface IGetAllProductsSearchResponse {
  success: boolean;
  message: string;
  payload: {
    data: IProduct[];
    total: number;
  };
}

export interface IGetOneProductCategoryWithProducts {
  success: boolean;
  message: string;
  payload: {
    categories: [IProductCategory[], number];
  };
}
export interface IGetGuestFetchBabyRegistry {
  success: boolean;
  message: string;
  payload: {
    paidItems: IRegistryItem[];
  };
}

export interface IRegistryItemAndChecked extends IRegistryItem {
  checked: boolean;
}

export interface IUserProfileResponse {
  success: boolean;
  message: string;
  payload: {
    user: IUser;
  };
}

export interface IAllFavoriteResponse {
  success: boolean;
  message: string;
  payload: {
    fav: [IFavorite[], number];
  };
}
