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
					Full-stack developer with experience across web platforms, data engineering, and applied AI.
					Recently built analytics infrastructure for ISRO's NISAR satellite mission and shipped
					RAG/LLM-powered products. Passionate about clean architecture, performance, and delightful
					developer experience. Based in Jaipur, India. Open to opportunities and collaborations.
				</p>
			</Section>

			<Section id="experience" title="Experience">
				<ul className="grid gap-6">
					<li className="grid md:grid-cols-[140px_1fr] gap-4">
						<div className="text-muted">2026 <br /> Feb - Jun</div>
						<div>
							<strong>ISRO – NRSC (National Remote Sensing Centre)</strong><br/>
							<strong>Intern, Data Processing Division</strong> · Hyderabad, India
							<p className="text-sm mt-1">Worked on live, operational satellite metadata from <strong>NISAR</strong> — the NASA-ISRO joint SAR (Synthetic Aperture Radar) Earth observation mission, one of the most advanced satellites of its kind, actively downlinking data with years of mission life ahead.</p>
							<ul className="list-disc ml-5 mt-2 space-y-1">
								<li>Built a full-stack analytics dashboard for the mission, letting scientists and operators visualize satellite metadata across 23 source tables without writing SQL.</li>
								<li>Architected a 2-phase ETL pipeline that cut manual reporting time from 4–6 hours to 3–5 minutes.</li>
								<li>Built a secure Text-to-SQL layer (DeepSeek-Coder-6.7B via llama.cpp) converting natural language into validated, read-only SQL across a 1,600+ column schema.</li>
							</ul>
							<div className="text-muted mt-2 text-sm">Python · Flask · Docker · PostgreSQL · llama.cpp · Leaflet · Chart.js</div>
						</div>
					</li>

					<li className="grid md:grid-cols-[140px_1fr] gap-4">
						<div className="text-muted">2024 <br /> Jul - Dec</div>
						<div>
							<strong>Softeous Technology</strong><br/>
							<strong>Full-Stack Developer – Intern</strong> · Jaipur, India
							<ul className="list-disc ml-5 mt-2 space-y-1">
								<li>Built onboarding & leave management features end-to-end for an internal HR system, with JWT auth and role-based access control (Admin/Employee).</li>
							</ul>
							<div className="text-muted mt-2 text-sm">PostgreSQL · TypeScript · Express.js · React.js · Tailwind CSS</div>
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
							B-Tech Computer Science and Engineering | 7.83 CGPA
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
				<p className="text-sm mb-4 -mt-1">
					<strong>Highlight:</strong> shipped production code against live, operational satellite metadata from <strong>NISAR</strong> — the NASA–ISRO joint SAR Earth observation satellite, among the most advanced of its kind, actively transmitting data for years to come.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
					<div>
						<h4 className="text-sm text-muted mb-2">Languages</h4>
						<div className="flex flex-wrap gap-2">
							<span className="card px-3 py-1.5 flex items-center gap-2"><JsIcon className="icon" /><span>JavaScript</span></span>
							<span className="card px-3 py-1.5 flex items-center gap-2"><DbIcon className="icon" /><span>TypeScript</span></span>
							<span className="card px-3 py-1.5 flex items-center gap-2"><DbIcon className="icon" /><span>Java</span></span>
							<span className="card px-3 py-1.5 flex items-center gap-2"><CloudIcon className="icon" /><span>Python</span></span>
						</div>
					</div>
					<div>
						<h4 className="text-sm text-muted mb-2">Backend & Data</h4>
						<div className="flex flex-wrap gap-2">
							<span className="card px-3 py-1.5 flex items-center gap-2"><CloudIcon className="icon" /><span>Spring Boot</span></span>
							<span className="card px-3 py-1.5 flex items-center gap-2"><CloudIcon className="icon" /><span>Flask</span></span>
							<span className="card px-3 py-1.5 flex items-center gap-2"><CloudIcon className="icon" /><span>Kafka</span></span>
							<span className="card px-3 py-1.5 flex items-center gap-2"><CloudIcon className="icon" /><span>PostgreSQL</span></span>
						</div>
					</div>
					<div>
						<h4 className="text-sm text-muted mb-2">AI / LLM</h4>
						<div className="flex flex-wrap gap-2">
							<span className="card px-3 py-1.5 flex items-center gap-2"><NodeIcon className="icon" /><span>Spring AI</span></span>
							<span className="card px-3 py-1.5 flex items-center gap-2"><CloudIcon className="icon" /><span>RAG Pipelines</span></span>
							<span className="card px-3 py-1.5 flex items-center gap-2"><CloudIcon className="icon" /><span>Ollama / llama.cpp</span></span>
							<span className="card px-3 py-1.5 flex items-center gap-2"><CloudIcon className="icon" /><span>PgVector</span></span>
						</div>
					</div>
					<div>
						<h4 className="text-sm text-muted mb-2">Frontend & Tools</h4>
						<div className="flex flex-wrap gap-2">
							<span className="card px-3 py-1.5 flex items-center gap-2"><ReactIcon className="icon" /><span>React</span></span>
							<span className="card px-3 py-1.5 flex items-center gap-2"><CloudIcon className="icon" /><span>Docker</span></span>
							<span className="card px-3 py-1.5 flex items-center gap-2"><CloudIcon className="icon" /><span>Git</span></span>
						</div>
					</div>
				</div>
			</Section>

			<Section id="projects" title="Projects">
				<div className="grid grid-cols-1 max-w-xl mt-3">
					<article className="card p-4">
						<h3 className="text-lg">AxiomFlow</h3>
						<p className="text-muted mt-1 mb-3">Document Intelligence SaaS platform: event-driven Spring Boot backend (Kafka producer/consumer), async Spring AI ingestion pipeline (Tika → TokenTextSplitter → PgVectorStore via Ollama), JWT auth with Spring Security, Bucket4j rate limiting, and a RAG Q&A endpoint with per-query cost tracking across 3 subscription tiers.</p>
						<a className="btn" href="https://github.com/siddharthgoyal00/axiomflow" target="_blank" rel="noreferrer noopener">GitHub</a>
					</article>
				</div>
			</Section>

			<Section id="contact" title="Connect with me">
				<p>
					Email: <a href="mailto:devsiddharthgoyal@gmail.com" className="underline decoration-accent underline-offset-4">devsiddharthgoyal@gmail.com</a>
				</p>
			</Section>

			<footer className="mt-12 text-center text-muted border-t border-border pt-6">
				<p>© {year} SiddharthGoyal</p>
			</footer>
		</main>
	)
}