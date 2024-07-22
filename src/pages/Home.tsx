import Search from '../components/Search';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto -mt-16 bg-dark-200 min-h-screen rounded-lg p-6">
      <div className="flex justify-between">
        <h5>Founds 232 countries</h5>
        <div className='w-80'>
          <Search
            id="search-input"
            placeholder="Search by Name, Region, Subregion"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;