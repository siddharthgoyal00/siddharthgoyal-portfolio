import React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import { CloudIcon, DbIcon, JsIcon, NodeIcon, ReactIcon } from './components/Icons'
import siddpic from './assets/siddpic.jpg'
export default function App() {
	const year = new Date().getFullYear()
	return (
		<main className="container-centered">
			<Header
				name="Siddharth Goyal"
				photoUrl={siddpic}
				links={{
					github: 'https://github.com/siddharthgoyal00',
					linkedin: 'https://www.linkedin.com/in/siddharth-goyal-847370245/',
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
						<div className="text-muted">2024 <br /> July - Dec</div>
						<div><strong>Softeous Technology </strong><br/>
						         <strong>Full-Stack Developer - Intern </strong> <br/>
								 <li> - Contributed to their clients project by migrating parts from React.js to Next.js.
								 </li>
								 <li>
									 - Builded core features of their HR-management system (leave management, attendance management, etc.)
								 </li>
								 </div>
					</li>
					
				</ul>
			</Section>

			<Section id="education" title="Education">
			<ul className="grid gap-3">
					<li className="grid md:grid-cols-[140px_1fr] gap-4">
						<div className="text-muted">2022 - 2026</div>
						<div>
							<strong>
							JECRC University
							</strong> <br /> 
							B-Tech Computer Science and Engineering| 7.77 GPA 
						</div>
					</li>
					
			</ul>
			<ul className="grid gap-3">
					<li className="grid md:grid-cols-[140px_1fr] gap-4">
						<div className="text-muted">2020 - 2021</div>
						<div>
							<strong>
							M.N. Modern Public School
							</strong> <br /> 
							Senior Secondary | 91.60 %
						</div>
					</li>
					
			</ul>
			</Section>

			<Section id="skills" title="Skills">
				<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-2">
					<li className="card px-3 py-2 flex items-center gap-2"><JsIcon className="icon" /><span>JavaScript</span></li>
					<li className="card px-3 py-2 flex items-center gap-2"><ReactIcon className="icon" /><span>React</span></li>
					<li className="card px-3 py-2 flex items-center gap-2"><NodeIcon className="icon" /><span>Node.js</span></li>
					<li className="card px-3 py-2 flex items-center gap-2"><DbIcon className="icon" /><span>TypeScript</span></li>
					<li className="card px-3 py-2 flex items-center gap-2"><CloudIcon className="icon" /><span>Next.js</span></li>
					<li className="card px-3 py-2 flex items-center gap-2"><CloudIcon className="icon" /><span>PostgreSQL</span></li>
					<li className="card px-3 py-2 flex items-center gap-2"><CloudIcon className="icon" /><span>MongoDB</span></li>
					<li className="card px-3 py-2 flex items-center gap-2"><CloudIcon className="icon" /><span>Express.js</span></li>
					<li className="card px-3 py-2 flex items-center gap-2"><CloudIcon className="icon" /><span>tRPC</span></li>
				</ul>
			</Section>

			<Section id="projects" title="Projects">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
					<article className="card p-4">
						<h3 className="text-lg">Vaplier</h3>
						<p className="text-muted mt-1 mb-3">low Code No Code AI Workflow Automation platform </p>
						<a className="btn" href="https://github.com/siddharthgoyal00/vaplier" target="_blank" rel="noreferrer noopener">GitHub</a>
					</article>
					<article className="card p-4">
						<h3 className="text-lg">juggleDocs</h3>
						<p className="text-muted mt-1 mb-3">AI Powered Document Query Platform. Where Users can Query the Uploaded Document </p>
						<a className="btn" href="https://github.com/siddharthgoyal00/juggledocs" target="_blank" rel="noreferrer noopener">GitHub</a>
					</article>
					<article className="card p-4">
						<h3 className="text-lg">KaroFreelance</h3>
						<p className="text-muted mt-1 mb-3">It is a freelance platform</p>
						<a className="btn" href="https://github.com/siddharthgoyal00/karo_freelance" target="_blank" rel="noreferrer noopener">GitHub</a>
					</article>
					<article className="card p-4">
						<h3 className="text-lg">DoneHai</h3>
						<p className="text-muted mt-1 mb-3">Full-Stack Task Manager Platform where you can assign Daily, Weekly, and Monthly tasks.</p>
						<a className="btn" href="https://github.com/siddharthgoyal00/DoneHai" target="_blank" rel="noreferrer noopener">GitHub</a>
					</article>
				</div>
			</Section>

			<Section id="contact" title="Connect with me">
				<p>
					Email: <a href="devsiddharthgoyal@gmail.com" className="underline decoration-accent underline-offset-4">devsiddharthgoyal@gmail.com</a>
				</p>
			</Section>

			<footer className="mt-12 text-center text-muted border-t border-border pt-6">
				<p>© {year} SiddharthGoyal</p>
			</footer>
		</main>
	)
}


