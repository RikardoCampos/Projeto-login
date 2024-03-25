


const studant = [
    {name:'rikardo',teste: 7 },
    {name:'Maria',teste: 5 },
    {name:'João',teste: 8 },
    {name:'Valentina',teste : 9 },
    {name:'Ana',teste : 3 },
    {name:'Carla',teste : 2 },
    {name:'Tania',teste : 10 },
]

const lista = studant.map(alunos => {
return{
    Aluno:alunos.name, 
    Resultado: alunos.teste >= 5 ? 'APROVADO' : 'REPROVADO'


}
}
)
console.log(lista)