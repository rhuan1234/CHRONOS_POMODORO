import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContent/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';
import { MainRouter } from './routes/MainRouter';
export function App() {

  return (
    
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter/>
      </MessagesContainer>
      
            
    </TaskContextProvider>
  );
}