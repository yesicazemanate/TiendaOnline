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
short = db['Short']
sudadera= db['Sudadera']
vestido= db['Vestido']
@app.route('/blusa/get', methods=['GET'])
def getBlusas():
    try:
        users = []
        for doc in blusa.find({}):
            users.append({
                '_id': str(ObjectId(doc['_id'])),
                'TipoBlusa': doc['TipoBlusa'],
                'precio': doc['precio'],
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
                'precio': blusas['precio'],
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
    precio = data.get('precio')
    Color = data.get('Color')
    Talla = data.get('Talla')
    Image = data.get('Image')

    if not all([TipoBlusa, precio, Color, Talla, Image]):
        return jsonify({'error': 'Se requieren todos los campos'}), 400

    blusa.insert_one({
        'TipoBlusa': TipoBlusa,
        'precio': precio,
        'Color': Color,
        'Talla': Talla,
        'Image':Image
    })

    return 'Datos recibidos correctamente'

#DELETE

@app.route('/blusa/delete/<id>', methods=['DELETE'])
def delete_blusa(id):
    blusa.delete_one({'_id':ObjectId(id)})
    return jsonify('blusa eliminada')


#PUT
@app.route('/blusa/put/<id>', methods=['PUT'])
def update_blusa(id):
    
    blusa.update_one({'_id': ObjectId(id)}, {'$set': {
        'TipoBlusa': request.json.get('TipoBlusa', ''),
        'precio': request.json.get('precio', ''),
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
                'precio': doc['precio'],
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
@app.route('/pantalon/delete/<id>', methods=['DELETE'])
def delete_pantalon(id):
    pantalon.delete_one({'_id':ObjectId(id)})
    return jsonify('pantalon eliminado')
#PUT
@app.route('/pantalon/put/<id>', methods=['PUT'])
def update_pantalon(id):
    
    pantalon.update_one({'_id': ObjectId(id)}, {'$set': {
        'TipoPantalon': request.json.get('TipoPantalon', ''),
        'precio': request.json.get('precio', ''),
        'Color': request.json.get('Color', ''),
        'Talla': request.json.get('Talla', ''),
        'Image':request.json.get('Image', '')
    }})
    return jsonify({'msg': 'pantalon actualizado'})
#----------------------------------SHORT------------------------------------
#GET
@app.route('/short/get', methods=['GET'])
def getShort():
    try:
        shorts = []
        for doc in short.find({}):
            shorts.append({
                '_id': str(ObjectId(doc['_id'])),
                'TipoShort': doc['TipoShort'],
                'precio': doc['precio'],
                'Color': doc['Color'],
                'Talla': doc['Talla'],
                'Imagen': doc['Image']
            })
            
        return jsonify(shorts), 200  # Devuelve los pantalones con código de estado 200 (OK)
    except Exception as e:
        print("error:", e)  # Registra el error en la consola
        return jsonify({'error': 'Error al traer los pantalones'}), 500 

#GET ID
@app.route('/short/get/<id>', methods=['GET'])
def get_short(id):
    shorts=short.find_one({'_id':ObjectId(id)})
    return jsonify({
         '_id': str(ObjectId(shorts['_id'])),
                'TipoShort': shorts['TipoShort'],
                'precio': shorts['precio'],
                'Color': shorts['Color'],
                'Talla': shorts['Talla'],
                'Imagen': shorts['Image']
    })

#POST
@app.route('/short/post', methods=['POST'])
def create_short():
    data = request.json
    TipoShort = data.get('TipoShort')
    precio = data.get('precio')
    Color = data.get('Color')
    Talla = data.get('Talla')
    Image = data.get('Image')

    if not all([TipoShort, precio,  Color, Talla , Image]):
        return jsonify({'error': 'Se requieren todos los campos'}), 400

    short.insert_one({
        'TipoShort': TipoShort,
        'precio': precio,
        'Color': Color,
        'Talla': Talla,
        'Image':Image
    })
#DELETE
@app.route('/short/delete/<id>', methods=['DELETE'])
def delete_short(id):
    short.delete_one({'_id':ObjectId(id)})
    return jsonify('short eliminado')
#PUT
@app.route('/short/put/<id>', methods=['PUT'])
def update_short(id):
    
    short.update_one({'_id': ObjectId(id)}, {'$set': {
        'TipoShort': request.json.get('TipoShort', ''),
        'precio': request.json.get('precio', ''),
        'Color': request.json.get('Color', ''),
        'Talla': request.json.get('Talla', ''),
        'Image':request.json.get('Image', '')
    }})
    return jsonify({'msg': 'short actualizado'})

        #-----------------------------------SUDADERA-----------------------------------
#GET
@app.route('/sudadera/get', methods=['GET'])
def getSudadera():
    try:
        sudaderas = []
        for doc in sudadera.find({}):
            sudaderas.append({
                '_id': str(ObjectId(doc['_id'])),
                'TipoSudadera': doc['TipoSudadera'],
                'precio': doc['precio'],
                'Color': doc['Color'],
                'Talla': doc['Talla'],
                'Imagen': doc['Image']
            })
            
        return jsonify(sudaderas), 200  # Devuelve los pantalones con código de estado 200 (OK)
    except Exception as e:
        print("error:", e)  # Registra el error en la consola
        return jsonify({'error': 'Error al traer los pantalones'}), 500 

#GET ID
@app.route('/sudadera/get/<id>', methods=['GET'])
def get_sudadera(id):
    sudaderas=sudadera.find_one({'_id':ObjectId(id)})
    return jsonify({
         '_id': str(ObjectId(sudaderas['_id'])),
                'TipoSudadera': sudaderas['TipoSudadera'],
                'precio': sudaderas['precio'],
                'Color': sudaderas['Color'],
                'Talla': sudaderas['Talla'],
                'Imagen': sudaderas['Image']
    })

#POST
@app.route('/sudadera/post', methods=['POST'])
def create_sudadera():
    data = request.json
    TipoSudadera = data.get('TipoSudadera')
    precio = data.get('precio')
    Color = data.get('Color')
    Talla = data.get('Talla')
    Image = data.get('Image')

    if not all([TipoSudadera, precio, Color, Talla, Image]):
        return jsonify({'error': 'Se requieren todos los campos'}), 400

    sudadera.insert_one({
        'TipoSudadera': TipoSudadera,
        'precio': precio,
        'Color': Color,
        'Talla': Talla,
        'Image':Image
    })
#DELETE
@app.route('/sudadera/delete/<id>', methods=['DELETE'])
def delete_sudadera(id):
    sudadera.delete_one({'_id':ObjectId(id)})
    return jsonify('sudadera eliminado')
#PUT
@app.route('/sudadera/put/<id>', methods=['PUT'])
def update_sudadera(id):
    
    sudadera.update_one({'_id': ObjectId(id)}, {'$set': {
        'TipoSudadera': request.json.get('TipoSudadera', ''),
        'precio': request.json.get('precio', ''),
        'Color': request.json.get('Color', ''),
        'Talla': request.json.get('Talla', ''),
        'Image':request.json.get('Image', '')
    }})
    return jsonify({'msg': 'sudadera actualizado'})

        #-------------------------------------VESTIDO--------------------------------
#GET
@app.route('/vestido/get', methods=['GET'])
def getvestido():
    try:
        vestidos = []
        for doc in vestido.find({}):
            vestidos.append({
                '_id': str(ObjectId(doc['_id'])),
                'TipoVestido': doc['TipoVestido'],
                'precio': doc['precio'],
                'Color': doc['Color'],
                'Talla': doc['Talla'],
                'Imagen': doc['Image']
            })
            
        return jsonify(vestidos), 200  # Devuelve los pantalones con código de estado 200 (OK)
    except Exception as e:
        print("error:", e)  # Registra el error en la consola
        return jsonify({'error': 'Error al traer los pantalones'}), 500 
#GET ID
@app.route('/vestido/get/<id>', methods=['GET'])
def get_vestido(id):
    vestidos=vestido.find_one({'_id':ObjectId(id)})
    return jsonify({
         '_id': str(ObjectId(vestidos['_id'])),
                'TipoVestido': vestidos['TipoVestido'],
                'precio': vestidos['precio'],
                'Color': vestidos['Color'],
                'Talla': vestidos['Talla'],
                'Imagen': vestidos['Image']
    })
#POST
@app.route('/vestido/post', methods=['POST'])
def create_vestido():
    data = request.json
    TipoVestido = data.get('TipoVestido')
    precio = data.get('precio')
    Color = data.get('Color')
    Talla = data.get('Talla')
    Image = data.get('Image')

    if not all([TipoVestido, precio, Color, Talla, Image]):
        return jsonify({'error': 'Se requieren todos los campos'}), 400

    vestido.insert_one({
        'TipoVestido': TipoVestido,
        'precio': precio,
        'Color': Color,
        'Talla': Talla,
        'Image':Image
    })

#DELETE
@app.route('/vestido/delete/<id>', methods=['DELETE'])
def delete_vestido(id):
    vestido.delete_one({'_id':ObjectId(id)})
    return jsonify('vestido eliminado')
#PUT
@app.route('/vestido/put/<id>', methods=['PUT'])
def update_vestido(id):
    
    vestido.update_one({'_id': ObjectId(id)}, {'$set': {
        'TipoVestido': request.json.get('TipoVestido', ''),
        'precio': request.json.get('precio', ''),
        'Color': request.json.get('Color', ''),
        'Talla': request.json.get('Talla', ''),
        'Image':request.json.get('Image', '')
    }})
    return jsonify({'msg': 'vestido actualizado'})
if __name__ == "__main__":
    app.run(debug=True)
