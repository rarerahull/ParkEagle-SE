from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Temporary fake parking lot data
LOTS = [
    {
        "id": 40,
        "name": "Lot 40 - Highland Street Garage",
        "address": "Highland Street, Denton, TX",
        "total_spots": 300,
        "available_spots": 87,
        "status": "Good Availability"
    },
    {
        "id": 55,
        "name": "Lot 55 - Sycamore & Chestnut",
        "address": "Sycamore & Chestnut, Denton, TX",
        "total_spots": 150,
        "available_spots": 23,
        "status": "Limited Spots"
    }
]

@app.get("/api/health")
def health():
    return jsonify({"status": "ok"})

@app.get("/api/lots")
def get_lots():
    search = (request.args.get("q") or "").lower()
    lots = LOTS

    if search:
        lots = [lot for lot in lots if search in lot["name"].lower()]

    return jsonify(lots)

@app.get("/api/lots/<int:lot_id>")
def get_lot(lot_id):
    for lot in LOTS:
        if lot["id"] == lot_id:
            return jsonify(lot)
    return jsonify({"error": "Lot not found"}), 404

if __name__ == "__main__":
    app.run(port=5000, debug=True)
