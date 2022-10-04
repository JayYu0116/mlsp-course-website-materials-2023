const lectures = [
	{
		topic: 'Introduction',
		date: 'August 30, 2022',
		link: '/ppt/Lecture1_Introduction.pdf'
	}, 
	{
		topic: 'Linear Algebra 1',
		date: 'September 1, 2022',
		link: '/ppt/Lecture2_LinearAlgebra1.pdf'
	},
	{
		topic: 'Linear Algebra 2',
		date: 'September 6, 2022',
		link: '/ppt/Lecture3_LinearAlgebra2.pdf'
	},{
		topic: 'Optimization',
		date: 'September 8, 2022',
		link: '/ppt/Lecture4_Optimization.pdf'
	},{
		topic: 'Deterministic Representations',
		date: 'September 13, 2022',
		link: '/ppt/Lecture5_DeterministicRepresentations.pdf'
	},{
		topic: 'Data-Driven Representations',
		date: 'September 15, 2022',
		link: '/ppt/Lecture6_EigenRepresentations.pdf'
	},{
		topic: 'Classification and Metaclassifiers',
		date: 'September 20, 2022',
		link: '/ppt/Lecture7_BoostingandFacedetectionCMU.pdf'
	},{
		topic: 'Face Detection',
		date: 'September 22, 2022',
		link: '/ppt/Lecture8_Facedetection.pdf'
	},
	{
		topic: 'Non-Negative Matrix Factorization',
		date: 'September 27, 2022',
		link: '/ppt/Lecture9_NonNegativeMatrixFactorization.pdf'
	},{
		topic: 'Probability and Information Theory',
		date: 'September 29, 2022',
		link: '/ppt/Lecture10_Probability&InformationTheory.pdf'
	},{
		topic: 'Independent Component Analysis 1',
		date: 'October 4, 2022',
		link: '/ppt/Lecture11_ICA.pdf'
	},{
		topic: 'Independent Component Analysis 2',
		date: 'October 6, 2022',
		// link: '/ppt/Lecture ICA new2.pdf'
		link: '#'
	},{
		topic: 'Clustering',
		date: 'October 11, 2022',
		// link: '/ppt/Lecture13.clustering.pdf'
		link: '#'
	},{
		topic: 'Dictionary Representations',
		date: 'October 13, 2022',
		// link: '/ppt/Lecture14 sparseovercomplete.pdf'
		link: '#'
	},{
		topic: 'Happy break !!!',
		date: 'October 18, 2022',
		link: '#'
	},{
		topic: 'Happy break !!!',
		date: 'October 20, 2022',
		link: '#'
	},{
		topic: 'Guest Lecture: Compressed Sensing',
		date: 'October 25, 2022',
		// link: '/ppt/21_10_Bhiksha.pdf'
		link: '#'
	},{
		topic: 'Regression and Prediction',
		date: 'October 27, 2022',
		// link: '/ppt/Lecture15.regression.pdf'
		link: '#'
	},{
		topic: 'Linear Classifiers',
		date: 'November 1, 2022',
		// link: '/ppt/lec17 SVM.pdf'
		link: '#'
	},{
		topic: 'Expectation Maximization 1',
		date: 'November 3, 2022',
		// link: '/ppt/EMpdf.pdf'
		link: '#'
	},{
		topic: 'Expectation Maximization 2',
		date: 'November 8, 2022',
		// link: '/ppt/EMpdf.pdf'
		link: '#'
	},{
		topic: 'Factor Analysis',
		date: 'November 10, 2022',
		// link: '/ppt/lsc20 FA.pdf'
		link: '#'
	},{
		topic: 'Supervised Representations',
		date: 'November 15, 2022',
		// link: '/ppt/Lecture21.CCA_LDA.pdf'
		link: '#'
	},{
		topic: 'Hidden Markov Models 1',
		date: 'November 17, 2022',
		// link: '/ppt/Lecture22.HMM.pdf'
		link: '#'
	},{
		topic: 'Hidden Markov Models 2',
		date: 'November 22, 2022',
		// link: '/ppt/Lecture22.HMM v2.pdf'
		link: '#'
	},{
		topic: 'Happy Thanksgiving!',
		date: 'November 24, 2022',
		link: '#'
	},{
		topic: 'Non-Linear Dynamical Systems',
		date: 'November 29, 2022',
		// link: '/ppt/Nonlinear Dynamics.pdf'
		link: '#'
	},{
		topic: 'Kalman Filtering 1',
		date: 'December 1, 2022',
		// link: '/ppt/Lecture23.pdf'
		link: '#'
	},{
		topic: 'Kalman Filtering 2',
		date: 'December 6, 2022',
		// link: '/ppt/Lecture24x.kalman.pdf'
		link: '#'
	},{
		topic: 'Particle Filtering',
		date: 'December 8, 2022',
		// link: '/ppt/Lecture24x.kalman.pdf'
		link: '#'
	}
]
export default function LectureListSection() {
	return (
		<div className="flex flex-col mx-auto pb-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pb-24">
			<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Date
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Topics
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Slides
									</th>
							</tr>
							</thead>
							<tbody>
								{lectures.map((lecture, lectureIdx) => (
									<tr key={lecture.topic} className={lectureIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lecture.date}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lecture.topic}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											<a href={lecture.link} className="text-indigo-600 hover:text-indigo-900">
												Download
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}