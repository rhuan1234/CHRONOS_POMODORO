
import { useTaskContext } from '../../contexts/TaskContent/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './Styles.module.css';

export function Cycles() {
  const {state} = useTaskContext();
  const cycleStep = Array.from({length: state.currentCycle})
  const cycleDescriptionMap = {
    workTime: 'foco',
    shortBreakTime: 'descanso curso',
    longBreakTime: 'descanso longo'
  }

  return (
    <div className={styles.cycles}>
      <span>Ciclos: </span>

      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle)
          return <span
          key={nextCycle+index} 
          className={`${styles.cycleDot}
           ${styles[nextCycleType]}`}
           aria-label={`Indicador de Ciclo ${cycleDescriptionMap[nextCycleType]}`}
           title={`Indicador de Ciclo ${cycleDescriptionMap[nextCycleType]}`}></span>;
        })}
       { /* */}
       

      </div>
    </div>
  );
}
