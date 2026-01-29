import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContent/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContent/taskAction";

export type HomeProps = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>,
}

export function Settings(){
  const {state, dispatch} = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);
    showMessage.dismiss()
    if(isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)){
      showMessage.error('Por favor, use apenas números para todos os campos');
      return;
    }

    if(workTime < 1 || workTime > 99){
      showMessage.error('Por favor, use apenas números entre 1 e 99 para foco');
      return;
    }

    if(shortBreakTime < 1 || shortBreakTime > 30){
      showMessage.error('Por favor, use apenas números entre 1 e 30 para descanso curto');
      return;
    }

    if(longBreakTime < 1 || longBreakTime > 60){
      showMessage.error('Por favor, use apenas números entre 1 e 60 para descanso longo');
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime
      }
    });
    
    showMessage.success('Configurações salvas com sucesso!');

  }
  return(
    <MainTemplate>

      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{textAlign: 'center'}}>Modifique as configurações para tempo de foco, 
        descanso curto e descanso longo</p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action="" className="form">
          <div className="formRow">
            <DefaultInput id="workTime" 
            labelText="Foco" 
            ref={workTimeInputRef}
            defaultValue={state.config.workTime}
            type="number"/>
          </div>
          <div className="formRow">
            <DefaultInput id="shortBreakTime" 
            labelText="Descanso Curto" 
            ref={shortBreakTimeInputRef}
            defaultValue={state.config.shortBreakTime}
            type="number"/>
          </div>
          <div className="formRow">
            <DefaultInput id="longBreakTime" 
            labelText="Descanso Longo" 
            ref={longBreakTimeInputRef} 
            defaultValue={state.config.longBreakTime}
            type="number"/>
          </div>
          <div className="formRow">
            <DefaultButton icon={<SaveIcon/>}></DefaultButton>
          </div>
        </form>
      </Container>

    </MainTemplate>
  );
}