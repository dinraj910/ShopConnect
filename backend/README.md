List of API - 19 APIs

POST - http://localhost:5000/api/auth/register

POST - http://localhost:5000/api/auth/login

GET - http://localhost:5000/api/user/profile

POST - http://localhost:5000/api/products/

GET - http://localhost:5000/api/products/

GET - http://localhost:5000/api/products/:id

POST - http://localhost:5000/api/products/upload

POST - http://localhost:5000/api/orders/

GET - http://localhost:5000/api/orders/my

GET - http://localhost:5000/api/orders/

GET - http://localhost:5000/api/orders/:id

PUT - http://localhost:5000/api/orders/:id/pay

PUT - http://localhost:5000/api/orders/:id/deliver

POST - http://localhost:5000/api/products/:id/reviews

POST - http://localhost:5000/api/posts/

GET - http://localhost:5000/api/posts/

POST = http://localhost:5000/api/posts/:id/comment

PUT - http://localhost:5000/api/posts/:id/like

PUT - http://localhost:5000/api/users/:id/follow



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

Status of Project


🧾 ✅ SHOPCONNECT STATUS CHECKPOINT 📊
Let’s analyze what’s done vs what’s left — especially with “Connect” in mind.

✅ DONE SO FAR (🔥 Built & Tested):
Feature	Status	Notes
✅ JWT Auth	✅ Done	User signup/login, token secured
✅ User Profile	✅ Done	Protected route /profile
✅ Product APIs	✅ Done	CRUD ready
✅ Cloudinary Upload	✅ Done	Upload + store image URLs
✅ Order Creation	✅ Done	User → Cart → Order flow live

🔗 SHOPCONNECT = SOCIAL + COMMERCE
Let’s visualize your roadmap for what's coming next 💡

🔜 TO DO – Phase-by-Phase
🔐 Phase 5: Admin Order Control
View all orders (admin only)

Mark as Paid / Delivered

Filter by status

💳 Phase 6: Stripe Payment Integration
Frontend checkout → Stripe

Save payment status → update DB

💬 Phase 7: Social Feed System
Users can:

Post reviews

Make standalone posts (product pics, experiences)

Like + comment

Users/brands can follow each other

Feed = Posts from followed accounts

👥 Phase 8: User Connections (Connect Vibe)
Follow/unfollow brands or people

Message sellers (Socket.io optional)

Get real-time notifications

Wishlist/like/save posts/products

⚛️ Phase 9: Frontend Integration
Pages: Auth, Home, Product, Cart, Feed, Profile

Use React Context or Redux

Add toast notifications + loaders

🚀 Phase 10: Deployment
Frontend: Netlify / Vercel

Backend: Render / Railway

DB: MongoDB Atlas

ENV secured + domains linked

📦 Final ShopConnect = Social x Store x Real-Time
✅ Auth
✅ Commerce
✅ Social
✅ Cloud Storage
🟡 Real-time (coming)
🟡 Payments
🟡 Full UI/UX polish

