import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';
function App() {
  return (
    <div>
      <Heading attr={123} attr2='String'>Olá Mundo 1</Heading>
      
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        voluptatum labo re sed iusto iste perspiciatis est et hic accusamus
        inventore aperiam animi laudantium itaque earum, fugiat, veniam possimus
        ipsum ab?
      </p>
    </div>
  );
}

export { App };
