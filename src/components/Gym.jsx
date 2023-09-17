import Features from "./Features";

const Gym = ({data}) => {

    const {price, features, package_name} = data;

    return (
        <div className="bg-slate-900 shadow-lg rounded-lg p-6 text-white space-y-6 flex flex-col">
            <div className="text-center">
                <span className="text-5xl">{price}</span>
                <span className="text-2xl">/month</span>
            </div>
            <h2 className="text-3xl text-center ">{package_name}</h2>
            {/* {
                features.map((feature, i) => <Features key={i} feature={feature}></Features>)
            } */}
            <Features features={features}></Features>
            <button className="w-full text-white font-semibold py-3 rounded-lg bg-green-400 hover:bg-green-700">Buy Now</button>
        </div>
    );
};

export default Gym;