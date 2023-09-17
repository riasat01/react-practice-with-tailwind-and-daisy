import { AiFillCheckCircle } from 'react-icons/ai'

const Features = ({features}) => {
    // console.log(features);
    return (
        <ol className="flex-grow">
            {
                features.map((feature, i) => <li className='flex items-center' key={i}><AiFillCheckCircle className='text-green-300 mr-2'></AiFillCheckCircle>{feature}</li>)
            }
        </ol>
    );
};

export default Features;