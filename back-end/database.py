from pymongo import MongoClient
import certifi


MONGO_URI='mongodb+srv://yemaze123yz:k4yIZBpNklEKdviw@cluster0.7ktluhf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

ca = certifi.where()

def dbConnection():
    try: 
        client = MongoClient(MONGO_URI, tlsCAFile=ca)
        db = client["YemsbClothes"]
        print("conexion a la base de datos exitosa")
    except ConnectionError:
        print('Error de conexion de base de datos')
    return db


        