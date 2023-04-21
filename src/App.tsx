import CountdownTimer from './Countdown';

const App: React.FC = () => {
  const expiryTimestamp = Date.now() + 86400000; // 24 hours from now

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer expiryTimestamp={expiryTimestamp} />
    </div>
  );
};

export default App;
