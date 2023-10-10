import Card from './components/Card'
import imgCard from "./assets/hero.png";
import imgAvatar from "./assets/avatar.png";

function App() {

  return (
    <>
      <Card 
        img={imgCard}
        title="Perfect solution for small business"
        desc="Small businesses need to generate leads to grow. You can use tools like Ringy."
        imgAvatar={imgAvatar}
        nameAuthor="Amy Burgess"
        profAuthor="Customer Manger, Solution Oy"/>
    </>
    
  )
}

export default App
