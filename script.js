
class ContaBancaria {
    constructor(saldoInicial) {
      this.saldo = saldoInicial;
    }
  
    
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de $${valor} realizado. Novo saldo: $${this.saldo}`);
    }
  
    
    sacar(valor) {
      if (valor > this.saldo) {
        console.log("Saldo insuficiente.");
      } else {
        this.saldo -= valor;
        console.log(`Saque de $${valor} realizado. Novo saldo: $${this.saldo}`);
      }
    }
  }
  
 
  const minhaConta = new ContaBancaria(1000);
  
  // Testando os métodos
  minhaConta.depositar(500); // Deposita $500
  minhaConta.sacar(200);     // Saca $200
  minhaConta.sacar(1500);    // Tenta sacar $1500 (saldo insuficiente)
  