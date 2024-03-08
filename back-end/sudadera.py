class Sudadera:
    def __init__(self,TipoSudadera,  Precio, Talla, Color, Image):
        self.TipoSudadera = TipoSudadera
        self.Precio = Precio
        self.Talla= Talla
        self.Color= Color
        self.Image = Image

    def toDBCollection(self):
        return{
           'TipoBlusa': self.TipoSudadera,
           'Precio': self.Precio,
           'Talla': self.Talla,
           'Color': self.Color,
           'Image': self.Image
        }