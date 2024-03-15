from flask import Flask, render_template, request, jsonify, redirect, url_for
import database as dbase
from blusa import Blusa

db= dbase.dbConnection()
app = Flask (__name__)
#----------------------BLUSAS---------------------------
#metodo get
@app.route('/blusa')
def home():
    return render_template('index.html')

#metodo Post
@app.route('/blusas', methods=['POST'])


#metodo put
@app.route('/blusas/put/<int: id>', methods=['POST'])
def edit(id):
    blusas= db['Blusas']
    TipoBlusa= request.form['TipoBlusa']
    Precio= request.form['Precio']
    Color= request.form['Color']
    Talla = request.form['Talla']
    Image = request.form['Image']

    if TipoBlusa and Precio and Color and Talla and Image:
        blusas.update_one({'_id': id}, {'$set': {'TipoBlusa': TipoBlusa, 'Precio': Precio, 'Color': Color, 'Talla': Talla, 'Image': Image}})
        response = jsonify({'message': 'Blusa'+  id + 'actualizado correctamente'})
        return redirect(url_for('home'))
    else:
        return notFound
#Meotodo delete
@app.route('/blusas/delete/<int: id>')
def delete(id):
    blusa = db('Blusa')
    blusa.delete_one({'_id': id})
    return redirect(url_for('home'))

#-------------------------PANTALON---------------------


#get

#post 

#put
@app.route('/pantalon/put/<int: id>', methods=['POST'])
def edit(id):
    pantalon= db['Pantalon']
    TipoPantalon= request.form['TipoPantalon']
    Precio= request.form['Precio']
    Color= request.form['Color']
    Talla = request.form['Talla']
    Image = request.form['Image']

    if TipoPantalon and Precio and Color and Talla and Image:
        pantalon.update_one({'_id': id}, {'$set': {'TipoPantalon': TipoPantalon, 'Precio': Precio, 'Color': Color, 'Talla': Talla, 'Image': Image}})
        response = jsonify({'message': 'pantalon'+  id + 'actualizado correctamente'})
        return redirect(url_for('home'))
    else:
        return notFound

#delete
@app.route('/pantalon/delete/<int: id>')
def delete(id):
    pantalon = db('Pantalon')
    pantalon.delete_one({'_id': id})
    return redirect(url_for('home'))

#-----------SHORTS------------
#GET

#POST

#PUT
@app.route('/short/put/<int: id>', methods=['POST'])
def edit(id):
    short= db['Short']
    TipoShort= request.form['TipoShort']
    Precio= request.form['Precio']
    Color= request.form['Color']
    Talla = request.form['Talla']
    Image = request.form['Image']

    if TipoShort and Precio and Color and Talla and Image:
        short.update_one({'_id': id}, {'$set': {'TipoShort': TipoShort, 'Precio': Precio, 'Color': Color, 'Talla': Talla, 'Image': Image}})
        response = jsonify({'message': 'short'+  id + 'actualizado correctamente'})
        return redirect(url_for('home'))
    else:
        return notFound
#DELETE
@app.route('/short/delete/<int: id>')
def delete(id):
    short = db('Short')
    short.delete_one({'_id': id})
    return redirect(url_for('home'))

#--------------------SUDADERA------------------------
#GET 

#POST

#PUT
@app.route('/sudadera/put/<int: id>', methods=['POST'])
def edit(id):
    sudadera= db['Sudadera']
    TipoSudadera= request.form['TipoSudadera']
    Precio= request.form['Precio']
    Color= request.form['Color']
    Talla = request.form['Talla']
    Image = request.form['Image']

    if TipoSudadera and Precio and Color and Talla and Image:
        sudadera.update_one({'_id': id}, {'$set': {'TipoSudadera': TipoSudadera, 'Precio': Precio, 'Color': Color, 'Talla': Talla, 'Image': Image}})
        response = jsonify({'message': 'sudadera'+  id + 'actualizado correctamente'})
        return redirect(url_for('home'))
    else:
        return notFound
#DELETE
@app.route('/sudadera/delete/<int: id>')
def delete(id):
    sudadera = db('Sudadera')
    sudadera.delete_one({'_id': id})
    return redirect(url_for('home'))

#-----------------------VESTIDO----------------------------

#GET 

#POST 

#PUT
@app.route('/vestido/put/<int: id>', methods=['POST'])
def edit(id):
    vestido= db['Vestido']
    TipoVestido= request.form['TipoVestido']
    Precio= request.form['Precio']
    Color= request.form['Color']
    Talla = request.form['Talla']
    Image = request.form['Image']

    if TipoVestido and Precio and Color and Talla and Image:
        vestido.update_one({'_id': id}, {'$set': {'TipoBlusa': TipoVestido, 'Precio': Precio, 'Color': Color, 'Talla': Talla, 'Image': Image}})
        response = jsonify({'message': 'Blusa'+  id + 'actualizado correctamente'})
        return redirect(url_for('home'))
    else:
        return notFound
#DELETE
@app.route('/vestido/delete/<int: id>')
def delete(id):
    vestido = db('Vestido')
    vestido.delete_one({'_id': id})
    return redirect(url_for('home'))

@app.errorhandler(404)
def notFound(error=None):
    message ={
        'message': 'No encontrado' + request.url,
        'status': '404 Not Found'
    }
    reponse= jsonify(message)
    reponse.status_code=404
    return reponse
if __name__ == '__main__':
    app.run(debug=True, port=4000)

<<<<<<< HEAD
app = Flask(__name__)

@app.route('/')
=======
>>>>>>> bb997953b4962ae007827bdbaf85203a09479224
