import Button from 'components/buttton';
import { useMemo, useState } from 'react';
import { Container, Title, Input } from './prime.styled';

function isPrimeNumber(number?: number): string {
  console.log('checking prime...');
  // take input from the user
  let isPrime = true;
  if (!number) return '';
  // check if number is equal to 1
  if (number === 1) {
    return '1 is neither prime nor composite number.';
  }

  // check if number is greater than 1
  if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      return `${number} is a prime number`;
    }
    return `${number} is a not prime number`;
  }

  // check if number is less than 1

  return 'The number is not a prime number.';
}

function PrimeNumber(): JSX.Element {
  const [num, setNumber] = useState(0);
  const [inc, setInc] = useState(0);

  const checkPrime = useMemo(() => isPrimeNumber(num), [num]);

  function clickHandler() {
    setInc((prevVal) => prevVal + 1);
  }

  return (
    <Container>
      <Title>Prime number</Title>
      Enter a number:
      {' '}
      <Input
        type="text"
        value={num}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <div>{checkPrime}</div>
      <Button onClick={clickHandler}>Re-render</Button>
      <div>
        INC:
        {inc}
      </div>
    </Container>
  );
}

export default PrimeNumber;
