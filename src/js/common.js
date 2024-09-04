import { create_profile } from "./components/profile"
import { profile } from "../../data/db.json"
/* NavBar */
export const navbar = document.querySelector('nav');
export const navbar_container = navbar.querySelector('.container');
export const navbar_container_logo = navbar_container.querySelector('.logo');
export const navbar_container_searchBar = navbar_container.querySelector('.search-bar');
export const navbar_container_create = navbar_container.querySelector('.create');
export const navbar_container_img = navbar_container.querySelector('img');

/* Main */
export const main = document.querySelector('main');
export const main_container = main.querySelector('.container');


/* Main Left */
export const main_left = main_container.querySelector('.main_left');
export const main_left_profile = create_profile(profile.img_src, profile.name, profile.at);


/* Main Middle */


/* Create News */


/* Create Profile */


/* Create Picture */


/* Create Control */


/* Create Comment */


/* Main Right */