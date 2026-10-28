#include <stdio.h>

#include "lista.h"

int main(){

    Lista n = no(3, no(1, no(5, NULL)));

    exibir_inversa(n);

    return 0;
}


