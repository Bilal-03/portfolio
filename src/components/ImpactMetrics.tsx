import Reveal from "@/components/ui/Reveal";
import { IMPACT_METRICS } from "@/data/projects";

export default function ImpactMetrics() {
  return (
    <section className="impact-metrics-section">
      <div className="site-container">
        <div className="impact-metrics-grid">
          {IMPACT_METRICS.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 70}>
              <div className="impact-metric-card">
                <span className="impact-metric-badge">{metric.badge}</span>
                <span className="impact-metric-value">{metric.value}</span>
                <span className="impact-metric-label">{metric.label}</span>
                <span className="impact-metric-detail">{metric.detail}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
