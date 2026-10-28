#include <stdio.h>

#include "lista.h"



Lista substituir(item x, item Y, Lista L){

    if (L == NULL)return 0;

    while (L != NULL){

        if (L -> item == x){

            L -> item = Y;

        }

        L = L -> prox;




    }

}


Lista c = no(1, no(1, no(3, no(4, NULL))));



int main(){

    substituir(1, 3, c);

   

    exibir(c);

}