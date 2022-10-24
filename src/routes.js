
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserList";
import TableList from "views/Booked";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import FavouriteCars from "./views/FavouriteCars";
import Login from "./views/Login";
import NewUser from "./views/NewUser";
import CarList from "./views/CarList";

const dashboardRoutes = [
  
  
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/cars",
    name: "Car List",
    icon: "nc-icon nc-circle-09",
    component: CarList,
    layout: "/admin",
  },
  {
    path: "/booked",
    name: "Most Booked",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/favourite",
    name: "Favourite Cars",
    icon: "nc-icon nc-notes",
    component: FavouriteCars,
    layout: "/admin",
  },
  
  {
    path: "/new-customers",
    name: "New Car",
    icon: "nc-icon nc-paper-2",
    component: NewUser,
    layout: "/admin",
  },
  
  
];

export default dashboardRoutes;
