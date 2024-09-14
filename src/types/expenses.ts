export interface IEspenses {
  description: string;
  amount: number;
  category: string;
  id: string;
}

export interface IExpensesContext {
  expenses?: IEspenses[];
  addExpense?: (data: IEspenses) => void;
  setExpenses?: (data: IEspenses[]) => void;
}
