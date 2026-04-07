/**
 * 부모 컴포넌트 : 최상위 컴포넌트
 */
import './App.css'
import Header from './components/Header.jsx';

export default function App() {
  let name = '홍길동';
  let age = 20
  let numbers = [1, 2, 3, 4, 5];
  let fruits = {
    name: 'apple',
    emoji: '🍎'
  }

  return (  
    <>
    <div>dfdf</div>
    <div>
      <h1 style={{color:'blue'}}>Welcome to React World!!</h1>
      <Header />
      <ul>
        <li>{name + "학생"}</li>
        <li>{age + 10}</li>
        <li>{numbers}</li>
        <li>{fruits.name}</li>
        <li>{fruits.emoji}</li>

      </ul>
      </div>
    </>
  )
}

