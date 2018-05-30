import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test ('should setup remove expense action object', () => {
  const action = removeExpense({id: 'foo'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    ID: 'foo'

  })
})