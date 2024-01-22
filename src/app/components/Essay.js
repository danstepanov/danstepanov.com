
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const Essay = ({ title, description, href }) => (
	<a href={href} className="flex flex-row min-w-0 py-4 px-6 border-gray-200 hover:shadow border rounded dark:border-gray-800 w-full justify-between mb-4">
		<div className="flex flex-col">
			<div className="flex items-center">
				<p className="text-lg font-bold leading-6 text-[#0089D0] dark:text-white">{title}</p>
			</div>
			<div className="mt-1 flex items-center gap-x-2 leading-5 text-gray-700 dark:text-gray-500">
				<div className="max-w-xs md:max-w-sm">
					<p className='line-clamp-3 text-gray-500 dark:text-gray-400'>{description}</p>
				</div>
			</div>
		</div>
		<div className="flex items-center">
			<ChevronRightIcon className="h-6 w-6 flex-none text-gray-500 dark:text-white" aria-hidden="true" />
		</div>
	</a>
);

export default Essay;