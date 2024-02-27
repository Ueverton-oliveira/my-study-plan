package main

import "fmt"

type CurrentAccount struct {
	holder        string
	numberBank    int
	numberAccount int
	balance       float64
}

func (c *CurrentAccount) Withdraw(withdrawValue float64) string {
	permitWithdraw := withdrawValue > 0 && withdrawValue <= c.balance
	if permitWithdraw {
		c.balance -= withdrawValue
		return "Saque realizado com sucesso"
	} else {
		return "Saldo insuficiente"
	}
}

func (c *CurrentAccount) Deposit(depositValue float64) {
	c.balance += depositValue
}

func main() {
	contaDaSilvia := CurrentAccount{}
	contaDaSilvia.holder = "Silvia"
	contaDaSilvia.balance = 500

	fmt.Println(contaDaSilvia.balance)

	fmt.Println(contaDaSilvia.Withdraw(500))
	fmt.Println(contaDaSilvia.balance)

}
