from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the backend!"}

@app.get("/passes")
def get_passes():
    return [
        {"id": 1, "name": "Standard Pass", "price": 3},
        {"id": 2, "name": "Premium Pass", "price": 5},
    ]

@app.get("/reservations")
def get_reservations():
    return [
        {"id": 1, "name": "Hotel XYZ", "type": "hotel", "price": 100},
        {"id": 2, "name": "Restaurant ABC", "type": "restaurant", "price": 50},
    ]

@app.get("/products")
def get_products():
    return [
        {"id": 1, "name": "Special Product 1", "price": 20},
        {"id": 2, "name": "Special Product 2", "price": 30},
    ]
