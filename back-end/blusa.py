class Blusa:
    def __init__(self,TipoBlusa,  Precio, Talla, Color, Image):
        self.TipoBlusa = TipoBlusa
        self.Precio = Precio
        self.Talla= Talla
        self.Color= Color
        self.Image = Image

    def toDBCollection(self):
        return{
           'TipoBlusa': self.TipoBlusa,
           'Precio': self.Precio,
           'Talla': self.Talla,
           'Color': self.Color,
           'Image': self.Image
        }