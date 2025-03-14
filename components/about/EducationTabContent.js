export default function EducationTabContent() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white">Education</h2>

      <ol className="relative border-l border-neutral-700 mt-6 ml-4">
         {/* Timeline Item: Bachelor of Science */}
         <li className="ml-4">
          <div className="absolute w-3 h-3 bg-neutral-700 rounded-full mt-1.5 -left-1.5 border border-neutral-900"></div>
          <time className="mb-1 text-sm font-normal leading-none text-neutral-500">
            2019 - 2024
          </time>
          <h3 className="text-lg font-semibold text-white">
            Bachelor of Science in Genetic Engineering and Biotechnology
          </h3>
          <p className="text-base font-normal text-neutral-400 mt-2">
            Shahjalal University of Science and Technology
          </p>
          <p className="text-base font-normal text-neutral-400 mt-2">
            Sylhet, Bangladesh
          </p>
        </li>
        {/* Timeline Item: HSC / 12th Grade */}
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-neutral-700 rounded-full mt-1.5 -left-1.5 border border-neutral-900"></div>
          <time className="mb-1 text-sm font-normal leading-none text-neutral-500">
            2016 - 2018
          </time>
          <h3 className="text-lg font-semibold text-white">
            Higher Secondary Certificate (HSC) / 12th Grade
          </h3>
          <p className="text-base font-normal text-neutral-400 mt-2">
            BAF Shaheen College
          </p>
          <p className="text-base font-normal text-neutral-400 mt-2">
            Chittagong, Bangladesh
          </p>
        </li>

       
      </ol>
    </div>
  );
}
