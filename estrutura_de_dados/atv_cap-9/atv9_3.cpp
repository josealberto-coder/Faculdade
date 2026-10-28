#include <stdio.h>

#include "lista.h"



int ultimo(Lista L){

    if (L == NULL)return 0;

    while (L -> prox != NULL){

        L = L -> prox;
    }

    return L -> item;

}


Lista H = no(1, no(2, no(3, NULL)));




int main(){

    printf("%d", ultimo(H));

}