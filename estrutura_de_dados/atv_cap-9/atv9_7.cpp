#include <stdio.h>

#include "lista.h"



int igual(Lista L, Lista L2){

    if (L == NULL || L2 == NULL)return 0;

    if (tamanho(L) != tamanho(L2)) return 0;


    while (L != NULL && L2 != NULL){


        if (L ->item != L2 -> item){

            return 0;
        }

        L = L-> prox;

        L2 = L2 -> prox;
    }

    return 1;
    
}


Lista L1 = no(1, no(2, no(3, no(4, NULL))));

Lista L2 = no(1, no(2, no(3, NULL)));



int main(){


    printf("%d",igual(L1, L2));


}