from pymongo import MongoClient
import certifi


MONGO_URI='mongodb+srv://yemaze123yz:<password>@cluster0.7ktluhf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

ca = certifi.where()

def dbConnection():
    try: 
        client = MongoClient(MONGO_URI, tlsCAFile=ca)
        db = client["Database"]
    except ConnectionError:
        print('Error de conexion de base de datos')
    return db


        