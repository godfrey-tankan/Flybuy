const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/airfly.jpg",
    name: "AirFly SE White - Bluetooth transmitter",
    rating: {
      stars: 4.5,
      count: 870
    },
    priceCents: 3499,
    keywords: [
      "bluetooth",
      "transmitter",
      "headphones",
      "wireless",
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/fan.png",
    name: "atomberg Efficio 900mm BLDC Motor 5 Star Rated Classic Fan Ceiling Fans with Remote Control | High Air Delivery Fan with LED Indicators | ",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 11788,
    keywords: [
      "fan",
      "cooling",
      "summer",
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/airpods.jpeg",
    name: "Apple AirPods with Charging Case (Wired)",
    rating: {
      stars: 5.0,
      count: 5610
    },
    priceCents: 21999,
    keywords: [
      "airpods",
      "apple",
      "earphones",
      "wireless",
    ],
    type: "accessories",
    sizeChartLink: "images/accessories-size-chart.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/gaming-ryzen.jpg",
    name: "AMD Ryzen 9 7950X3D",
    rating: {
      stars: 4.2,
      count: 597
    },
    priceCents: 63700,
    keywords: [
      "gaming",
      "processor",
      "cpu",
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/S23-ultra.jpeg",
    name: "Galaxy S23 Ultra - 8GB RAM + 256GB storage",
    rating: {
      stars: 4,
      count: 8202
    },
    priceCents: 119900,
    keywords: [
      "samsung",
      "s23",
      "mobile",
      "smartphone",
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/powe-bank.webp",
    name: "Mi 10000mAH Li-Polymer Power Bank 3i with 18W Fast Charging",
    rating: {
      stars: 3.5,
      count: 105
    },
    priceCents: 5499,
    keywords: [
      "powerbank",
      "charger",
      "mobile",
      "smartphone",
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/mac.jpg",
    name: "M2 MacBook Pro 13-inch | 8GB RAM 256GB SSD",
    rating: {
      stars: 4.0,
      count: 3117
    },
    priceCents: 119900,
    keywords: [
      "macbook",
      "apple",
      "laptop",
      "computer",
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/mouse.jpeg",
    name: "Logitech M235 Wireless Mouse for Windows and Mac with 2.4 GHz Wireless Technology",
    rating: {
      stars: 3.5,
      count: 144
    },
    priceCents: 3599,
    keywords: [
      "mouse",
      "logitech",
      "computer",
      "wireless",
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/playstation.png",
    name: "PlayStation 5 Slim Console with Extra DualSense Wireless Controller",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 50000,
    keywords: [
      "playstation",
      "gaming",
      "console",
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/laptop-battery.png",
    name: "Dell 40Whr 4-Cell Primary Lithium-Ion Battery",
    rating: {
      stars: 3.5,
      count: 289
    },
    priceCents: 11874,
    keywords: [
      "battery",
      "dell battery",
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/monitor.jpeg",
    name: "UltraSharp 27 4K USB-C Monitor: U2720Q",
    rating: {
      stars: 4.5,
      count: 2350
    },
    priceCents: 20270,
    keywords: [
      "monitor",
      "external monitor",
    ],
    type: "accessories",
    sizeChartLink: "images/monitor.jpeg"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/heads.png",
    name: "Beats QuietComfort 35 Wireless Bluetooth Headphones",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 6560,
    keywords: [
      "headphones",
      "bose",
      "wireless",
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/Xbox-One-S-500GB-Console.jpg",
    name: "Xbox One S 500GB Console",
    rating: {
      stars: 4.5,
      count: 5621
    },
    priceCents: 49900,
    keywords: [
      "xbox 1",
      "gaming",
      "console",
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/speaker.jpg",
    name: "JBL Round 3 Stealth Waterproof Portable Bluetooth Speaker",
    rating: {
      stars: 4.5,
      count: 621
    },
    priceCents: 9599,
    keywords: [
      "speaker",
      "bluetooth speaker",
      "wireless",
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/bedroom-clock.jpg",
    name: "Digital Alarm Clock with Large 6.5\" LED Display",
    rating: {
      stars: 2.5,
      count: 160
    },
    priceCents: 11000,
    keywords: [
      "clock",
      "alarm clock",
      "bedroom",
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/canon-pr.png",
    name: "Canon MAXIFY GX7040 4-in-1",
    rating: {
      stars: 4.5,
      count: 15246
    },
    priceCents: 93700,
    keywords: [
      "printer",
      "canon",
      "office",
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/keyboard-for-games.jpg",
    name: "SteelSeries Apex Pro TKL Wireless Gaming keyboard (2023)",
    rating: {
      stars: 2.5,
      count: 99
    },
    priceCents: 2374,
    keywords: [
      "keyboard",
      "gaming",
      "wireless",
    ] 
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/mouse2.jpeg",
    name: "Logitech G Pro X Superlight Wireless Gaming Mouse",
    rating: {
      stars: 4.5,
      count: 719
    },
    priceCents: 15999,
    keywords: [
      "mouse",
      "gaming",
      "wireless",
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/SONY-heads.jpg",
    name: "Sony - WH-1000XM5 Wireless Industry Leading Noise Canceling",
    rating: {
      stars: 4.5,
      count: 1000
    },
    priceCents: 39999,
    keywords: [
      "headphones",
      "sony",
      "wireless",
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/smart-watch.jpeg",
    name: "Apple Watch Ultra 2",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 79900,
    keywords: [
      "smartwatch",
      "apple",
      "watch",
    ],
    type: "accessories",
    sizeChartLink: "images/smart-watch.jpeg"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/gaming-computers.png",
    name: "GeForce RTX 4060 Ti",
    rating: {
      stars: 4.5,
      count: 1191
    },
    priceCents: 39999,
    keywords: [
      "gaming",
      "computer",
      "desktop",
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/hp_elitebook_mobile.jpg",
    name: "HP EliteBook 840 G8",
    rating: {
      stars: 5.0,
      count: 926
    },
    priceCents: 76500,
    keywords: [
      "laptop",
      "hp",
      "computer",
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/canon-printer.jpg",
    name: " Canon DCP-L2540DW 3-in-1 Mono Laser Printer. 5.0 ",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 12000,
    keywords: [
      "printer",
      "canon",
      "office",
    ],
    type: "accessories",
    sizeChartLink: "images/canon-printer.jpg"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/iphone13.jpeg",
    name: "	iPhone 13",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 79900,
    keywords: [
      "iphone13",
      "apple13",
      "smartphone",
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/mac-battery.jpg",
    name: "Apple MacBook Pro 13-inch Battery Replacement",
    rating: {
      stars: 4.0,
      count: 456
    },
    priceCents: 8999,
    keywords: [
      "battery",
      "apple",
      "macbook",
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/cp.jpg",
    name: "Canon imageRUNNER C1538iF Multifunction Printer",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 39900,
    keywords: [
      "printer",
      "canon image runner",
      "office",
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/iphone14.jpeg",
    name: "iPhone 14 | 128 GB",
    rating: {
      stars: 5.0,
      count: 90217
    },
    priceCents: 69900,
    keywords: [
      "iphone14",
      "apple14",
      "smartphone",
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/pink.jpg",
    name: "Gaming Keyboard Redragon FIZZ K617 60 Pink Mechanical Gaming keyboard",
    rating: {
      stars: 3.5,
      count: 229
    },
    priceCents: 7184,
    keywords: [
      "keyboard",
      "gaming",
      "wireless",
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/rj45.jpg",
    name: "Amazon.com: DanYee Cat 8 Ethernet Cable, Nylon Braided 10ft High Speed Network Cable LAN",
    rating: {
      stars: 3.5,
      count: 424
    },
    priceCents: 990,
    keywords: [
      "ethernet",
      "cable",
      "wireless",
    ]
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/g-motherboard.jpg",
    name: "ASUS ROG Strix X670E-F Motherboard",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 38999,
    keywords: [
      "motherboard",
      "asus",
      "gaming",
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/router.jpeg",
    name: "TP-Link Archer AXE75",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 17900,
    keywords: [
      "router",
      "tp-link",
      "internet",
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/star.jpeg",
    name: "Starlink RV internet",
    rating: {
      stars: 4.5,
      count: 21048
    },
    priceCents: 59900,
    keywords: [
      "starlink",
      "internet",
    ]
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/scopion.jpeg",
    name: "IW-SK Imperator Works Gaming Chair Computer",
    rating: {
      stars: 4.5,
      count: 717
    },
    priceCents: 409900,
    keywords: [
      "gaming",
      "scopion chair",
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/controller.jpeg",
    name: "Forty4 Wireless Gaming Controller",
    rating: {
      stars: 4,
      count: 626
    },
    priceCents: 5000,
    keywords: [
      "gaming",
      "controller",
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/12.jpg",
    name: "Dell R440 1U 14G Poweredge Server | Data centre",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 322300,
    keywords: [
      "server",
      "dell",
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/scop.jpeg",
    name: "Scorpion Gaming Chair",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 309900,
    keywords: [
      "gaming",
      "scopion chair",
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/gtx.webp",
    name: "Amazon.com: HYDTGZ 24V/36V/48V/60/72V High Power Battery Charger for Golf Cart, Electric Forklift, Electric Car, Sweeper Battery Charger",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 211000,
    keywords: [
      "gtx",
      "gaming",
      "graphics",
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/knit-athletic-sneakers-pink.webp",
    name: "Waterproof Knit Athletic Sneakers - Pink",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 10747,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 3899,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 5799,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ]
  }
];