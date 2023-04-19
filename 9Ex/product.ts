interface product{
    id:number,
    name:string,
    price:number,
    quant:number
}
var prods:product[] = [
    {
        id:1,
        name:'biscuit',
        price:10,
        quant:13,
    },
    {
        id:2,
        name:'bun',
        price:30,
        quant:5,
    },
    {
        id:3,
        name:'halidrams',
        price:25,
        quant:10,
    },
    {
        id:4,
        name:'jaggery',
        price:100,
        quant:20,
    },
    {
        id:5,
        name:'ground nut',
        price:20,
        quant:15,
    },
]
const getProductByID = (id:number):product => prods.filter(p=>p.id===id)[0]

console.log(getProductByID(2))