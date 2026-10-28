#include <stdio.h>
#include <stdlib.h>

#include <string.h>





typedef struct{
     int matricula;
     char nome[10];
}Aluno;


int main(){

     Aluno *p;

     p = (Aluno*)malloc(sizeof(Aluno));

     p ->matricula = 100; 
     
     strcpy(p -> nome, "joao");


     

     printf("%s\n", p -> nome);

     printf("%d",p -> matricula);



}