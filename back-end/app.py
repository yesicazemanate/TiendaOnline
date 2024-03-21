from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb+srv://yemaze123yz:k4yIZBpNklEKdviw@cluster0.7ktluhf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongo = PyMongo(app)

CORS(app)
 db = mongo.db.Blusa
@app.route('/blusas/get', methods=['GET'])
def getBlusas():
    users =[]
    for doc in db.Blusa.find({}):
        users.append({
            '_id':str(ObjectId(doc['_id'])),
            'TipoBlusa': doc['TipoBlusa'],
            'Precio':doc['Precio'],
            'Color':doc['Color'],
            'Talla':doc['Talla'],
            'Image':doc['Image']

        })
    return  jsonify(users)

if __name__ == "__main__":
    app.run(debug=True)