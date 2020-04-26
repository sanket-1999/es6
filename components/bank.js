class Account
{
    constructor(name,id,balance)
    {
        this.name=name;
        this.id=id;
        this.balance=balance;
    }

}


export class SavingsAccount extends Account
{
    constructor(name,id,balance,interest)
    {
        super(name,id,balance);
        this.interest=interest;
    }

    
 
  
}

export class CurrentAccount extends Account
{
    constructor(name,id,balance,cashcredit)
    {
        super(name,id,balance);
        this.cashcredit=cashcredit;
    }

   
}




export function total()
{
    
    let savingsAccount=new SavingsAccount("sanket",100,100,10);
    document.write("saving account balance and interest is :"+ savingsAccount.balance + " " + savingsAccount.interest +"<br>");
    
    let currentAccount=new CurrentAccount("sanket",101,101,101);
    
    document.write("current account balance and credit is :"+ currentAccount.balance + " " + currentAccount.cashcredit+" <br>");

   

    let total= savingsAccount.balance + ((savingsAccount.balance*savingsAccount.interest)/100) + currentAccount.balance + currentAccount.cashcredit;
    document.write("Total amount in account is : = "+total);
}