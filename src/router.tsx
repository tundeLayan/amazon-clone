import { Home, Checkout, Login, Payment, Orders } from "./pages";

export interface IRoute {
  path: string;
  component: any;
  requiresAuth: boolean;
}

export const routerObject: IRoute[] = [
  {
    path: "/",
    component: Home,
    requiresAuth: false
  },
  {
    path: "/checkout",
    component: Checkout,
    requiresAuth: false
  },
  {
    path: "/login",
    component: Login,
    requiresAuth: false
  },
  {
    path: "/payment",
    component: Payment,
    requiresAuth: false
  },
  {
    path: "/orders",
    component: Orders,
    requiresAuth: false
  }
];
