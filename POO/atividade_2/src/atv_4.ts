function rest_parameter(..._strings: string[]): void{

    _strings.forEach((i)=>{
        
        console.log(i);
    });
}


rest_parameter("a", "b", "c", "d","e", "f", "...");