import Sort from '@/components/Sort';

// Interface
interface Status {
  id: string;
  title: string;
  status: boolean;
}

const regions = [
  { bname: 'Americas', code: 'AM' },
  { bname: 'Asia', code: 'AS' },
  { bname: 'Europe', code: 'EU' },
  { bname: 'Oceania', code: 'OC' },
]

const status: Status[] = [
  {
    id: 'no-independent',
    title: 'Member of the United Nations',
    status: false,
  },
  {
    id: 'independent',
    title: 'Independent',
    status: true,
  },
];

const Filters = () => {
  return (
    <div className="flex flex-col space-y-8">
      {/* TODO: Sort By */}
      <div className="relative w-full">
        <label className="block mb-2 text-gray-200 text-xs">Sort by</label>
        <Sort />
      </div>
      {/* TODO: Region */}
      <div className='relative w-full'>
        <label className="block mb-2 text-gray-200 text-xs">Region</label>
        <div>
          {regions.map((region) => (
            <div key={region.code} className="inline-block px-3 text-gray-200 transition duration-300 ease-in-out hover:text-gray-100 hover:bg-dark-100 rounded-xl py-1 cursor-pointer">
            { region.bname}
            </div>
          ))}
        </div>
      </div>
      {/* TODO: Status */}
      <div className='relative w-full'>
        <label className="block mb-2 text-gray-200 text-xs">Status</label>
        <div>
          {status.map((status) => (
            <div className='mb-2' key={status.id}>
              <input id={status.id} type="checkbox" className="h-5 w-5 rounded border-gray-200 text-gray-100 focus:ring-0 focus:ring-offset-0" />
              <label htmlFor={status.id} className="ml-2 text-gray-100">{status.title}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
