const Hello = () => {
  return <h2>Welcome to React 19</h2>;
};

const Book = () => {
  return (
    <>
      <h1>Let's react</h1>
      <h2>Price: 699</h2>
      <h3>Rating: 4.7</h3>
    </>
  );
};

export default function App() {
  return (
    <>
      <h1 className="text-center bg-black-300 text-green-600">Hello React</h1>
      <Hello />
      <Book />
    </>
  );
}