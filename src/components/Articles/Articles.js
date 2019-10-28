import React, {useState, useEffect} from 'react';
import axios from 'axios';
import s from './Articles.module.css';

const Events = (props) => {
	const [data, setData] = useState({ hits: [] });
	const [query, setQuery] = useState('');
	const [url, setUrl] = useState(
		'https://hn.algolia.com/api/v1/search?query=redux'
	);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	let uniqueId = 1;

	useEffect(() => {
		const fetchData = async () => {
			setIsError(false);
			setIsLoading(true);

			try {
				const result = await axios(url);
				setData(result.data);
			} catch (error) {
				setIsError(true);
			}
			
			setIsLoading(false);
		};
		fetchData();
	}, [url])

	return (
		<div className={s.articles}>
			<h1 className={s.articlesHeader}>Список статей</h1>
			<input 
				value={query} 
				placeholder="введите запрос"
				onChange={event => setQuery(event.target.value)}
			/>
			<button type="button" 
					onClick={() => 
						setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
					}
			>
				Поиск
			</button>
			{isError 
			? <div>Крысы перегрызли кабель, запросы временно невозможны.</div>
			: <>{isLoading 
				? <div className="preLoader">Идет загрузка...</div>
				: <>{data.hits.some(item => item.url) 
					? <ul>
						 {data.hits.map((item, index) => {

							if (item.url) {
								return <li key={uniqueId++}>
									<a href={item.url} rel="nofollow noopener" target="_blank">{item.title}</a>
								</li>
							}
						})} 
						</ul>
					: <div>К сожалению, по данному запросу ничего не найдно</div>
					}
					</>
			}</>
		}
		</div>
	)
};

export default Events;