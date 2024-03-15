class Pantalon:
    def __init__(self,TipoPantalon,  Precio, Talla, Color, Image):
        self.TipoPantalon = TipoPantalon
        self.Precio = Precio
        self.Talla= Talla
        self.Color= Color
        self.Image = Image

    def toDBCollection(self):
        return{
           'TipoBlusa': self.TipoPantalon,
           'Precio': self.Precio,
           'Talla': self.Talla,
           'Color': self.Color,
           'Image': self.Image
        }