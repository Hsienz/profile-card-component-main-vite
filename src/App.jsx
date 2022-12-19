import Card from "./Card";
function App() {
	return (
		<div className="absolute flex flex-col justify-center items-center min-h-full h-fit w-full bg-Dark_cyan py-12
		after:content-[''] after:bg-[url('/src/assets/bg-pattern-top.svg')] after:inline after:absolute after:h-full after:aspect-square after:right-1/2 after:bottom-1/2 after:bg-no-repeat after:bg-cover after:-scale-y-100 after:bg-right-bottom
		before:content-[''] before:bg-[url('/src/assets/bg-pattern-bottom.svg')] before:inline before:absolute before:left-1/2 before:top-1/2 before:w-1/2 before:h-1/2 before:bg-no-repeat before:bg-cover">
			<Card></Card>
		</div>
	);
}

export default App;
