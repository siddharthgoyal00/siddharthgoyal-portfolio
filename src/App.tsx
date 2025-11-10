import React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import { CloudIcon, DbIcon, JsIcon, NodeIcon, ReactIcon } from './components/Icons'

export default function App() {
	const year = new Date().getFullYear()
	return (
		<main className="container-centered">
			<Header
				name="Siddharth Goyal"
				photoUrl="https://via.placeholder.com/180x180.png?text=Your+Photo"
				links={{
					github: 'https://github.com/yourusername',
					linkedin: 'https://www.linkedin.com/in/yourusername',
					twitter: 'https://twitter.com/yourusername',
				}}
			/>

			<Section id="about" title="About">
				<p className="text-muted">
					Full-stack developer specializing in building robust web applications end-to-end. Passionate about clean architecture,
					performance, and delightful developer experience. Based in Your City. Open to opportunities and collaborations.
				</p>
			</Section>

			<Section id="experience" title="Experience">
				<ul className="grid gap-3">
					<li className="grid md:grid-cols-[140px_1fr] gap-4">
						<div className="text-muted">2024 july - 2024 Dec</div>
						<div><strong>Full-Stack Developer - Intern </strong> · Softeous Technology  · Built scalable services, led frontend modernization.</div>
					</li>
					<li className="grid md:grid-cols-[140px_1fr] gap-4">
						<div className="text-muted">2021 — 2023</div>
						<div><strong>Full-Stack Developer</strong> · Company Name · Delivered features across React/Node/Postgres stack.</div>
					</li>
				</ul>
			</Section>

			<Section id="education" title="Education">
				<ul className="grid gap-2">
					<li><strong>B.Tech / B.S.</strong> · University Name · 2017 — 2021</li>
				</ul>
			</Section>

			<Section id="skills" title="Skills">
				<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-2">
					<li className="card px-3 py-2 flex items-center gap-2"><JsIcon className="icon" /><span>JavaScript</span></li>
					<li className="card px-3 py-2 flex items-center gap-2"><ReactIcon className="icon" /><span>React</span></li>
					<li className="card px-3 py-2 flex items-center gap-2"><NodeIcon className="icon" /><span>Node.js</span></li>
					<li className="card px-3 py-2 flex items-center gap-2"><DbIcon className="icon" /><span>Databases</span></li>
					<li className="card px-3 py-2 flex items-center gap-2"><CloudIcon className="icon" /><span>Cloud</span></li>
				</ul>
			</Section>

			<Section id="projects" title="Projects">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
					<article className="card p-4">
						<h3 className="text-lg">Project One</h3>
						<p className="text-muted mt-1 mb-3">A concise description of the project, stack, and outcomes.</p>
						<a className="btn" href="#" target="_blank" rel="noreferrer noopener">View Project</a>
					</article>
					<article className="card p-4">
						<h3 className="text-lg">Project Two</h3>
						<p className="text-muted mt-1 mb-3">A concise description of the project, stack, and outcomes.</p>
						<a className="btn" href="#" target="_blank" rel="noreferrer noopener">View Project</a>
					</article>
					<article className="card p-4">
						<h3 className="text-lg">Project Three</h3>
						<p className="text-muted mt-1 mb-3">A concise description of the project, stack, and outcomes.</p>
						<a className="btn" href="#" target="_blank" rel="noreferrer noopener">View Project</a>
					</article>
					<article className="card p-4">
						<h3 className="text-lg">Project Four</h3>
						<p className="text-muted mt-1 mb-3">A concise description of the project, stack, and outcomes.</p>
						<a className="btn" href="#" target="_blank" rel="noreferrer noopener">View Project</a>
					</article>
				</div>
			</Section>

			<Section id="contact" title="Connect with me">
				<p>
					Email: <a href="mailto:youremail@example.com" className="underline decoration-accent underline-offset-4">youremail@example.com</a>
				</p>
			</Section>

			<footer className="mt-12 text-center text-muted border-t border-border pt-6">
				<p>© {year} Your Name</p>
			</footer>
		</main>
	)
}


