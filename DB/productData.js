const productData = [
  {
    "name": "Samsung Galaxy S21",
    "price": 799,
    "images": [
      "https://example.com/samsung-galaxy-s21.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 50,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Phantom Gray",
          "Phantom White",
          "Phantom Violet"
        ]
      }
    ],
    "rating": 4.5,
    "sold": 10
  },
  {
    "name": "Nike Air Max 270",
    "price": 150,
    "images": [
      "https://example.com/nike-air-max-270.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 20,
    "variation": [
      {
        "name": "Size",
        "values": [
          "US 7",
          "US 8",
          "US 9"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "White",
          "Red"
        ]
      }
    ],
    "rating": 4.2,
    "sold": 5
  },
  {
    "name": "Apple MacBook Pro",
    "price": 1299,
    "images": [
      "https://example.com/apple-macbook-pro.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 30,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Space Gray",
          "Silver"
        ]
      },
      {
        "name": "Storage",
        "values": [
          "256GB SSD",
          "512GB SSD"
        ]
      }
    ],
    "rating": 4.8,
    "sold": 15
  },
  {
    "name": "Adidas Ultraboost 21",
    "price": 180,
    "images": [
      "https://example.com/adidas-ultraboost-21.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 25,
    "variation": [
      {
        "name": "Size",
        "values": [
          "US 7",
          "US 8",
          "US 9"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "White",
          "Blue"
        ]
      }
    ],
    "rating": 4.6,
    "sold": 8
  },
  {
    "name": "Amazon Echo Dot",
    "price": 49,
    "images": [
      "https://example.com/amazon-echo-dot.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 40,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Charcoal",
          "Glacier White"
        ]
      }
    ],
    "rating": 4.3,
    "sold": 12
  },
  {
    "name": "Calvin Klein T-Shirt",
    "price": 29,
    "images": [
      "https://example.com/calvin-klein-tshirt.jpg"
    ],
    "category": "Clothing",
    "condition": "New",
    "stock": 60,
    "variation": [
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "White",
          "Gray"
        ]
      }
    ],
    "rating": 4.1,
    "sold": 20
  },
  {
    "name": "Dyson V11 Absolute",
    "price": 699,
    "images": [
      "https://example.com/dyson-v11-absolute.jpg"
    ],
    "category": "Home Appliance",
    "condition": "New",
    "stock": 10,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Blue",
          "Gold"
        ]
      }
    ],
    "rating": 4.9,
    "sold": 3
  },
  {
    "name": "L'Oreal Paris Mascara",
    "price": 9,
    "images": [
      "https://example.com/loreal-paris-mascara.jpg"
    ],
    "category": "Beauty",
    "condition": "New",
    "stock": 100,
    "variation": [
      {
        "name": "Type",
        "values": [
          "Voluminous",
          "Telescopic",
          "Paradise"
        ]
      }
    ],
    "rating": 4.0,
    "sold": 30
  },
  {
    "name": "Sony PlayStation 5",
    "price": 499,
    "images": [
      "https://example.com/sony-playstation-5.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 15,
    "variation": [
      {
        "name": "Color",
        "values": [
          "White",
          "Black"
        ]
      }
    ],
    "rating": 4.7,
    "sold": 7
  },
  {
    "name": "Levi's 501 Jeans",
    "price": 69,
    "images": [
      "https://example.com/levis-501-jeans.jpg"
    ],
    "category": "Clothing",
    "condition": "New",
    "stock": 50,
    "variation": [
      {
        "name": "Size",
        "values": [
          "28x30",
          "30x32",
          "32x34"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Dark Blue",
          "Light Blue"
        ]
      }
    ],
    "rating": 4.4,
    "sold": 18
  },
  {
    "name": "KitchenAid Stand Mixer",
    "price": 399,
    "images": [
      "https://example.com/kitchenaid-stand-mixer.jpg"
    ],
    "category": "Home Appliance",
    "condition": "New",
    "stock": 8,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Red",
          "Silver"
        ]
      }
    ],
    "rating": 4.9,
    "sold": 2
  },
  {
    "name": "Fitbit Versa 3",
    "price": 229,
    "images": [
      "https://example.com/fitbit-versa-3.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 30,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black",
          "Pink"
        ]
      }
    ],
    "rating": 4.2,
    "sold": 9
  },
  {
    "name": "Under Armour Hoodie",
    "price": 59,
    "images": [
      "https://example.com/under-armour-hoodie.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 40,
    "variation": [
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Gray",
          "Blue"
        ]
      }
    ],
    "rating": 4.3,
    "sold": 14
  },
  {
    "name": "Bose QuietComfort Earbuds",
    "price": 279,
    "images": [
      "https://example.com/bose-quietcomfort-earbuds.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 20,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black",
          "White"
        ]
      }
    ],
    "rating": 4.5,
    "sold": 6
  },
  {
    "name": "Nike Dri-FIT Running Shorts",
    "price": 35,
    "images": [
      "https://example.com/nike-dri-fit-running-shorts.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 30,
    "variation": [
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Gray",
          "Blue"
        ]
      }
    ],
    "rating": 4.1,
    "sold": 11
  },
  {
    "name": "Amazon Kindle Paperwhite",
    "price": 129,
    "images": [
      "https://example.com/amazon-kindle-paperwhite.jpg"
    ],
    "category": "Books",
    "condition": "New",
    "stock": 25,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black",
          "White"
        ]
      }
    ],
    "rating": 4.6,
    "sold": 5
  },
  {
    "name": "Samsung 55-Inch Smart TV",
    "price": 699,
    "images": [
      "https://example.com/samsung-55-inch-smart-tv.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 12,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black",
          "Silver"
        ]
      }
    ],
    "rating": 4.8,
    "sold": 4
  },
  {
    "name": "Nike Air Force 1",
    "price": 90,
    "images": [
      "https://example.com/nike-air-force-1.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 18,
    "variation": [
      {
        "name": "Size",
        "values": [
          "US 7",
          "US 8",
          "US 9"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "White",
          "Red"
        ]
      }
    ],
    "rating": 4.4,
    "sold": 7
  },
  {
    "name": "Sony WH-1000XM4 Headphones",
    "price": 349,
    "images": [
      "https://example.com/sony-wh-1000xm4-headphones.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 15,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black",
          "Silver"
        ]
      }
    ],
    "rating": 4.7,
    "sold": 5
  },
  {
    "name": "Calvin Klein Boxer Briefs",
    "price": 24,
    "images": [
      "https://example.com/calvin-klein-boxer-briefs.jpg"
    ],
    "category": "Clothing",
    "condition": "New",
    "stock": 50,
    "variation": [
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "White",
          "Gray"
        ]
      }
    ],
    "rating": 4.3,
    "sold": 15
  },
  {
    "name": "Instant Pot Duo",
    "price": 99,
    "images": [
      "https://example.com/instant-pot-duo.jpg"
    ],
    "category": "Home Appliance",
    "condition": "New",
    "stock": 20,
    "variation": [
      {
        "name": "Size",
        "values": [
          "3 Quart",
          "6 Quart",
          "8 Quart"
        ]
      }
    ],
    "rating": 4.9,
    "sold": 8
  },
  {
    "name": "Samsung Galaxy Watch 3",
    "price": 399,
    "images": [
      "https://example.com/samsung-galaxy-watch-3.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 10,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black",
          "Silver"
        ]
      },
      {
        "name": "Size",
        "values": [
          "41mm",
          "45mm"
        ]
      }
    ],
    "rating": 4.5,
    "sold": 3
  },
  {
    "name": "Adidas Ultraboost DNA",
    "price": 180,
    "images": [
      "https://example.com/adidas-ultraboost-dna.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 25,
    "variation": [
      {
        "name": "Size",
        "values": [
          "US 7",
          "US 8",
          "US 9"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "White",
          "Gray"
        ]
      }
    ],
    "rating": 4.6,
    "sold": 9
  },
  {
    "name": "Philips Sonicare Toothbrush",
    "price": 99,
    "images": [
      "https://example.com/philips-sonicare-toothbrush.jpg"
    ],
    "category": "Home Appliance",
    "condition": "New",
    "stock": 15,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black",
          "White"
        ]
      }
    ],
    "rating": 4.8,
    "sold": 4
  },
  {
    "name": "Lululemon Yoga Pants",
    "price": 98,
    "images": [
      "https://example.com/lululemon-yoga-pants.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 30,
    "variation": [
      {
        "name": "Size",
        "values": [
          "2",
          "4",
          "6"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Gray",
          "Blue"
        ]
      }
    ],
    "rating": 4.4,
    "sold": 12
  },
  {
    "name": "Amazon Fire TV Stick",
    "price": 39,
    "images": [
      "https://example.com/amazon-fire-tv-stick.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 40,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black"
        ]
      }
    ],
    "rating": 4.3,
    "sold": 18
  },
  {
    "name": "Nike Pro Training Shorts",
    "price": 35,
    "images": [
      "https://example.com/nike-pro-training-shorts.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 30,
    "variation": [
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Gray",
          "Blue"
        ]
      }
    ],
    "rating": 4.2,
    "sold": 11
  },
  {
    "name": "Apple AirPods Pro",
    "price": 249,
    "images": [
      "https://example.com/apple-airpods-pro.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 20,
    "variation": [
      {
        "name": "Color",
        "values": [
          "White"
        ]
      }
    ],
    "rating": 4.7,
    "sold": 6
  },
  {
    "name": "Ralph Lauren Polo Shirt",
    "price": 89,
    "images": [
      "https://example.com/ralph-lauren-polo-shirt.jpg"
    ],
    "category": "Clothing",
    "condition": "New",
    "stock": 35,
    "variation": [
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "White",
          "Blue"
        ]
      }
    ],
    "rating": 4.2,
    "sold": 13
  },
  {
    "name": "Dyson V11 Absolute",
    "price": 699,
    "images": [
      "https://example.com/dyson-v11-absolute.jpg"
    ],
    "category": "Home Appliance",
    "condition": "New",
    "stock": 8,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Blue",
          "Gold"
        ]
      }
    ],
    "rating": 4.9,
    "sold": 2
  },
  {
    "name": "Oakley Sunglasses",
    "price": 163,
    "images": [
      "https://example.com/oakley-sunglasses.jpg"
    ],
    "category": "Beauty",
    "condition": "New",
    "stock": 20,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black",
          "Silver"
        ]
      }
    ],
    "rating": 4.5,
    "sold": 7
  },
  {
    "name": "Canon EOS Rebel T7",
    "price": 449,
    "images": [
      "https://example.com/canon-eos-rebel-t7.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 10,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black"
        ]
      }
    ],
    "rating": 4.6,
    "sold": 3
  },
  {
    "name": "Nike Air Max 270 React",
    "price": 150,
    "images": [
      "https://example.com/nike-air-max-270-react.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 15,
    "variation": [
      {
        "name": "Size",
        "values": [
          "US 7",
          "US 8",
          "US 9"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "White",
          "Gray"
        ]
      }
    ],
    "rating": 4.7,
    "sold": 5
  },
  {
    "name": "Bose SoundLink Revolve",
    "price": 199,
    "images": [
      "https://example.com/bose-soundlink-revolve.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 12,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black",
          "Silver"
        ]
      }
    ],
    "rating": 4.8,
    "sold": 4
  },
  {
    "name": "Patagonia Fleece Jacket",
    "price": 139,
    "images": [
      "https://example.com/patagonia-fleece-jacket.jpg"
    ],
    "category": "Clothing",
    "condition": "New",
    "stock": 25,
    "variation": [
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Gray",
          "Blue"
        ]
      }
    ],
    "rating": 4.4,
    "sold": 9
  },
  {
    "name": "Fitbit Charge 4",
    "price": 149,
    "images": [
      "https://example.com/fitbit-charge-4.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 18,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black",
          "Rosewood"
        ]
      }
    ],
    "rating": 4.5,
    "sold": 6
  },
  {
    "name": "Levi's 501 Original Jeans",
    "price": 69,
    "images": [
      "https://example.com/levis-501-original-jeans.jpg"
    ],
    "category": "Clothing",
    "condition": "New",
    "stock": 40,
    "variation": [
      {
        "name": "Size",
        "values": [
          "28x30",
          "30x32",
          "32x34"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Blue"
        ]
      }
    ],
    "rating": 4.3,
    "sold": 16
  },
  {
    "name": "Samsung Galaxy Buds Pro",
    "price": 199,
    "images": [
      "https://example.com/samsung-galaxy-buds-pro.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 10,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black",
          "Silver",
          "Violet"
        ]
      }
    ],
    "rating": 4.6,
    "sold": 3
  },
  {
    "name": "Under Armour HeatGear T-Shirt",
    "price": 25,
    "images": [
      "https://example.com/under-armour-heatgear-tshirt.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 30,
    "variation": [
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Gray",
          "Blue"
        ]
      }
    ],
    "rating": 4.2,
    "sold": 11
  },
  {
    "name": "Ninja Foodi Grill",
    "price": 209,
    "images": [
      "https://example.com/ninja-foodi-grill.jpg"
    ],
    "category": "Home Appliance",
    "condition": "New",
    "stock": 8,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black"
        ]
      }
    ],
    "rating": 4.9,
    "sold": 2
  },
  {
    "name": "Ray-Ban Aviator Sunglasses",
    "price": 169,
    "images": [
      "https://example.com/ray-ban-aviator-sunglasses.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 15,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Gold",
          "Silver"
        ]
      }
    ],
    "rating": 4.5,
    "sold": 7
  },
  {
    "name": "Apple iPad Air",
    "price": 599,
    "images": [
      "https://example.com/apple-ipad-air.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 10,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Silver",
          "Space Gray"
        ]
      },
      {
        "name": "Storage",
        "values": [
          "64GB",
          "256GB"
        ]
      }
    ],
    "rating": 4.8,
    "sold": 4
  },
  {
    "name": "New Balance Fresh Foam 1080v11",
    "price": 149,
    "images": [
      "https://example.com/new-balance-fresh-foam-1080v11.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 20,
    "variation": [
      {
        "name": "Size",
        "values": [
          "US 7",
          "US 8",
          "US 9"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "White",
          "Gray"
        ]
      }
    ],
    "rating": 4.7,
    "sold": 5
  },
  {
    "name": "Breville Barista Express",
    "price": 699,
    "images": [
      "https://example.com/breville-barista-express.jpg"
    ],
    "category": "Home Appliance",
    "condition": "New",
    "stock": 5,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Stainless Steel"
        ]
      }
    ],
    "rating": 4.9,
    "sold": 1
  },
  {
    "name": "Adidas Ultraboost 21",
    "price": 180,
    "images": [
      "https://example.com/adidas-ultraboost-21.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 15,
    "variation": [
      {
        "name": "Size",
        "values": [
          "US 7",
          "US 8",
          "US 9"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "White",
          "Gray"
        ]
      }
    ],
    "rating": 4.7,
    "sold": 5
  },
  {
    "name": "Sony WH-1000XM4",
    "price": 349,
    "images": [
      "https://example.com/sony-wh-1000xm4.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 10,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black",
          "Silver"
        ]
      }
    ],
    "rating": 4.8,
    "sold": 3
  },
  {
    "name": "Calvin Klein Boxer Briefs",
    "price": 28,
    "images": [
      "https://example.com/calvin-klein-boxer-briefs.jpg"
    ],
    "category": "Clothing",
    "condition": "New",
    "stock": 30,
    "variation": [
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "White",
          "Gray"
        ]
      }
    ],
    "rating": 4.4,
    "sold": 12
  },
  {
    "name": "LG OLED CX Series TV",
    "price": 1499,
    "images": [
      "https://example.com/lg-oled-cx-series-tv.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 5,
    "variation": [
      {
        "name": "Size",
        "values": [
          "55\"",
          "65\"",
          "77\""
        ]
      }
    ],
    "rating": 4.9,
    "sold": 2
  },
  {
    "name": "The North Face Resolve Jacket",
    "price": 90,
    "images": [
      "https://example.com/the-north-face-resolve-jacket.jpg"
    ],
    "category": "Clothing",
    "condition": "New",
    "stock": 25,
    "variation": [
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Gray",
          "Blue"
        ]
      }
    ],
    "rating": 4.3,
    "sold": 9
  },
  {
    "name": "Samsung Galaxy Watch Active2",
    "price": 249,
    "images": [
      "https://example.com/samsung-galaxy-watch-active2.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 15,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black",
          "Silver",
          "Gold"
        ]
      }
    ],
    "rating": 4.6,
    "sold": 5
  },
  {
    "name": "Nike Sportswear Windrunner Jacket",
    "price": 100,
    "images": [
      "https://example.com/nike-sportswear-windrunner-jacket.jpg"
    ],
    "category": "Clothing",
    "condition": "New",
    "stock": 20,
    "variation": [
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "White",
          "Gray"
        ]
      }
    ],
    "rating": 4.2,
    "sold": 8
  },
  {
    "name": "Sony PlayStation 5",
    "price": 499,
    "images": [
      "https://example.com/sony-playstation-5.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 3,
    "variation": [
      {
        "name": "Color",
        "values": [
          "White"
        ]
      }
    ],
    "rating": 4.9,
    "sold": 1
  },
  {
    "name": "Columbia Bugaboo II Fleece Interchange Jacket",
    "price": 180,
    "images": [
      "https://example.com/columbia-bugaboo-ii-fleece-interchange-jacket.jpg"
    ],
    "category": "Clothing",
    "condition": "New",
    "stock": 12,
    "variation": [
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Gray",
          "Blue"
        ]
      }
    ],
    "rating": 4.5,
    "sold": 6
  },
  {
    "name": "Bose QuietComfort Earbuds",
    "price": 279,
    "images": [
      "https://example.com/bose-quietcomfort-earbuds.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 8,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black",
          "White"
        ]
      }
    ],
    "rating": 4.7,
    "sold": 2
  },
  {
    "name": "Levi's Trucker Jacket",
    "price": 98,
    "images": [
      "https://example.com/levis-trucker-jacket.jpg"
    ],
    "category": "Clothing",
    "condition": "New",
    "stock": 20,
    "variation": [
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Blue"
        ]
      }
    ],
    "rating": 4.3,
    "sold": 10
  },
  {
    "name": "Apple Watch Series 6",
    "price": 399,
    "images": [
      "https://example.com/apple-watch-series-6.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 10,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Silver",
          "Gold"
        ]
      },
      {
        "name": "Size",
        "values": [
          "40mm",
          "44mm"
        ]
      }
    ],
    "rating": 4.8,
    "sold": 4
  },
  {
    "name": "Nike Air Max 2090",
    "price": 150,
    "images": [
      "https://example.com/nike-air-max-2090.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 18,
    "variation": [
      {
        "name": "Size",
        "values": [
          "US 7",
          "US 8",
          "US 9"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "White",
          "Gray"
        ]
      }
    ],
    "rating": 4.6,
    "sold": 7
  },
  {
    "name": "Canon EOS R5",
    "price": 3899,
    "images": [
      "https://example.com/canon-eos-r5.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 2,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Black"
        ]
      }
    ],
    "rating": 4.9,
    "sold": 1
  },
  {
    "name": "Patagonia Better Sweater Fleece Jacket",
    "price": 139,
    "images": [
      "https://example.com/patagonia-better-sweater-fleece-jacket.jpg"
    ],
    "category": "Clothing",
    "condition": "New",
    "stock": 15,
    "variation": [
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Gray",
          "Blue"
        ]
      }
    ],
    "rating": 4.4,
    "sold": 8
  },
  {
    "name": "Samsung Galaxy S21 Ultra",
    "price": 1199,
    "images": [
      "https://example.com/samsung-galaxy-s21-ultra.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 5,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Phantom Black",
          "Phantom Silver"
        ]
      }
    ],
    "rating": 4.8,
    "sold": 2
  },
  {
    "name": "Lululemon Align Pant II",
    "price": 98,
    "images": [
      "https://example.com/lululemon-align-pant-ii.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 20,
    "variation": [
      {
        "name": "Size",
        "values": [
          "2",
          "4",
          "6",
          "8"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Gray",
          "Blue"
        ]
      }
    ],
    "rating": 4.7,
    "sold": 9
  },
  {
    "name": "Dyson V11 Absolute",
    "price": 699,
    "images": [
      "https://example.com/dyson-v11-absolute.jpg"
    ],
    "category": "Home Appliance",
    "condition": "New",
    "stock": 7,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Blue"
        ]
      }
    ],
    "rating": 4.9,
    "sold": 3
  },
  {
    "name": "Patagonia Nano Puff Jacket",
    "price": 199,
    "images": [
      "https://example.com/patagonia-nano-puff-jacket.jpg"
    ],
    "category": "Clothing",
    "condition": "New",
    "stock": 10,
    "variation": [
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Gray",
          "Blue"
        ]
      }
    ],
    "rating": 4.5,
    "sold": 5
  },
  {
    "name": "Apple MacBook Pro 16\"","price": 2399,
    "images": [
      "https://example.com/apple-macbook-pro-16.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 4,
    "variation": [
      {
        "name": "Color",
        "values": [
          "Space Gray"
        ]
      }
    ],
    "rating": 4.9,
    "sold": 2
  },
  {
    "name": "Nike Air Force 1 '07",
    "price": 90,
    "images": [
      "https://example.com/nike-air-force-1-07.jpg"
    ],
    "category": "Sports",
    "condition": "New",
    "stock": 25,
    "variation": [
      {
        "name": "Size",
        "values": [
          "US 7",
          "US 8",
          "US 9"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "White"
        ]
      }
    ],
    "rating": 4.6,
    "sold": 10
  },
  {
    "name": "Samsung 49\" QLED Q80T Series TV","price": 1299,
    "images": [
      "https://example.com/samsung-qled-q80t-series-tv.jpg"
    ],
    "category": "Electronics",
    "condition": "New",
    "stock": 3,
    "variation": [
      {
        "name": "Size",
        "values": [
          "49\""]
        }
      ],
      "rating": 4.8,
      "sold": 1
    },
    {
      "name": "Arc'teryx Atom LT Jacket",
      "price": 259,
      "images": [
        "https://example.com/arcteryx-atom-lt-jacket.jpg"
      ],
      "category": "Clothing",
      "condition": "New",
      "stock": 8,
      "variation": [
        {
          "name": "Size",
          "values": [
            "S",
            "M",
            "L"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Gray",
            "Blue"
          ]
        }
      ],
      "rating": 4.6,
      "sold": 3
    },
    {
      "name": "Bose SoundLink Revolve+",
      "price": 299,
      "images": [
        "https://example.com/bose-soundlink-revolve-plus.jpg"
      ],
      "category": "Electronics",
      "condition": "New",
      "stock": 6,
      "variation": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Silver"
          ]
        }
      ],
      "rating": 4.7,
      "sold": 2
    },
    {
      "name": "Patagonia Retro Pile Fleece Jacket",
      "price": 139,
      "images": [
        "https://example.com/patagonia-retro-pile-fleece-jacket.jpg"
      ],
      "category": "Clothing",
      "condition": "New",
      "stock": 12,
      "variation": [
        {
          "name": "Size",
          "values": [
            "S",
            "M",
            "L"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Brown",
            "Green"
          ]
        }
      ],
      "rating": 4.4,
      "sold": 6
    },
    {
      "name": "Sony WH-1000XM4",
      "price": 349,
      "images": [
        "https://example.com/sony-wh-1000xm4.jpg"
      ],
      "category": "Electronics",
      "condition": "New",
      "stock": 9,
      "variation": [
        {
          "name": "Color",
          "values": [
            "Black",
            "Silver"
          ]
        }
      ],
      "rating": 4.8,
      "sold": 3
    },
    {
      "name": "Adidas Ultraboost 21",
      "price": 180,
      "images": [
        "https://example.com/adidas-ultraboost-21.jpg"
      ],
      "category": "Sports",
      "condition": "New",
      "stock": 15,
      "variation": [
        {
          "name": "Size",
          "values": [
            "US 7",
            "US 8",
            "US 9"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "White",
            "Gray"
          ]
        }
      ],
      "rating": 4.7,
      "sold": 7
    },
    {
      "name": "Patagonia Black Hole Duffel Bag",
      "price": 139,
      "images": [
        "https://example.com/patagonia-black-hole-duffel-bag.jpg"
      ],
      "category": "Home Appliance",
      "condition": "New",
      "stock": 6,
      "variation": [
        {
          "name": "Size",
          "values": [
            "45L",
            "60L"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Blue"
          ]
        }
      ],
      "rating": 4.5,
      "sold": 3
    },
    {
      "name": "Samsung Galaxy Tab S7+",
      "price": 849,
      "images": [
        "https://example.com/samsung-galaxy-tab-s7-plus.jpg"
      ],
      "category": "Electronics",
      "condition": "New",
      "stock": 4,
      "variation": [
        {
          "name": "Color",
          "values": [
            "Mystic Black"
          ]
        }
      ],
      "rating": 4.8,
      "sold": 2
    },
    {
      "name": "The North Face Resolve 2 Jacket",
      "price": 90,
      "images": [
        "https://example.com/the-north-face-resolve-2-jacket.jpg"
      ],
      "category": "Clothing",
      "condition": "New",
      "stock": 20,
      "variation": [
        {
          "name": "Size",
          "values": [
            "S",
            "M",
            "L"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Gray",
            "Blue"
          ]
        }
      ],
      "rating": 4.3,
      "sold": 10
    },
    {
      "name": "Sony A7 III",
      "price": 1999,
      "images": [
        "https://example.com/sony-a7-iii.jpg"
      ],
      "category": "Electronics",
      "condition": "New",
      "stock": 3,
      "variation": [
        {
          "name": "Color",
          "values": [
            "Black"
          ]
        }
      ],
      "rating": 4.9,
      "sold": 1
    },
    {
      "name": "Nike Sportswear Windrunner Jacket",
      "price": 100,
      "images": [
        "https://example.com/nike-sportswear-windrunner-jacket.jpg"
      ],
      "category": "Sports",
      "condition": "New",
      "stock": 18,
      "variation": [
        {
          "name": "Size",
          "values": [
            "S",
            "M",
            "L"
          ]
        },
        {
          "name": "Color",
          "values": [
            "Black",
            "Gray",
            "Blue"
          ]
        }
      ],
      "rating": 4.6,
      "sold": 8
    }
]

module.exports = productData