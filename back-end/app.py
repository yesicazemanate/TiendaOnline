from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
import database as dbase
app = Flask(__name__)
db= dbase.dbConnection()

CORS(app)

blusa = db['Blusa']
print(blusa)
@app.route('/blusas/get', methods=['GET'])
def getBlusas():
    try:
        users = []
        for doc in blusa.find({}):
            users.append({
                '_id': str(ObjectId(doc['_id'])),
                'TipoBlusa': doc['TipoBlusa'],
                'Precio': doc['Precio'],
                'Color': doc['Color'],
                'Talla': doc['Talla'],
                'Imagen': doc['Image']
            })
        return jsonify(users)
    except Exception as e:
        print(e)  # Inspecciona el mensaje de error
        return jsonify({'error': 'Error al conectar con la base de datos'})

if __name__ == "__main__":
    app.run(debug=True)
