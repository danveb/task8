import { useState } from "react"; 
import "../../styles/eightball/EightBall.css"; 

export default function EightBall() {
  // useState 
  const [isShaking, setIsShaking] = useState<boolean>(false); 
  const [todos, setTodos] = useState<[]>([]); 
  const [todo, setTodo] = useState<string>(""); 

  // handleFormSubmit 
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    console.log(todo); 
    // save each todo task to todos []
  };

  // handleBallClick 
  const handleBallClick = () => {
    setIsShaking(true); 
    setTimeout(() => {
      setIsShaking(false); 
      setTodo(""); 
    }, 500); 
    // 
  }; 

  return (
    <div className="eightBall">
      <div 
        className={`eightBall__container ${isShaking ? "shake" : ""}`} 
        onClick={handleBallClick}
      >
        <div className="eightBall__inner">
          <div className="eightBall__content">
            <p>{todo ? todo : "Let's task8!"}</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text"
          id="todo"
          name="todo"
          value={todo}
          placeholder="enter todo"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
          className="form__control"
        />
        <p className="form__note">note: click on the 8Ball to shake it!</p>
      </form>
    </div>
  )
}