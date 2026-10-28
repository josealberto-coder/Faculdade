#include <stdio.h>
#include <iostream>

using namespace std;

typedef struct aluno{
	int mat;
	string nome;	
}Aluno; 

Aluno lista[30];

int qtd = 0;






void incluirDesordenado(Aluno e){

	lista[qtd] = e;

	qtd +=1; 
}

//retorna a posicao do elemento procurado
int procura(int mat){	
	for(int i = 0; i < qtd; i++){
		if(lista[i].mat == mat){

			return i;
		}

	}
}

//recebe a posicao e imprime o elemento na tela
void mostra_posicao(int pos){
	cout<<"Nome:"<<lista[pos].nome<<endl;

	cout<<"Matrícula:"<<lista[pos].mat<<endl;

}

//mostra TODOS os elementos da lista
void mostra_tudo(){	
	for (int i=0; i < qtd; i++){
		mostra_posicao(i);
		
	}
	
}

//estrat�gia 1: colocar o ultimo elemento da lista na posi��o do elemento removido
void remover00(int posi){
	lista[posi] = lista[qtd - 1];
	
	qtd --;

	}



//estrat�gia 2: mover TODOS os elementos que est�o AP�S  o elemento que deve ser removido UMA POSI��O A FRENTE.
void remover01(int posi){

	for(int i = posi; i < (qtd - 1); i++){

		lista[i] = lista[i + 1];

	}
	return;

}

main(){

	Aluno novoaluno;

	novoaluno.nome =  "joao";
	novoaluno.mat = 10;
	incluirDesordenado(novoaluno);


	novoaluno.nome = "jose";
	novoaluno.mat = 10;
	incluirDesordenado(novoaluno);

	mostra_posicao(1);




}
	
	
	

