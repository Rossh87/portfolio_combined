import React from 'react';

// Get svg graphics
import {FaGithubSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';

import './styles.scss';

const Footer = props => {
	return(
		<footer className="c-footer">
			<ul className="c-footer_links">
				
				<li className="c-footer_link">
					<a href="https://www.linkedin.com/in/ross-hunter-608b9782/">
						<span className="c-footer_text">
								LinkedIn
						</span>
						<span className="c-footer_graphic">
							<FaLinkedin />
						</span>
					</a>
				</li>

				<li className="c-footer_link">
					<a href="https://twitter.com/hunterdev8">
						<span className="c-footer_text">
								Twitter
						</span>
						<span className="c-footer_graphic">
							<FaTwitterSquare />
						</span>
					</a>
				</li>

				<li className="c-footer_link">
					<a href="https://github.com/Rossh87">
						<span className="c-footer_text">
								Github
						</span>
						<span className="c-footer_graphic">
							<FaGithubSquare />
						</span>
					</a>
				</li>

				<li className="c-footer_link">
					<a href="#about">Ross Hunter, 2019</a>
				</li>

			</ul>
		</footer>
	)
}

export default Footer;