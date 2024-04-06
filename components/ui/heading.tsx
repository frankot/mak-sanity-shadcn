export default function Heading({ title, subtitle }) {
  return (
    <div className="border-b border-orange-300 pb-5 max-w-7xl mx-auto">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-2 max-w-4xl text-sm text-gray-500">{subtitle}</p>
      )}
    </div>
  );
}
