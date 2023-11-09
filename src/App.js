import { useRef, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai'
import CircularProgress from '@mui/material/CircularProgress';

// components
import PromptCard from "./components/prompt/component"
import Header from './components/header/component';
import NoPrompts from './components/no_prompts/component';

// services
import { getPrompt, } from "./services/prompt"

// styles
import './App.css';

const testPrompts = [

  {
    prompt: "How are you?",
    reply: "I dont know, I'm just an AI without feelings."
  },
  {
    prompt: "Does that mean that there is an AI out there with feelings?",
    reply: "I dont know that either, I would guess not from my data."
  },
  {
    prompt: "How are you?",
    reply: "I dont know, I'm just an AI without feelings."
  },
  {
    prompt: "Does that mean that there is an AI out there with feelings?",
    reply: "I dont know that either, I would guess not from my data."
  },
  {
    prompt: "How are you?",
    reply: "I dont know, I'm just an AI without feelings."
  },
  {
    prompt: "Does that mean that there is an AI out there with feelings?",
    reply: "I dont know that either, I would guess not from my data."
  },
  {
    prompt: "How are you?",
    reply: "I dont know, I'm just an AI without feelings."
  },
  {
    prompt: "Does that mean that there is an AI out there with feelings?",
    reply: "I dont know that either, I would guess not from my data."
  },
]
function App() {
  const promptListRef = useRef()
  const [prompt, setPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [prompts, setPrompts] = useState([])


  const submitPrompt = async ()=> {
    console.log("submitPrompt called");
    if( !prompt || isLoading ) return

    setIsLoading(true)
    const data = await getPrompt({ prompt, })

    console.log('====================================');
    console.log("data ", data);
    console.log('====================================');
    if( !data ) {
      setIsLoading(false)
    }

    setPrompts([ ...prompts, { prompt, reply: data?.reply, } ])
    setPrompt('')
    setIsLoading(false)

    promptListRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">

      {/* header */}
      <Header />

      {/* prompts */}
      <div className='prompts_list'>
        {
          prompts.map((prompt, index)=> {

            return (
              <PromptCard key={index} prompt={prompt} />
            )
          })
        }
        <div className='prompts_list_pad'  ref={promptListRef} />
      </div>

      { !prompts.length && <NoPrompts /> }

      {/* input */}
      <div className="row prompt_input">
        <input
          type="text"
          className="prompt_input_input"
          placeholder="Ask Yoda..."
          value={prompt}
          onChange={
            (e)=> setPrompt(e.target.value)
          }
        />
        <div className='prompt_input__icon' onClick={submitPrompt}>
          { !isLoading && <AiOutlineSend size={20} /> }
          { isLoading && <CircularProgress size={20} /> }
        </div>
      </div>
    </div>
  );
}

export default App;
