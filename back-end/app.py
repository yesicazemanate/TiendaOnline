from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
import database as dbase
app = Flask(__name__)
db= dbase.dbConnection()
CORS(app)
#-------------BLUSAS--------------------------------------------
blusa = db['Blusa']
pantalon = db['Pantalon']

@app.route('/blusa/get', methods=['GET'])
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
#get id
@app.route('/blusa/get/<id>', methods=['GET'])
def get_blusa(id):
    blusas=blusa.find_one({'_id':ObjectId(id)})
    return jsonify({
         '_id': str(ObjectId(blusas['_id'])),
                'TipoBlusa': blusas['TipoBlusa'],
                'Precio': blusas['Precio'],
                'Color': blusas['Color'],
                'Talla': blusas['Talla'],
                'Imagen': blusas['Image']
    }
    )
        #POST
@app.route('/blusa/post', methods=['POST'])
def create_blusa():
    data = request.json
    TipoBlusa = data.get('TipoBlusa')
    Precio = data.get('Precio')
    Color = data.get('Color')
    Talla = data.get('Talla')
    Image = data.get('Image')

    if not all([TipoBlusa, Precio, Color, Talla, Image]):
        return jsonify({'error': 'Se requieren todos los campos'}), 400

    blusa.insert_one({
        'TipoBlusa': TipoBlusa,
        'Precio': Precio,
        'Color': Color,
        'Talla': Talla,
        'Image':Image
    })

    return 'Datos recibidos correctamente'

#DELETE

@app.route('/blusa/delete/<id>', methods=['DELETE'])
def delete_blusa(id):
    blusa.delete_one({'_id':ObjectId(id)})
    return jsonify('ususario eliminado')


#PUT
@app.route('/blusa/put/<id>', methods=['PUT'])
def update_blusa(id):
    
    blusa.update_one({'_id': ObjectId(id)}, {'$set': {
        'TipoBlusa': request.json.get('TipoBlusa', ''),
        'Precio': request.json.get('Precio', ''),
        'Color': request.json.get('Color', ''),
        'Talla': request.json.get('Talla', ''),
        'Image':request.json.get('Image', '')
    }})
    return jsonify({'msg': 'usuario actualizado'})

        #----------------------------------PANTALON----------------------------------
#GET



@app.route('/pantalon/get', methods=['GET'])
def getPantalon():
    try:
        pantalones = []
        for doc in pantalon.find({}):
            pantalones.append({
                '_id': str(ObjectId(doc['_id'])),
                'TipoPantalon': doc['TipoPantalon'],
                'Precio': doc['precio'],
                'Color': doc['Color'],
                'Talla': doc['Talla'],
                'Imagen': doc['Image']
            })
            
        return jsonify(pantalones), 200  # Devuelve los pantalones con código de estado 200 (OK)
    except Exception as e:
        print("error:", e)  # Registra el error en la consola
        return jsonify({'error': 'Error al traer los pantalones'}), 500 

#GET ID
@app.route('/pantalon/get/<id>', methods=['GET'])
def get_pantalon(id):
    pantalones=pantalon.find_one({'_id':ObjectId(id)})
    return jsonify({
         '_id': str(ObjectId(pantalones['_id'])),
                'TipoPantalon': pantalones['TipoPantalon'],
                'precio': pantalones['precio'],
                'Color': pantalones['Color'],
                'Talla': pantalones['Talla'],
                'Imagen': pantalones['Image']
    })

#POST
@app.route('/pantalon/post', methods=['POST'])
def create_pantalon():
    data = request.json
    TipoPantalon = data.get('TipoPantalon')
    precio = data.get('precio')
    Color = data.get('Color')
    Talla = data.get('Talla')
    Image = data.get('Image')

    if not all([TipoPantalon, precio, Color, Talla, Image]):
        return jsonify({'error': 'Se requieren todos los campos'}), 400

    pantalon.insert_one({
        'TipoPantalon': TipoPantalon,
        'precio': precio,
        'Color': Color,
        'Talla': Talla,
        'Image':Image
    })

    return 'Datos recibidos correctamente'
#DELETE

#PUT

        #----------------------------------SHORT------------------------------------
#GET

#GET ID

#POST

#DELETE

#PUT

        #-----------------------------------SUDADERA-----------------------------------
#GET

#GET ID

#POST

#DELETE

#PUT

        #-------------------------------------VESTIDO--------------------------------
#GET

#GET ID

#POST

#DELETE

#PUT

if __name__ == "__main__":
    app.run(debug=True)
