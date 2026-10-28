#include <stdio.h>

#include "lista.h"





Lista inversa(Lista L) {    
    Lista R = NULL;    

    while (L != NULL) {   

        R = no(L->item, R);  

        L = L->prox;    
    }    
        return R; 
    }


Lista A = no(1, no(2, no(3, NULL)));


int main(){

    inversa(A);

}