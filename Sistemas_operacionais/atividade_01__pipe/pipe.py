import random


def main():

    print(ordenar_lista(gerar_lista()))


















def gerar_lista():

    lista = []

    for n in range(10):

        numero = random.randint(1, 100)

        lista.append(numero)

    return lista






def ordenar_lista(lista: list):

    lista.sort()

    return lista





main()