interface bankAcc{
    id: number,
    name: string,
    balance: number,
}
class Bank{
    withdraw(cust: bankAcc, amnt: number):number {
        if(cust.balance>amnt){
            cust.balance-=amnt
            return cust.balance
        }else 
            return -1
    }
    deposit(cust:bankAcc, amnt:number):number{
        cust.balance+=amnt
        return cust.balance
    }
    chkBalance(cust:bankAcc):number{
        return cust.balance
    }
    transfer(c1:bankAcc,c2:bankAcc,amnt:number):number[]{
        if(c1.balance>amnt){
            c1.balance-=amnt
            c2.balance+=amnt
            return [c1.balance,c2.balance]
        }else return [-1]
    }
}
let c1:bankAcc = {
    id: 1,
    name: 'Namasivaayam',
    balance: 10000,
}
let c2:bankAcc = {
    id: 2,
    name: 'Namachu',
    balance: 100,
}
let bank = new Bank()
let w:number = bank.withdraw(c1,1000)
console.log(w === -1?'Insufficient balance':'Current balance'+w)
let d:number = bank.deposit(c1,1000)
console.log('Current balance'+w)
let b:number = bank.chkBalance(c1)
console.log('Current balance'+b)
let t:number[] = bank.transfer(c1,c2,5000)
console.log(t[0] === -1?'Insufficient balance':'Current balance: C1 '+t[0]+' C2 '+t[1])