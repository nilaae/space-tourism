import moon from "./src/assets/Destination/moon.png";
import mars from "./src/assets/Destination/mars.png";
import titan from "./src/assets/Destination/titan.png";
import europa from "./src/assets/Destination/europa.png";
import anousheh from "./src/assets/Crew/anousheh-ansari.png";
import hurley from "./src/assets/Crew/douglas-hurley.png";
import mark from "./src/assets/Crew/mark-shuttleworth.png";
import victor from "./src/assets/Crew/victor-glover.png";
import spaceportDesk from "./src/assets/Technology/spaceport-portrait.jpg";
import launchVehicleDesk from "./src/assets/Technology/launch-vehicle-portrait.jpg";
import spaceCapsuleDesk from "./src/assets/Technology/space-capsule-portrait.jpg";

export const data = {
  destinations: [
    {
      id: 0,
      imgURL: moon,
      title: "MOON",
      text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      traveltime: "3 DAYS",
    },
    {
      id: 1,
      imgURL: mars,
      title: "MARS",
      text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. KM",
      traveltime: "9 MONTHS",
    },
    {
      id: 2,
      imgURL: europa,
      title: "EUROPA",
      text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. KM",
      traveltime: "3 YEARS",
    },
    {
      id: 3,
      imgURL: titan,
      title: "TITAN",
      text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!) As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. KM",
      traveltime: "7 YEARS",
    },
  ],
  crew: [
    {
      id: 0,
      imgURL: anousheh,
      job: "FLIGHT ENGINEER",
      fullname: "ANOUSHEH ANSARI",
      text: `Anousheh Ansari is an Iranian American engineer and co-founder of
      Prodea Systems. Ansari was the fourth self-funded space tourist,
      the first self-funded woman to fly to the ISS, and the first
      Iranian in space.`,
    },
    {
      id: 1,
      imgURL: mark,
      job: "MISSION SPECIALIST",
      fullname: "MARK SHUTTLEWORTH",
      text: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the
      company behind the Linux-based Ubuntu operating system.
      Shuttleworth became the first South African to travel to space as
      a space tourist.`,
    },
    {
      id: 2,
      imgURL: victor,
      job: "PILOT",
      fullname: "VICTOR GLOVER",
      text: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the
      company behind the Linux-based Ubuntu operating system.
      Shuttleworth became the first South African to travel to space as
      a space tourist.`,
    },
    {
      id: 3,
      imgURL: hurley,
      job: "COMMANDER",
      fullname: "DOUGLAS HURLEY",
      text: `Douglas Gerald Hurley is an American engineer, former Marine Corps
    pilot and former NASA astronaut. He launched into space for the
    third time as commander of Crew Dragon Demo-2.`,
    },
  ],
  teches: [
    {
      id: 0,
      header: "LAUNCH VEHICLE",
      imgURL: launchVehicleDesk,
      text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      id: 1,
      header: "SPACEPORT",
      imgURL: spaceportDesk,
      text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      id: 2,
      header: "SPACE CAPSULE",
      imgURL: spaceCapsuleDesk,
      text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ],
};
