import Navbar from "./Component/eventhandling";
import ListgroupProp from "./Component/Prop";
function PortfoloioMain(){
  let listvalues = ["First","second","third","fourth","Five"];
  //given values to the prop
  return <div><Navbar/><ListgroupProp{...listvalues={listvalues}}/></div>
}

export default PortfoloioMain;