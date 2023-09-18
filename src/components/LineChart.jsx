import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const LineChart = () => {

    const fakeGymDataShort = [
        { id: 1, package_name: 'Basic Package', price: 50 },
        { id: 2, package_name: 'Premium Package', price: 60 },
        { id: 3, package_name: 'Standard Package', price: 45 },
        { id: 4, package_name: 'Ultimate Package', price: 70 },
        { id: 5, package_name: 'FlexFit Package', price: 55 }
    ];


    return (
        <div className='max-w-[80vw] m-auto text-center bg-slate-900 p-24 rounded-lg'>
            <h1 className='text-5xl mb-12 text-white'>Price comparision between different packages</h1>
            <ComposedChart height={300} width={900} data={fakeGymDataShort}>
                <Line dataKey="price" stroke='green'></Line>
                <Bar dataKey="price" fill='purple' barSize={20}></Bar>
                <Area dataKey="price" fill='skyblue' stroke='white' type='monotone'></Area>
                <CartesianGrid></CartesianGrid>
                <XAxis dataKey="package_name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </ComposedChart>
        </div>
    );
};

export default LineChart;