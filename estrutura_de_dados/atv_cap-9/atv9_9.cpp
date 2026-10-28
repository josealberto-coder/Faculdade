#include <stdio.h>

#include "lista.h"


void empilhar(item x, Lista *L){


    Lista item = no(x, NULL);

    item -> prox = *L;

    *L = item;

}


int desempilhar(Lista *L){

    if(*L == NULL)return 0;


    int n = (*L) -> item;

    Lista atual = *L;

    *L = (*L) -> prox;

    free(atual);

    return n;



   

}

Lista E = no(1, no(2, no(3, no(4, NULL))));



int main(){

    empilhar(10, &E);

    exibir(E);
    printf("\n");


    printf("%d", desempilhar(&E));

    printf("\n");


    exibir(E);

    







}






