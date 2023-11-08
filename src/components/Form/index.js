import { useState } from "react";
import Stepper from "../Stepper";
import StepperControl from "../StepperControl";

import PersonalInfo from "../PersonalInfo";
import SelectPlan from "../SelectPlan";
import PickAdd from "../PickAdd";
import Finishing from "../Finishing";

function Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    "Personal Info",
    "Select your plan",
    "Pick add-ons",
    "Finishing up",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <PickAdd />;
      case 4:
        return <Finishing />;
      default:
    }
  };

  return (
    <div className="responsive-app md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* Stepper */}
      <div className="container horizontal mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>

      {/* Navigation controls */}
      <StepperControl />
    </div>
  );
}

export default Form;
