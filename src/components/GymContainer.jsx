import Gym from "./Gym";

const GymContainer = () => {

    const fakeGymData = [
        {
          id: 1,
          package_name: 'Basic Fitness Package',
          price: '$50',
          features: ['Cardio Equipment', 'Strength Training', 'Group Classes']
        },
        {
          id: 2,
          package_name: 'Premium Fitness Package',
          price: '$60',
          features: ['Personal Trainer', 'Sauna', 'Yoga Studio', 'Nutrition Guidance']
        },
        {
          id: 3,
          package_name: 'Standard Fitness Package',
          price: '$45',
          features: ['Free Weights', 'Circuit Training', 'Spinning Classes', 'Pilates']
        },
        {
          id: 4,
          package_name: 'Ultimate Wellness Package',
          price: '$70',
          features: ['Indoor Pool', 'Massage Therapy', 'Nutrition Counseling', 'Spa Access', 'Steam Room']
        },
        {
          id: 5,
          package_name: 'FlexFit Plus Package',
          price: '$55',
          features: ['Treadmills', 'Boxing Ring', 'Pilates Studio', 'Cycling Classes', 'Strength & Conditioning']
        }
      ];

    return (
        <div className="grid md:grid-cols-3 gap-6 m-12">
            {
                fakeGymData.map(data => <Gym key={data.id} data={data}></Gym>)
            }
            
        </div>
    );
};

export default GymContainer;