import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Anti-stingy Tip App';
  private billModel: number;
  private billAmount: number;
  private taxBillAmount: number;
  private tipAmounts = <object>[];
  private tipMessage: string;
  private totalBill: number;

  constructor() {
    this.billModel = 0;
    this.billAmount = 0;
    this.taxBillAmount = 0;
    this.tipMessage = '';
    this.totalBill = 0;
    this.tipAmounts = [
      {TipAmount:'10%', RawAmount: .10, Message: "Better than nothing..."},
      {TipAmount:'15%', RawAmount: .15, Message: "Not bad..."},
      {TipAmount:'18%', RawAmount: .18, Message: "Alright, Alright, Alright!"},
      {TipAmount:'20%', RawAmount: .20, Message: "Making it rain!"},
    ];
  }

  // Input field subscribes to keypress & only allows integers.
  numbersOnly(event: any) {
    const regEx = /[0-9\.\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!regEx.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  // Stores and displays the original Bill Amount (Could have just used 2 way binding but method required)
   getBillAmount(billModel) {
     this.billAmount = billModel;
     this.getTaxBillAmount(+this.billAmount);
  }

  // Calculates the bill with tax
  getTaxBillAmount = (billAmount) => {
    this.taxBillAmount = ((billAmount * 10/100) + billAmount);
  }

  // Calculates the tip and message to display based on button pressed
  getTotalBillAmount = (taxAmount, tipMessage) => {
    this.tipMessage = tipMessage;
    this.totalBill = ((this.taxBillAmount * taxAmount) + this.taxBillAmount);
  }

}
