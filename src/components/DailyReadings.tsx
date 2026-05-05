import { useState, useEffect } from "react";

interface Reading {
	title: string;
	fullText: string;
}

interface LiturgicalDay {
	title: string;
	link: string;
	dailyIcon: string;
	feastDayTitle: string;
	fastDesignation: string;
	feastDayDescription: string;
	readings: Reading[];
}

interface SynaxarionStory {
	title: string;
	story: string;
}

type Tab = "readings" | "synaxarion";

export default function DailyReadings() {
	const [liturgicalDays, setLiturgicalDays] = useState<LiturgicalDay[]>([]);
	const [synaxarion, setSynaxarion] = useState<SynaxarionStory[]>([]);
	const [selectedReading, setSelectedReading] = useState(0);
	const [selectedSaint, setSelectedSaint] = useState(0);
	const [activeTab, setActiveTab] = useState<Tab>("readings");
	const [loading, setLoading] = useState(true);

	const today = new Date().toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	useEffect(() => {
		Promise.all([
			fetch("/api/daily-readings")
				.then((r) => r.json())
				.then(setLiturgicalDays)
				.catch(() => {}),
			fetch("https://orthocal.info/api/gregorian/")
				.then((r) => r.json())
				.then((data) => setSynaxarion(data.stories || []))
				.catch(() => {}),
		]).finally(() => setLoading(false));
	}, []);

	if (loading) {
		return (
			<div style={{ textAlign: "center", padding: "3rem 0", color: "var(--brand-primary)" }}>
				Loading today's readings...
			</div>
		);
	}

	const day = liturgicalDays[0];

	return (
		<div className="daily-readings-container">
			<p className="daily-readings-date">{today}</p>

			{/* Feast day info */}
			{day && (
				<div className="daily-readings-feast">
					<p className="feast-title">{day.feastDayTitle}</p>
					{day.feastDayDescription && (
						<p className="feast-desc">{day.feastDayDescription}</p>
					)}
					{day.fastDesignation && (
						<p className="fast-info">{day.fastDesignation}</p>
					)}
				</div>
			)}

			{/* Tabs */}
			<div className="daily-readings-tabs">
				<button
					className={`tab-btn ${activeTab === "readings" ? "tab-active" : ""}`}
					onClick={() => setActiveTab("readings")}
				>
					Liturgical Readings
				</button>
				<button
					className={`tab-btn ${activeTab === "synaxarion" ? "tab-active" : ""}`}
					onClick={() => setActiveTab("synaxarion")}
				>
					Synaxarion
				</button>
			</div>

			{/* Readings tab */}
			{activeTab === "readings" && day && (
				<div className="readings-panel">
					<div className="readings-selector">
						{day.readings.map((reading, idx) => (
							<button
								key={idx}
								className={`reading-btn ${selectedReading === idx ? "reading-active" : ""}`}
								onClick={() => setSelectedReading(idx)}
							>
								{reading.title}
							</button>
						))}
					</div>
					<div className="reading-content">
						<h3 className="reading-title">{day.readings[selectedReading]?.title}</h3>
						<div
							className="reading-text"
							dangerouslySetInnerHTML={{
								__html: day.readings[selectedReading]?.fullText || "",
							}}
						/>
					</div>
				</div>
			)}

			{/* Synaxarion tab */}
			{activeTab === "synaxarion" && synaxarion.length > 0 && (
				<div className="synaxarion-panel">
					<div className="readings-selector">
						{synaxarion.map((story, idx) => (
							<button
								key={idx}
								className={`reading-btn ${selectedSaint === idx ? "reading-active" : ""}`}
								onClick={() => setSelectedSaint(idx)}
							>
								{story.title}
							</button>
						))}
					</div>
					<div className="reading-content">
						<h3 className="reading-title">{synaxarion[selectedSaint]?.title}</h3>
						<div
							className="reading-text"
							dangerouslySetInnerHTML={{
								__html: synaxarion[selectedSaint]?.story || "",
							}}
						/>
					</div>
				</div>
			)}

			{/* Attribution */}
			<p className="daily-readings-attribution">
				Daily readings by{" "}
				<a href="https://www.antiochian.org/liturgicday" target="_blank" rel="noreferrer">
					Antiochian Archdiocese
				</a>
				{" | "}
				Saints by{" "}
				<a href="https://orthocal.info/" target="_blank" rel="noreferrer">
					Orthocal.info
				</a>
			</p>
		</div>
	);
}
