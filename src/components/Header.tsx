import React from 'react'
import { GitHubIcon, LinkedInIcon, XIcon } from './Icons'

type Props = {
	name: string
	photoUrl: string
	links: {
		github: string
		linkedin: string
		twitter: string
	}
}

export default function Header({ name, photoUrl, links }: Props) {
	return (
		<header className="mt-4">
			<div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
				<div className="flex flex-col gap-3">
					<h1 className="text-3xl md:text-5xl tracking-wide">{name}</h1>
					<div className="inline-flex items-center gap-2">
						<a className="grid place-items-center w-10 h-10 border border-border rounded-lg hover:-translate-y-0.5 hover:border-accent bg-transparent transition shadow-none hover:bg-accent/10"
							href={links.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
							<GitHubIcon className="icon text-text" />
						</a>
						<a className="grid place-items-center w-10 h-10 border border-border rounded-lg hover:-translate-y-0.5 hover:border-accent bg-transparent transition shadow-none hover:bg-accent/10"
							href={links.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
							<LinkedInIcon className="icon text-text" />
						</a>
						<a className="grid place-items-center w-10 h-10 border border-border rounded-lg hover:-translate-y-0.5 hover:border-accent bg-transparent transition shadow-none hover:bg-accent/10"
							href={links.twitter} target="_blank" rel="noreferrer noopener" aria-label="Twitter / X">
							<XIcon className="icon text-text" />
						</a>
					</div>
				</div>
				<img className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-2xl border border-border shadow-soft"
					src={photoUrl} alt={`${name} portrait`} />
			</div>
		</header>
	)
}


