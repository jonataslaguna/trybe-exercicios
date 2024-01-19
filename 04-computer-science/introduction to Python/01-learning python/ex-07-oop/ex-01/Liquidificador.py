import Eletrodomestico


class Liquidificador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado
    
    def __str__(self):
        return f"""
        - {self.cor}
        - {self.preco}
        - {self._potencia}
        - {self._tensao}
        - {self.__ligado}
        - {self.__velocidade}
        - {self.__velocidade_maxima}
        - {self.__corrente_atual_no_motor}
        """

        
liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)


print(liquidificador_vermelho)
