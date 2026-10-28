#include <stdio.h>
#include "lista.h"






void enfileirar(item x, Lista *L){

    Lista F = (Lista)malloc(sizeof(struct no));

    if (*L == NULL){

        F -> item = x;

        F -> prox = F;

        *L = F;
    }

    if (*L != NULL){

        F ->item = x;

        F -> prox = (*L) -> prox;

        (*L) -> prox = F;

        *L = F;

    }

}


void desenfileirar(Lista *l){

    Lista aux = *l;


    while (true){

        Lista n = (*l) -> prox;

        *l = n ->prox;

        free(n);
        

        if (aux == *l){

            Lista n = *l;

            free(n);

            break;
        }




    }




}





Lista Y;

int main(){

    enfileirar(1, &Y);

    enfileirar(2, &Y);

    enfileirar(3, &Y);


}

