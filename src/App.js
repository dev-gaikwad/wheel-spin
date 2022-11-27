import Wheel from './components/Wheel';
function App() {
  const prizes = [
    'Buy 1 Get 1 Free',
    '30% sitewide off',
    'Hot Chocolate FREE with Tea',
    'Offer 4',
    'Offer 5',
    'Offer 6',
  ];
  return (
    <>
      <Wheel item={prizes} />
    </>
  );
}

export default App;
