class Tv:
    def __init__(self, tamanho) -> None:
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False
        
    def aumentar_volume(self):
        if self < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.volume > 0:
            self.__volume -= 1
 
    def modificar_canal(self, canal):
        if canal <= 1 or canal > 99:
            raise ValueError('Canal indisponível')
        self.__canal = canal
    
    def ligar_desligar(self):
        if self.__ligada:
            self.__ligada = False
        self.__ligada = True