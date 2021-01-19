import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

// Types
import {AutoType, AutoStateType} from '../redux/actions/auto/AutoTypes';

// Actions
import {AutoApply} from '../redux/actions/auto/AutoActions';

// Components
import Card from "../components/Card";
import { InputText, InputMoney, InputNumber } from "../components/Inputs";
import { ButtonClass } from "../components/types/ButtonsTypes";


const Home = () => {
  // Init Dispatch
  const dispatch = useDispatch();

  // Get Autos From Redux Store
  const auto = useSelector((state: AutoStateType) => state.auto);

  // State
  const [step, setStep] = useState(1);
  const [purchasePrice, setPurchasePrice] = useState("");
  const [autoMake, setAutoMake] = useState("");
  const [autoModel, setAutoModel] = useState("");
  const [yearlyIncome, setYearlyIncome] = useState(auto[0]?.yearly_income ?? "");
  const [creditScore, setCreditScore] = useState(auto[0]?.credit_score ?? null);
  const [name, setName] = useState(auto[0]?.name ?? "");
  const [email, setEmail] = useState(auto[0]?.email ?? "");
  const [emailErr, setEmailErr] = useState("");

  // Check State Before Going To The Next Step
  const stepOneComlete = purchasePrice !== "" &&
                          autoMake !== "" &&
                          autoModel !== "" &&
                          yearlyIncome !== "" &&
                          creditScore !== 0 &&
                          creditScore >= 300;

  const stepTwoComplete = name !== "" && email !== "";

  const nextStep = (step: number | string) => {
    const emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if (step === 2) {
      setStep(2);
    }

    if (step === 'complete') {
      const data: AutoType = {
        email,
        name,
        purchase_price: purchasePrice,
        auto_make: autoMake,
        auto_model: autoModel,
        yearly_income: yearlyIncome,
        credit_score: creditScore
      }

      if(emailReg.test(data.email)) {
        setEmailErr('');
        dispatch(AutoApply(data));
      } else {
        setEmailErr('Must be valid email.')
      }

    }
  };

  return (
    <div className="container mx-auto flex justify-center py-20">
      {step === 1 && (
        <Card imgSrc="https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80">
          <div className="flex flex-wrap">
            <h1 className="text-white font-bold flex-auto text-xl font-semibold">
              Welcome To Auto Purchaser
            </h1>

            <div className="w-full flex-none text-sm font-bold text-green-300 mt-2 text-xl">
              Over 10,000 Vehicle Types 
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            aperiam architecto aspernatur eveniet in mollitia nisi nulla rerum
            vel. Expedita?
          </p>
          <div className="flex flex-col space-y-2 mt-4">
            <InputMoney name="purchase_price" label="Auto Purchase Price" setState={setPurchasePrice}/>
            <div className="flex space-x-2">
              <InputText name="auto_make" label="Auto Make" setState={setAutoMake}/>
              <InputText name="auto_model" label="Auto Model" setState={setAutoModel}/>
            </div>
            <InputMoney name="yearly_income" label="Estimated Yearly Income" inputValue={yearlyIncome} setState={setYearlyIncome}/>
            <InputNumber
              name="credit_score"
              label="Estimated Credit Score ( 300 - 850 )"
              minNum={0}
              maxNum={850}
              setState={setCreditScore}
              inputValue={creditScore}
            />

            {/* Submit Button */}
            <div className="pt-4">
              <button
                id="btnStepOne"
                className={stepOneComlete ? ButtonClass.primary : ButtonClass.primaryDisabled}
                onClick={() => stepOneComlete ? nextStep(2) : null}
              >
                Next
              </button>
            </div>
          </div>
        </Card>
      )}
      {step === 2 && (
        <Card imgSrc="https://images.unsplash.com/photo-1550355291-bbee04a92027?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80">
          <div className="flex flex-wrap">
            <h1 className="text-white font-bold flex-auto text-xl font-semibold">
              Welcome To Auto Purchaser
            </h1>

            <div className="w-full flex-none text-sm font-bold text-green-300 mt-2 text-xl">
              Over 10,000 Vehicle Types
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            aperiam architecto aspernatur eveniet in mollitia nisi nulla rerum
            vel. Expedita?
          </p>
          <div className="flex flex-col space-y-2 mt-4">
            <InputText name="name" label="Name" inputValue={name} setState={setName}/>
            <InputText name="email" label="Email" inputValue={email} setState={setEmail}/>
            <small className="text-red-600">
              {emailErr}
            </small>
            {/* Submit Button */}
            <div className="pt-4">
              <button 
              id="btnStepTwo"
              className={stepTwoComplete ? ButtonClass.primary : ButtonClass.primaryDisabled}
              onClick={() => stepTwoComplete ? nextStep("complete") : null}>Submit</button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Home;
