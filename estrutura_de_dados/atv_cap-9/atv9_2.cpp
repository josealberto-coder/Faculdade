#include <stdio.h>
#include "lista.h"



int ocorrencia(item x, Lista L){

    item total = 0;

    if (L == NULL)return 0;

    while (L != NULL){

        if (x == L -> item){

            total += 1;

            
        } 

        L = L ->prox;
    }

    return total;


}

Lista I = no(1, no(2, no(3, no(3, NULL))));




int main(){

    printf(fmt, ocorrencia(3 ,I));


}