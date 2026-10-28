#include <stdio.h>

#include "lista.h"

int soma(Lista L){

    if (L == NULL) return 0;

    return (L -> item) + soma(L -> prox);
}



Lista B = no(1, no(2, no(3, no(4, no(5, NULL)))));



int main(){

    printf(fmt, soma(B));


}