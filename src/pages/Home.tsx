import Search from '@/components/Search';
import Filters from '@/components/Filters';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto -mt-16 bg-dark-200 min-h-screen rounded-lg p-6">
      <div className="flex justify-between">
        <h5 className='text-base text-gray-200 font-semibold'>Founds 232 countries</h5>
        <div className='w-80'>
          <Search
            id="search-input"
            placeholder="Search by Name, Region, Subregion"
            onChange={() => {}}
          />
        </div>
      </div>
      {/* Section */}
      <div className='flex flex-row space-x-4 mt-6'>
        <div className='w-1/4'>
          <Filters />
        </div>
        <div className='w-3/4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam incidunt vel veniam nobis rem perspiciatis delectus enim excepturi ipsam sit modi quia, odio minima natus nam vero dolorum doloremque quibusdam.
        </div>
      </div>
    </div>
  );
};

export default HomePage;