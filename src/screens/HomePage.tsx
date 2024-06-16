import ApplicationBar from "../components/ApplicationBar";
import CustomButton from "../components/common/Button";
import TextInputField from "../components/common/TextInputField";

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
    </div>
  );
};

export default HomePage;
