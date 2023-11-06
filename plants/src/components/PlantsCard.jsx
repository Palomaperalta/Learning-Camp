/* eslint-disable react/prop-types */
function PlantsCard({
  imgSrc,
  name,
  scientificname,
  cycle,
  watering,
  sunlight,
}) {
  return (
    <div className="flex flex-col bg-green-300 justify-center items-center gap-3 min-w-[400px] max-w-fit p-6 rounded font-sans">
      <div>
        {imgSrc ? <img src={imgSrc} alt="img" /> : <span>No Image</span>}
      </div>
      <div>
        <span className="font-medium">Name:</span> {name}
      </div>
      <div>
        <span className="font-medium">Scientific name:</span> {scientificname}
      </div>
      <div>
        <span className="font-medium">Cycle:</span> {cycle}
      </div>
      <div>
        <span className="font-medium">Watering:</span> {watering}
      </div>
      <div>
        <span className="font-medium">Sunlight:</span> {sunlight}
      </div>
    </div>
  );
}
export default PlantsCard;
