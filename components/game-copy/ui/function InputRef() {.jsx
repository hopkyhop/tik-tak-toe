function RerenderCounter() {
  const [counter, setCounter] = useState(0);
  const renderCounterRef = useRef(0);

  renderCounterRef.current += 1;

  return (
    <div>
      <p>counter: {counter}</p>
      <p>renders: {renderCounterRef.current}</p>
      <button onClick={
        () => setCounter((prev) => prev + 1)
      }>increment</button>
    </div>
  );
}