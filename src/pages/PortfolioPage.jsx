import Plug from '../assets/theplug.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Project from '../components/UI/Project';

function PortfolioPage() {
	const projects = [
		{
			id: 1,
			img: Plug,
			text: '',
			title: 'The Plug',
			link: 'https://sleepy-bayou-35337-4939ad58a73e.herokuapp.com/'
		},
		{
			id: 2,
			img: '',
			text: 'sample',
			title: 'Sample',
			link: 'github.com',
			repo: 'github.com'
		},
		{
			id: 3,
			img: '',
			text: 'sample',
			title: 'Sample',
			link: 'github.com',
			repo: 'github.com'
		}
	];

	return (
		<Container className="align-items-center">
			<Row xs={1} sm={2} md={3}>
				{projects.map((project) => (
					<div key={project.id} className="col-auto px-2 py-2">
						<Project {...project} />
					</div>
				))}
			</Row>
		</Container>
	);
}

export default PortfolioPage;