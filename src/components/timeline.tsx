import React from "react"

type TimelineItem = {
    company: string
    location: string
    role: string
    start: string
    end: string
    summary: string
    responsibilities: string[]
}

const jobs: TimelineItem[] = [
    {
        company: "Glass Lewis",
        location: "Dublin, Ireland (Hybrid)",
        role: "Senior Frontend Engineer",
        start: "March 2025",
        end: "December 2025",
        summary:
            "Working as part of a core frontend team delivering enterprise-grade financial applications.",
        responsibilities: [
            "Maintain and enhance existing large-scale Angular applications using TypeScript",
            "Design and develop new frontend applications for new products using a micro-frontend architecture with Native Federation",
            "Collaborate closely with backend, QA, and product teams in an Agile environment",
            "Contribute to CI/CD pipelines and containerized deployments using Docker and Azure DevOps",
        ],
    },
]

const Timeline = () => {
    return (
        <div className="boxed">
            <div className="px-4 py-20 lg:py-40 lg:px-0">
                <h2 className="text-color-1 font-black text-5xl lg:text-6xl text-center mb-16">
                    Experience
                </h2>
                <div className="relative">
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-primary transform -translate-x-1/2" />
                    {jobs.map((job, i) => (
                        <div
                            key={i}
                            className="relative flex flex-col lg:flex-row lg:items-start mb-12 last:mb-0"
                        >
                            <div className="hidden lg:flex absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-bg z-10" />
                            <div className="lg:w-1/2 lg:pr-16 lg:text-right mb-4 lg:mb-0">
                                <p className="text-color-2 font-semibold text-lg">
                                    {job.start} – {job.end}
                                </p>
                                <p className="text-color-3 text-sm">{job.location}</p>
                            </div>
                            <div className="lg:w-1/2 lg:pl-16">
                                <h3 className="text-color-1 font-bold text-2xl">
                                    {job.company}
                                </h3>
                                <p className="text-color-2 font-semibold mb-2">{job.role}</p>
                                <p className="text-base mb-3">{job.summary}</p>
                                <ul className="list-disc list-inside space-y-1">
                                    {job.responsibilities.map((r, j) => (
                                        <li key={j} className="text-sm text-color-default">
                                            {r}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Timeline
