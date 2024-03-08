from flask import Flask, render_template, request, jsonify, redirect, url_for
import database as dbase
from blusa import Blusa

db= dbase.dbConnection()
app = Flask (__name__)
#metodo get
@app.route('/')
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
