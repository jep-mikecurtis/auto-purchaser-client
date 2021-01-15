import React, { useState } from "react";

// Components
import Card from "../components/Card";
import { InputText, InputMoney, InputNumber } from "../components/Inputs";
import { ButtonClass } from "../components/types/ButtonsTypes";

const Home = () => {
  // State
  const [step, setStep] = useState(1);
  const [purchasePrice, setPurchasePrice] = useState("");
  const [autoMake, setAutoMake] = useState("");
  const [autoModel, setAutoModel] = useState("");
  const [yearlyIncome, setYearlyIncome] = useState("");
  const [creditScore, setCreditScore] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Check State Before Going To The Next Step
  const stepOneComlete = purchasePrice !== "" &&
                          autoMake !== "" &&
                          autoModel !== "" &&
                          yearlyIncome !== "" &&
                          creditScore !== 0;

  const stepTwoComplete = name !== "" && email !== "";

  const nextStep = (step: number | string) => {
    if (step === 2) {
      setStep(2);
    }

    if (step === 'complete') {
      console.log('complete');
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
            <InputMoney name="yearly_income" label="Estimated Yearly Income" setState={setYearlyIncome}/>
            <InputNumber
              name="credit_score"
              label="Estimated Credit Score"
              minNum={0}
              maxNum={850}
              setState={setCreditScore}
            />

            {/* Submit Button */}
            <div className="pt-4">
              <button
                className={stepOneComlete ? ButtonClass.primary : ButtonClass.primaryDisabled}
                onClick={() => nextStep(2)}
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
            <InputText name="name" label="Name" setState={setName}/>
            <InputText name="email" label="Email" setState={setEmail}/>
            {/* Submit Button */}
            <div className="pt-4">
              <button className={stepTwoComplete ? ButtonClass.primary : ButtonClass.primaryDisabled}
              onClick={() => nextStep("complete")}>Submit</button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Home;
