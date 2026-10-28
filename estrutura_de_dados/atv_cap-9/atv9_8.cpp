#include <stdio.h>

#include "lista.h"

int enesimo(item x, Lista L){

    if (L == NULL)return 0;

    item n = 0;

    while (L != NULL){

        if (x == n){
            return L -> item;

        }

        n += 1;

        L = L -> prox;

    }
    return 0;
}


Lista V = no(1, no(2, no(3, no(4, no(5, NULL)))));




int main(){

    printf(fmt, enesimo(3 ,V));

}



