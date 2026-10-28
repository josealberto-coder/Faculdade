#include <stdio.h>
#include <iostream>
#include <string.h>
#include <stdlib.h>
using namespace std;

typedef struct elemento{
	int cod;
	char nome[23];
	elemento *prox;
};




struct elemento *inicio=NULL, *fim=NULL;



//anexar a lista B ao final da Lista A
void anexa(struct elemento *A, struct elemento *B){

	while(A != NULL){

		if(A == NULL)return;



		struct elemento *atual = A;
		
		while(atual -> prox!= NULL){

			atual = atual -> prox;

		}

		atual ->prox = B;

	}	
}




struct elemento *no(int v,char n[23],struct elemento *p) {
	   
	   struct elemento *novo= (struct elemento *)malloc(sizeof(struct elemento));	

	   novo->cod=v;
	   strcpy(novo->nome,n);
	   novo->prox=p;
	   return novo;
}

// adicionar ao final da lista
//complete o codigo
void addFinal(int c,char n[23]){
    struct elemento *novo= no(c,n,NULL);
	
	if(inicio == NULL){
		inicio = novo;

		fim = novo;
	}else{
		fim -> prox = novo;

		fim = novo;
	}


	
}
// adicionar no inicio da lista
//complete o codigo
void addInicio(int c,char n[23]){
    struct elemento *novo= no(c,n,NULL);

	if(inicio == NULL){

		inicio = novo;
		fim = novo;

	}else{
		novo ->prox = inicio;

		inicio = novo;
	}

}


//adicionar ordenado (use codigo como a chave de ordenacao)
//complete o codigo
void addOrdenado(int c, char n[23]){
	struct elemento *novo= no(c,n,NULL);
	
	
}

//mostrar todos os elementos da lista (do inicio ao final)
//complete o codigo
void mostrar(){

	if (inicio == NULL)return;

	struct elemento *atual = inicio;

	while (atual != NULL){

		cout<<"Nome: "<<atual->nome<<endl;
		cout<<"Codigo: "<<atual->cod<<endl;

		atual = atual -> prox;

	}
}

// remover um elemento da lista (procure o elemento pelo codigo)
// "cod" recebe o valor procurado
//complete o codigo
int remove(int cod){

	struct elemento *atual = inicio;

	struct elemento *anterior = atual;

	

	while(atual ->cod != cod){

		anterior = atual;

		atual = atual -> prox;

		



	}

	if(inicio->cod == cod){

		inicio = atual -> prox;

		free(atual);

	}else{
		anterior ->prox = atual -> prox;

		free(atual);
	}
			  	
} 


// procura a ocorrencia de um elemento na lista
// "cod" � o valor procurado
//complete o codigo		
int procura(int cod){

	if (inicio == NULL)return 0;

	struct elemento *atual = inicio;

	int total = 0;

	while (atual != NULL){
		if (atual->cod == cod){
			total += 1;

		}

		atual = atual -> prox;
	}	
}

//destruir a lista completa
//complete o codigo

void destroi(struct elemento *a){

	while (a != NULL){

		struct elemento *atual = a;

		a = atual -> prox;

		free(atual);
		
	}
}


//complete o codigo
void inverterLista(struct elemento *atual){


	if (atual == NULL) return;

	inverterLista(atual ->prox);

	cout<<"Nome: "<<atual -> nome<<endl;

	cout<<"Código: "<<atual -> cod<<endl;

}

main(){

	addInicio(10, "jose");
	addInicio(3, "joao");

	inverterLista(inicio);
	
}
