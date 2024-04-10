import { Poster } from "./components/Poster"
import young from "./assets/young.png";
import woman from "./assets/woman.png";
import jordi from "./assets/sant-jordi.png"
function App(){
  return(
    <>
      <Poster image={young} name="hong Meng" text="she is the base girl ever">
        <button>say hello</button>
      </Poster>
      <Poster image={woman} name="My Hong meng" text="she is a wonder full"/>
      <Poster image={jordi} name="Kim Tong" text="i love she so much"/>


      
    </>
  )
}
export default App