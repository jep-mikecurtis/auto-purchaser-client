import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'
import store from './redux/store';
import Home from './pages/Home';

// Home Page
test('Home Page Opens', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  expect(getByText(/Welcome To Auto Purchaser/i)).toBeInTheDocument();
});

test('Home form fill out', () => {
  // Get Dom
  const dom = render(
    <Provider store={store}>
      <Home />
    </Provider>,
    {wrapper: MemoryRouter}
  )

  // Query All Inputs
  const nextButton = dom.container.querySelector('button#btnStepOne');
  const purchasePrice = dom.container.querySelector('input[name="purchase_price"]');
  const yearlyIncome = dom.container.querySelector('input[name="yearly_income"]');
  const autoMake = dom.container.querySelector('input[name="auto_make"]');
  const autoModel = dom.container.querySelector('input[name="auto_model"]');
  const creditScore = dom.container.querySelector('input[name="credit_score"]');

  // Make Sure Next Button Has Class cursor-not-allowed
  // Because The Form Is Not Filled Out
  expect(nextButton).toHaveClass('cursor-not-allowed')

  // Check Purchase Price Is Formatting
  fireEvent.change(purchasePrice, { target: { value: '23000' } })
  expect(purchasePrice.value).toBe('$23,000')

  // Check Make & Model
  fireEvent.change(autoMake, { target: { value: 'Dodge' } })
  expect(autoMake.value).toBe('Dodge')

  fireEvent.change(autoModel, { target: { value: 'Ram' } })
  expect(autoModel.value).toBe('Ram')

  // Check Yearly Income Is Formatting
  fireEvent.change(yearlyIncome, { target: { value: '100000' } })
  expect(yearlyIncome.value).toBe('$100,000')

  // Check Credit Score
  fireEvent.change(creditScore, { target: { value: "650" } })
  expect(creditScore.value).toBe("650")

  // See If Next Button Is Now Enabled
  expect(nextButton).not.toHaveClass('cursor-not-allowed')

  // Step 2
  fireEvent.click(nextButton);
  const nextButtonTwo = dom.container.querySelector('button#btnStepTwo');
  const name = dom.container.querySelector('input[name="name"]');
  const email = dom.container.querySelector('input[name="email"]');
 
  // Check To Make Sure Button Is Disabled
  expect(nextButtonTwo).toHaveClass('cursor-not-allowed')

  // Check Name && Email
  fireEvent.change(name, { target: { value: 'Michael Curtis' } })
  expect(name.value).toBe('Michael Curtis')

  fireEvent.change(email, { target: { value: 'mcurtis@jepcapital.com' } })
  expect(email.value).toBe('mcurtis@jepcapital.com')

  // Check To Make Sure Button Is Not Disabled
  expect(nextButtonTwo).not.toHaveClass('cursor-not-allowed')
  fireEvent.click(nextButtonTwo);
})





