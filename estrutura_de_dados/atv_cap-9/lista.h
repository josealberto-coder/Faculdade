#include <stdio.h>

#include <stdlib.h>

#define fmt "%d"


typedef int item;

typedef struct no{

    item item;

    struct no *prox;
    
}*Lista;



Lista no(item x, Lista p){

    Lista n = (Lista)malloc(sizeof(struct no));

    n -> item= x;

    n -> prox = p;

    return n;

}

void anexar(Lista *A, Lista B){

    if (B == NULL)return;

    while(*A != NULL) A = &(*A) -> prox;

    *A = B;
}




void exibir(Lista L){


    while (L != NULL){
       
        printf(fmt, L -> item);

        L = L -> prox;

    }
}



void destroi(Lista *l){

    while (*l != NULL){

        Lista n = *l;

        *l = n -> prox;

        free(n);

    }

}



int tamanho(Lista L){

    if (L == NULL) return 0;

    return 1 + tamanho(L -> prox);


}

int pertinencia(item x, Lista L){

    if (L == NULL)return 0;

    if (x == L -> item)return 1;

    return pertinencia(x, L -> prox);
}



Lista clonar(Lista L){

    if (L == NULL)return NULL;

    return no(L -> item, clonar(L-> prox));
}




void exibir_inversa(Lista L){

    if (L == NULL)return;

    exibir_inversa(L -> prox);

    printf(fmt, L -> item);
}

