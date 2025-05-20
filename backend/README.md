List of API

POST - http://localhost:5000/api/auth/register

POST - http://localhost:5000/api/auth/login

GET - http://localhost:5000/api/user/profile

POST - http://localhost:5000/api/products/

GET - http://localhost:5000/api/products/

GET - http://localhost:5000/api/products/:id

POST - http://localhost:5000/api/products/upload

POST - http://localhost:5000/api/orders/

GET - http://localhost:5000/api/orders/my



{
  "name": "Sony WH-1000XM5",
  "description": "Noise cancelling king 🎧",
  "price": 349,
  "category": "Headphones",
  "stock": 40,
  "image": "sony1000.jpg"
}


{
  "name": "Samsung Galaxy S24",
  "description": "Flagship Android 🔥",
  "price": 1099,
  "category": "Mobiles",
  "stock": 25,
  "image": "galaxyS24.jpg"
}


{
  "name": "Logitech MX Master 3",
  "description": "Elite dev mouse 🖱️",
  "price": 99,
  "category": "Accessories",
  "stock": 60,
  "image": {
    "url": "https://res.cloudinary.com/...jpg",
    "public_id": "shopconnect/products/abc123"
  }
}


{
  "name": "ASUS ROG Strix RTX 4090",
  "description": "GPU godmode 🕹️💪",
  "price": 1999,
  "category": "Graphics Cards",
  "stock": 5,
  "image": {
    "url": "https://res.cloudinary.com/...jpg",
    "public_id": "shopconnect/products/abc123"
  }
}
