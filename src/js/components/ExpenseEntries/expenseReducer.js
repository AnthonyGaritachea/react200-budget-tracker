const defualtState = {
  description: '',
  amount: '',
  lineItems: [],
};


export default function expenseReducer(state = defualtState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_EXPENSE_DESCRIPTION': {
      return {
        ...state,
        description: payload.description
      };
    }

    case 'UPDATE_EXPENSE_AMOUNT': {
      return {
        ...state,
        amount: payload.amount
      };
    }

    case 'ADD_EXPENSE': {
      const { description, amount, id } = payload;
      return {
        description: '',
        amount: '',
        lineItems: [
          ...state.lineItems,
          { description, amount, id }
        ],
      };
    }

    default: {
      return state;
    }
  }
}