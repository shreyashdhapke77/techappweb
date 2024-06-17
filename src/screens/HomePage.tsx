import ApplicationBar from "../components/ApplicationBar";
import CustomButton from "../components/common/Button";
import TextInputField from "../components/common/TextInputField";
import CustomText from "../components/common/Text";

const HomePage = () => {
  return (
    <div>
      <ApplicationBar />
      <TextInputField
         label="Hello"
      />
      <CustomButton
         label="Submit"
      />
      <CustomText
        label="My Text"
      />
    </div>
  );
};

export default HomePage;
