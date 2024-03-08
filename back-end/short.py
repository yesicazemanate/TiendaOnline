class Short:
    def __init__(self,TipoShort,  Precio, Talla, Color, Image):
        self.TipoShort = TipoShort
        self.Precio = Precio
        self.Talla= Talla
        self.Color= Color
        self.Image = Image

    def toDBCollection(self):
        return{
           'TipoBlusa': self.TipoShort,
           'Precio': self.Precio,
           'Talla': self.Talla,
           'Color': self.Color,
           'Image': self.Image
        }