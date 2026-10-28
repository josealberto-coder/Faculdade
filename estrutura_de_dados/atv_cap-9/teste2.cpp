#include <stdlib.h>

#include <stdio.h>

int main(){

    int v[3];

    int *w = (int*)malloc(3*sizeof(int));

    w[0] = 10;

    printf("%d", w[0]);


}