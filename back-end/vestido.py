class Vestido:
    def __init__(self,TipoVestido,  Precio, Talla, Color, Image):
        self.TipoVestido = TipoVestido
        self.Precio = Precio
        self.Talla= Talla
        self.Color= Color
        self.Image = Image

    def toDBCollection(self):
        return{
           'TipoBlusa': self.TipoVestido,
           'Precio': self.Precio,
           'Talla': self.Talla,
           'Color': self.Color,
           'Image': self.Image
        }