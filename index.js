import "./index.css"
// import { cards, message, request, profile, highline } from "@/js/database"

import { profile } from "./data/db.json"

import {
  navbar_container_logo,
  navbar_container_img,
  main_left,
  main_left_profile,
} from "./src/js/common.js"
/* NAV */
navbar_container_logo.textContent = "Top coder";
navbar_container_img.src = profile.img_src
/* LEFT */
main_left.appendChild(main_left_profile)

/* MIDDLE */

/* FORM */

/* HIGHLINE */

/* CARD */

/* Message */

/* Request */
