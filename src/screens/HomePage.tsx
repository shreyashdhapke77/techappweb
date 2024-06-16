import ApplicationBar from "../components/ApplicationBar";
import TextInputField from "../components/common/TextInputField";

const HomePage = () => {
  return (
    <div>
      <ApplicationBar />
      <TextInputField
         label="Hello"
      />
    </div>
  );
};

export default HomePage;
