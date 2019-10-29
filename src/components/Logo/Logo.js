import React from 'react';
import s from './Logo.module.css';

const Logo = () => {

	return (
		<div className={s.logo}>
			<div className={s.logoOuter}>
				<div className={s.logoInner}></div>
			</div>	
		</div>
	)
}

export default Logo;