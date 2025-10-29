import MediaCard from './MediaCard';

const ContentGrid = ({ items }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-x-4 gap-y-6">
    {items.map((item) => (
      <MediaCard key={item.id} item={item} />
    ))}
  </div>
);

export default ContentGrid;
