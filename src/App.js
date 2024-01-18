import logo from './logo.svg';
import './App.css';
import Card from './card';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let priceCardDetails = [
    {
      planName: "Free",
      price: "$0/month",
      user: "Single user",
      Storage: "50GB Storage",
      Project: "Unlimited Public Projects",
      Access: "Community Accss",
      Report: "Monthly Status Report"
    }, {
      planName: "plus",
      price: "$9/month",
      user: "5 user",
      Storage: "50GB Storage",
      Project: "Unlimited Public Projects",
      Access: "Community Accss",
      Report: "Monthly Status Report"
    },
    {
      planName: "Free",
      price: "$49/month",
      user: "unlimited user",
      Storage: "50GB Storage",
      Project: "Unlimited Public Projects",
      Access: "Community Accss",
      Report: "Monthly Status Report"
    }
  ]
  return ( <div className="container" >
      <div className="row">
      <Card data={priceCardDetails[0]}/>
      <Card data={priceCardDetails[1]}/>
      <Card data={priceCardDetails[2]}/>
      </div>
    </div>
    
  );
}


export default App;
