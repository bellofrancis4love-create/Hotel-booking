import logo from "./logo.png";
import searchIcon from "./searchIcon.png";
import menu from "./menu.png";
import closee from "./closee.png";
import calendar from "./calendar.png";
import star from "./star.png";
import map from "./map.png";
import right_arrow from "./right_arrow.png";
import arrowRight from "./arrowRight.png";
import TropicaaalImg from "./TropicaaalImg.jpg";
import PinkBeach from "./PinkBeach.jpg";
import LuxuryRetreat from "./LuxuryRetreat.jpg";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import facebook from "./facebook.png";
import linkedin from "./linkedin.png";
import room_service from "./room_service.png";
import wifi from "./wifi.png";
import swim from "./swim.png";
import mountain from "./mountain.png";
import breakfast from "./breakfast.png";
import tourist from "./tourist.png";
import maldives from "./maldives.jpg";
import dashboard from "./dashboard.png";
import bedroom from "./bedroom.png";
import room from "./room.png";
import booking from "./booking.png";
import bookin from "./bookin.png";
import salary from "./salary.png";
import Roomss from "./Roomss.png"

export const assets = {
  logo,
  searchIcon,
  menu,
  closee,
  calendar,
  star,
  map,
  right_arrow,
  arrowRight,
  TropicaaalImg,
  PinkBeach,
  LuxuryRetreat,
  instagram,
  twitter,
  facebook,
  linkedin,
  tourist,
  maldives,
  dashboard,
  bedroom,
  room,
  booking,
  bookin,
  salary,
  Roomss,

};

export const cities = [
  "Paris",
  "Tokyo",
  "London",
  "Lagos",
  "New York",
  "Dubai",
];

export const roomsDummyData = [
  {
    _id: "1",
    roomType: "Luxury Room",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    ],
    hotel: {
      name: "Ocean View Suite",
      address: "Maldives",
      city: "Maldives",
      owner: {
        name: "Daniel Carter",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 350,
    rating: 4.9,
    reviews: 128,
    amenities: ["Room Service", "Free WiFi", "Swimming Pool", "Breakfast"],
  },

  {
    _id: "2",
    roomType: "Family Suite",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    ],
    hotel: {
      name: "Mountain Retreat",
      address: "Swiss Alps",
      city: "Swiss Alps",
      owner: {
        name: "Michael Anderson",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228d2f?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 280,
    rating: 4.7,
    reviews: 85,
    amenities: ["Free WiFi", "Mountain View", "Breakfast"],
  },

  {
    _id: "3",
    roomType: "Double Bed",
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=800&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
    ],
    hotel: {
      name: "City Luxury Room",
      address: "Dubai",
      city: "Dubai",
      owner: {
        name: "James Wilson",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 420,
    rating: 4.8,
    reviews: 210,
    amenities: ["Room Service", "Free WiFi", "Breakfast"],
  },

  {
    _id: "4",
    roomType: "Luxury Room",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    ],
    hotel: {
      name: "Desert Oasis Villa",
      address: "Morocco",
      city: "Morocco",
      owner: {
        name: "Robert Miller",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 310,
    rating: 4.8,
    reviews: 92,
    amenities: ["Room Service", "Swimming Pool", "Free WiFi", "Breakfast"],
  },

  {
    _id: "5",
    roomType: "Family Suite",
    images: [
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    ],
    hotel: {
      name: "Lakeside Cabin",
      address: "Canada",
      city: "Canada",
      owner: {
        name: "Thomas Brown",
        image:
          "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 220,
    rating: 4.5,
    reviews: 47,
    amenities: ["Free WiFi", "Mountain View", "Breakfast"],
  },

  {
    _id: "6",
    roomType: "Luxury Room",
    images: [
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    ],
    hotel: {
      name: "Royal Palace Hotel",
      address: "Paris, France",
      city: "Paris",
      owner: {
        name: "William Davis",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 390,
    rating: 4.9,
    reviews: 176,
    amenities: ["Room Service", "Free WiFi", "Swimming Pool", "Breakfast"],
  },

  {
    _id: "7",
    roomType: "Family Suite",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=800&q=80",
      "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800&q=80",
    ],
    hotel: {
      name: "Grand Resort",
      address: "Santorini, Greece",
      city: "Santorini",
      owner: {
        name: "George Taylor",
        image:
          "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 450,
    rating: 4.8,
    reviews: 143,
    amenities: ["Room Service", "Swimming Pool", "Free WiFi", "Breakfast"],
  },

  {
    _id: "8",
    roomType: "Double Bed",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    ],
    hotel: {
      name: "Luxury Garden Hotel",
      address: "London, UK",
      city: "London",
      owner: {
        name: "Henry Moore",
        image:
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 270,
    rating: 4.6,
    reviews: 98,
    amenities: ["Room Service", "Free WiFi", "Breakfast"],
  },

  {
    _id: "9",
    roomType: "Luxury Room",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    ],
    hotel: {
      name: "Palm Beach Resort",
      address: "Miami, USA",
      city: "Miami",
      owner: {
        name: "Charles Jackson",
        image:
          "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 330,
    rating: 4.7,
    reviews: 121,
    amenities: ["Swimming Pool", "Free WiFi", "Room Service", "Breakfast"],
  },

  {
    _id: "10",
    roomType: "Double Bed",
    images: [
      "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    ],
    hotel: {
      name: "Skyline Hotel",
      address: "New York, USA",
      city: "New York",
      owner: {
        name: "Christopher White",
        image:
          "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 410,
    rating: 4.8,
    reviews: 256,
    amenities: ["Room Service", "Free WiFi", "Breakfast"],
  },

  {
    _id: "11",
    roomType: "Single Bed",
    images: [
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=800&q=80",
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=800&q=80",
    ],
    hotel: {
      name: "Forest Escape Lodge",
      address: "Vancouver, Canada",
      city: "Vancouver",
      owner: {
        name: "Matthew Harris",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228d2f?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 240,
    rating: 4.6,
    reviews: 73,
    amenities: ["Free WiFi", "Mountain View", "Breakfast"],
  },

  {
    _id: "12",
    roomType: "Luxury Room",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    ],
    hotel: {
      name: "Royal Palm Hotel",
      address: "Abuja, Nigeria",
      city: "Abuja",
      owner: {
        name: "Andrew Martin",
        image:
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 180,
    rating: 4.5,
    reviews: 61,
    amenities: ["Room Service", "Free WiFi", "Swimming Pool", "Breakfast"],
  },

  {
    _id: "13",
    roomType: "Double Bed",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    ],
    hotel: {
      name: "Victoria Island Resort",
      address: "Lagos, Nigeria",
      city: "Lagos",
      owner: {
        name: "Benjamin Thompson",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 210,
    rating: 4.7,
    reviews: 89,
    amenities: ["Room Service", "Free WiFi", "Swimming Pool", "Breakfast"],
  },

  {
    _id: "14",
    roomType: "Single Bed",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    ],
    hotel: {
      name: "Golden Sands Hotel",
      address: "Accra, Ghana",
      city: "Accra",
      owner: {
        name: "David Robinson",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 160,
    rating: 4.4,
    reviews: 54,
    amenities: ["Free WiFi", "Swimming Pool", "Breakfast"],
  },

  {
    _id: "15",
    roomType: "Family Suite",
    images: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80",
    ],
    hotel: {
      name: "Safari Lodge",
      address: "Nairobi, Kenya",
      city: "Nairobi",
      owner: {
        name: "Joseph Lewis",
        image:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 195,
    rating: 4.6,
    reviews: 77,
    amenities: ["Room Service", "Free WiFi", "Mountain View", "Breakfast"],
  },

  {
    _id: "16",
    roomType: "Luxury Room",
    images: [
      "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
    ],
    hotel: {
      name: "Emerald Resort",
      address: "Cape Town, South Africa",
      city: "Cape Town",
      owner: {
        name: "Daniel Williams",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228d2f?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 260,
    rating: 4.8,
    reviews: 134,
    amenities: ["Room Service", "Swimming Pool", "Free WiFi", "Mountain View"],
  },

  {
    _id: "17",
    roomType: "Double Bed",
    images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=800&q=80",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=800&q=80",
    ],
    hotel: {
      name: "Sunset Bay Hotel",
      address: "Barcelona, Spain",
      city: "Barcelona",
      owner: {
        name: "Richard Walker",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 295,
    rating: 4.7,
    reviews: 112,
    amenities: ["Room Service", "Swimming Pool", "Free WiFi", "Breakfast"],
  },

  {
    _id: "18",
    roomType: "Luxury Room",
    images: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    ],
    hotel: {
      name: "Royal Garden Resort",
      address: "Tokyo, Japan",
      city: "Tokyo",
      owner: {
        name: "Steven Hall",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 375,
    rating: 4.9,
    reviews: 189,
    amenities: ["Room Service", "Free WiFi", "Swimming Pool", "Breakfast"],
  },

  {
    _id: "19",
    roomType: "Family Suite",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800&q=80",
    ],
    hotel: {
      name: "Ocean Breeze Hotel",
      address: "Sydney, Australia",
      city: "Sydney",
      owner: {
        name: "Paul Young",
        image:
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 320,
    rating: 4.7,
    reviews: 103,
    amenities: ["Room Service", "Free WiFi", "Swimming Pool", "Breakfast"],
  },

  {
    _id: "20",
    roomType: "Luxury Room",
    images: [
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    ],
    hotel: {
      name: "Crystal Palace Resort",
      address: "Singapore",
      city: "Singapore",
      owner: {
        name: "Mark King",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      },
    },
    pricePerNight: 430,
    rating: 4.9,
    reviews: 221,
    amenities: ["Room Service", "Free WiFi", "Swimming Pool", "Breakfast"],
  },
];
export const exclusiveOffers = [
  {
    _id: "1",
    title: "Summer Escape Package",
    description: "Enjoy a complimentary night and daily breakfast",
    image: LuxuryRetreat,
    discount: "25% OFF",
    expires: "Oct 31",
  },

  {
    _id: "2",
    title: "Summer Escape Package",
    description: "Enjoy a complimentary night and daily breakfast",
    image: TropicaaalImg,
    discount: "25% OFF",
    expires: "Aug 31",
  },
  {
    _id: "3",
    title: "Summer Escape Package",
    description: "Enjoy a complimentary night and daily breakfast",
    image: PinkBeach,
    discount: "15% OFF",
    expires: "Sept 31",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    review:
      "Before working with this team, our project was stalled and our team was frustrated. Within three weeks, they not only untangled our workflow but introduced systems we didn't even know we needed. Our productivity jumped 40%, but more importantly, people actually enjoy the process now.",
    address: "San Francisco, CA",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    review:
      "We hired them for a website redesign, expecting just a visual refresh. What we got was a complete strategic overhaul. Conversion rates climbed from 2.1% to 6.8% in the first quarter alone. They asked hard questions, pushed back when our ideas didn't serve our users, and delivered two weeks ahead of schedule.",
    address: "Austin, TX",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    review:
      "I'll be honest — I was skeptical. We'd been burned by agencies before who overpromised and underdelivered. But from the first call, the difference was obvious. No jargon, no vague timelines, just clear communication and genuine problem-solving. They treated our budget like it was their own.",
    address: "Miami, FL",
  },
];

export const facilityIcons = {
  "Room Service": room_service,
  "Free WiFi": wifi,
  "Swimming Pool": swim,
  "Mountain View": mountain,
  Breakfast: breakfast,
};

export const amenities = [
  "Room Service",
  "Free WiFi",
  "Swimming Pool",
  "Mountain View",
  "Breakfast",
];

export const roomCommonData = [
  {
    icon: room_service,
    title: "Room Service",
    description: "Enjoy 24/7 room service during your stay.",
  },
  {
    icon: wifi,
    title: "Free WiFi",
    description: "Stay connected with complimentary high-speed WiFi.",
  },
  {
    icon: swim,
    title: "Swimming Pool",
    description: "Relax and enjoy access to our swimming pool.",
  },
  {
    icon: breakfast,
    title: "Breakfast",
    description: "Start your day with a delicious complimentary breakfast.",
  },
];
export const userBookingsDummyData = [
  {
    _id: "booking_1",
    room: roomsDummyData[0],

    checkInDate: "2026-09-10",
    checkInTime: "14:00",

    checkOutDate: "2026-09-13",
    checkOutTime: "11:00",

    guests: 2,

    paymentStatus: "Paid",
    totalAmount: 1050,
  },

  {
    _id: "booking_2",
    room: roomsDummyData[5],

    checkInDate: "2026-09-20",
    checkInTime: "14:00",

    checkOutDate: "2026-09-23",
    checkOutTime: "11:00",

    guests: 3,

    paymentStatus: "Pending",
    totalAmount: 1170,
  },

  {
    _id: "booking_3",
    room: roomsDummyData[11],

    checkInDate: "2026-10-05",
    checkInTime: "14:00",

    checkOutDate: "2026-10-08",
    checkOutTime: "11:00",

    guests: 4,

    paymentStatus: "Pending",
    totalAmount: 1500,
  },
];

export const dashboardDummyData = {
  totalBookings: 3,
  totalRevenue: 3720,
  totalRooms: 20,

  recentBookings: [
    {
      _id: 'booking_1',
      room: roomsDummyData[0],
      guestName: 'John Doe',
      totalAmount: 1050,
      paymentStatus: 'Paid',
    },

    {
      _id: 'booking_2',
      room: roomsDummyData[5],
      guestName: 'Sarah Williams',
      totalAmount: 1170,
      paymentStatus: 'Pending',
    },

    {
      _id: 'booking_3',
      room: roomsDummyData[11],
      guestName: 'Michael Johnson',
      totalAmount: 1500,
      paymentStatus: 'Pending',
    },
  ],
}