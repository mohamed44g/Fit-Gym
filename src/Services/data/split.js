//push
import dumblle_press from "../../assets/images/excersies/Bench/Dumbbell-Press.gif";
import incline_press from "../../assets/images/excersies/Bench/dumbbell-incline-chest-press.gif";
import fly from "../../assets/images/excersies/Bench/Pec-Deck-Fly.gif";
import dbs from "../../assets/images/excersies/Bench/Chest-Dips.gif";
import sholder_press from "../../assets/images/excersies/Shoulder/Dumbbell-Shoulder-Press.gif";
import shoulder_rais from "../../assets/images/excersies/Shoulder/Leaning-Cable-Lateral-Raise.gif";
import tricepe_pushdown from "../../assets/images/excersies/triceps/One-arm-triceps-pushdown.gif";
import tricepe_overhead from "../../assets/images/excersies/triceps/Cable-One-Arm-Overhead-Triceps-Extension.gif";

//pull
import lat_pull_down from "../../assets/images/excersies/Back/Lat-Pulldown.gif";
import lat from "../../assets/images/excersies/Back/Seated-Row-Machine.gif";
import t_bar from "../../assets/images/excersies/Back/Seated-Cable-Row.gif";
import dead_left from "../../assets/images/excersies/Back/Barbell-Deadlift.gif";
import wing from "../../assets/images/excersies/Back/Kneeling-Single-Arm-High-Pulley-Row.gif";
import band_apart from "../../assets/images/excersies/Shoulder/Band-pull-apart.gif";
import burble_shrugs from "../../assets/images/excersies/Shoulder/Barbell-Shrug.gif";
import concentration_curl from "../../assets/images/excersies/Beiceps/Concentration-Curl.gif";
import z_bar_curl from "../../assets/images/excersies/Beiceps/Z-Bar-Curl.gif";
import Hammer from "../../assets/images/excersies/Beiceps/Hammer-Curl.gif";
import front_raise from "../../assets/images/excersies/Shoulder/Alternating-Dumbbell-Front-Raise.gif";
import side_raise from "../../assets/images/excersies/Shoulder/Dumbbell-Lateral-Raise.gif";
import cable_row from "../../assets/images/excersies/Shoulder/Half-Kneeling-High-Cable-Row-Rope.gif";

//legs
import leg_ex from "../../assets/images/excersies/Leg/LEG-EXTENSION.gif";
import squat from "../../assets/images/excersies/Leg/BARBELL-SQUAT.gif";
import leg_press from "../../assets/images/excersies/Leg/Leg-Press.gif";
import leg_curl from "../../assets/images/excersies/Leg/Seated-Leg-Curl.gif";
import calf from "../../assets/images/excersies/Leg/Hack-Squat-Calf-Raise.gif";
import forarm1 from "../../assets/images/excersies/Beiceps/Barbell-Reverse-Wrist-Curl.gif";
import forarm2 from "../../assets/images/excersies/Beiceps/Behind-The-Back-Barbell-Wrist-Curl.gif";

const split = [
  [
    //day 1
    { id: 1, name: "1- Dumbbell Press", img: dumblle_press },
    { id: 2, name: "2- Incline Press", img: incline_press },
    { id: 3, name: "3- Machine Fly", img: fly },
    { id: 4, name: "4- Pench Dbs", img: dbs },
    { id: 5, name: "5- One Arm Pushdown", img: tricepe_pushdown },
    { id: 6, name: "6- One Arm Overhead", img: tricepe_overhead },
  ],

  [
    //day 2
    { id: 1, name: "1- Lat Pulldown", img: lat_pull_down },
    { id: 2, name: "2- Seated Row Machine", img: lat },
    { id: 3, name: "3- Seated Cable Row", img: t_bar },
    { id: 4, name: "4- Single Arm High Row", img: wing },
    { id: 5, name: "5- Barbell Deadlift", img: dead_left },
    { id: 6, name: "6- Concentration Curl", img: concentration_curl },
    { id: 7, name: "7- Z Bar Curl", img: z_bar_curl },
    { id: 8, name: "8- Hammer Curl", img: Hammer },
  ],

  [
    //day 4
    { id: 1, name: "1- Shoulder Press", img: sholder_press },
    { id: 2, name: "2- Band pull apart", img: front_raise },
    { id: 3, name: "3- Lateral Raise", img: side_raise },
    { id: 4, name: "4- Cable Lateral Raise", img: shoulder_rais },
    { id: 5, name: "5- Cable High Row", img: cable_row },
    { id: 6, name: "6- Band pull apart", img: band_apart },
    { id: 7, name: "7- Barbell Shrug", img: burble_shrugs },
  ],

  [
    //day 3
    { id: 1, name: "1- Leg Extension", img: leg_ex },
    { id: 2, name: "2- Barbell Squat", img: squat },
    { id: 3, name: "3- Leg Press", img: leg_press },
    { id: 4, name: "4- Seated Leg Curl", img: leg_curl },
    { id: 5, name: "5- Squat Calf Raise", img: calf },
    { id: 6, name: "6- Barbell Reverse Curl", img: forarm1 },
    { id: 7, name: "7- Behind Barbell Curl", img: forarm2 },
  ],
];

export { split };
