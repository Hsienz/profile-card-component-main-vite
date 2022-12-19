import victorImg from './assets/image-victor.jpg'
const Data = (props) => {
	return (
		<div className="text-center">
			<p className="text-Very_dark_desaturated_blue font-bold text-xl">{props.number}</p>
			<p className="text-Dark_grayish_blue text-sm tracking-widest font-bold">{props.type}</p>
		</div>
	);
};

const Card = () => {
	return (
		<div
			className="bg-white w-[420px] aspect-square flex flex-col justify-center items-center z-10
        bg-[url('/src/assets/bg-pattern-card.svg')] bg-[length:100%_35%] bg-no-repeat gap-4 rounded-3xl pt-10"
		>
			<img
				className="w-32 rounded-full border-white border-[5px] border-solid"
				src={victorImg}
				alt=""
			/>

			<div className="space-x-3 font-ks text-[18px]">
				<h1 className="inline font-bold text-xl tracking-wide text-Very_dark_desaturated_blue">Victor Crest</h1>
				<p className="inline font-bold text-Dark_grayish_blue text-xl">26</p>
			</div>
			<p className="font-ks text-[18px] text-Dark_grayish_blue relative bottom-3">London</p>
			<hr className="border-Dark_gray border-1 w-full"/>
			<div className="flex justify-around w-full font-ks text-[18px]">
				<Data number="80K" type="Followers" />
				<Data number="803K" type="Likes" />
				<Data number="1.4K" type="Photos" />
			</div>
		</div>
	);
};

export default Card;
